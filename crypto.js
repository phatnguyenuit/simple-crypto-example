import crypto from 'crypto';

class Crypto {
  constructor(keySecret) {
    this.keySecret = keySecret;
  }
  decrypt(text) {
    let cc = crypto.createDecipher(
      'aes-128-ecb',
      new Buffer(this.keySecret, 'base64'),
    );
    let decrypted = Buffer.concat([
      cc.update(text, 'base64'),
      cc.final(),
    ]).toString('utf8');

    return decrypted;
  }

  encrypt(text) {
    let cc = crypto.createCipher(
      'aes-128-ecb',
      new Buffer(this.keySecret, 'base64'),
    );
    let encrypted = Buffer.concat([
      cc.update(text, 'utf8'),
      cc.final(),
    ]).toString('base64');

    return encrypted;
  }
}

export default Crypto;
