from Crypto.PublicKey import RSA
from Crypto.Hash import SHA256
from Crypto.Signature import PKCS1_v1_5


key_f = 'Pubkey.out'
data_f = 'message.txt'
sig_f = 'en_data.sig'

def verify_signature(key, data, sig_f):
    print("Verifying Signature")
    h = SHA256.new(data)
    rsa = RSA.importKey(key)
    signer = PKCS1_v1_5.new(rsa)
    with open(sig_f, 'rb') as f: signature = f.read()
    rsp = "Success" if (signer.verify(h, signature)) else " Verification Failure"
    print(rsp)


with open(key_f, 'rb') as f: key = f.read()
with open(data_f, 'rb') as f: data = f.read()

verify_signature(key, data, sig_f)


