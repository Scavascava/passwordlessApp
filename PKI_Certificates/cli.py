from Crypto.PublicKey import RSA
from Crypto.Hash import SHA256
from Crypto.Signature import PKCS1_v1_5


key_f = 'Privkey.out'
data_f = 'message.txt'
sig_f = 'en_data.sig'

def make_signature(key, data, sig_f):
    print("Generating Signature")
    h = SHA256.new(data)
    rsa = RSA.importKey(key)
    signer = PKCS1_v1_5.new(rsa)
    signature = signer.sign(h)
    with open(sig_f, 'wb') as f: f.write(signature)


with open(key_f, 'rb') as f: key = f.read()
with open(data_f, 'rb') as f: data = f.read()

make_signature(key, data, sig_f)


