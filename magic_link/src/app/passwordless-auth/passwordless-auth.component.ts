import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-passwordless-auth',
  templateUrl: './passwordless-auth.component.html',
  styleUrls: ['./passwordless-auth.component.css']
})
export class PasswordlessAuthComponent implements OnInit {

  user: Observable<any>;
  email: string;
  emailSent = false;
  errorMessage: string;
  

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.user = this.afAuth.authState;
    const url = this.router.url;
    this.confirmSignIn(url);
  }

  async sendEmailLink(email: string) {
    const actionCodeSettings = {
      url: 'http://localhost:4200/login',
      handleCodeInApp: true
    };

    try {
      await this.afAuth.auth.sendSignInLinkToEmail(
        this.email,
        actionCodeSettings
      );

      window.localStorage.setItem('emailForSignIn', this.email);
      this.emailSent = true;

    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async confirmSignIn(url) {
    try {
      if (this.afAuth.auth.isSignInWithEmailLink(url)) {
        let email = window.localStorage.getItem('emailForSignIn');

        // If missing email, prompt user for it
        if (!email) {
          email = window.prompt('Please provide your email for confirmation')
        }

        // Signin user and remove he email LocalStorage
        const result = await this.afAuth.auth.signInWithEmailLink(email, url);
        window.localStorage.removeItem('emailForSignIn');
      }
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

}
