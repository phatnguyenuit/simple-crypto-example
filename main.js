import Crypto from './crypto';
document.addEventListener('DOMContentLoaded', function() {
  var btnEncrypt = document.getElementById('btnEncrypt');
  var btnDecrypt = document.getElementById('btnDecrypt');
  var keySecretEle = document.getElementById('keySecret');
  var plainText = document.getElementById('plainText');
  var result = document.getElementById('result');
  var cryptoInstance = new Crypto();

  btnEncrypt.addEventListener('click', function(e) {
    e.preventDefault();
    var keySecret = keySecretEle.value;
    if (cryptoInstance.keySecret !== keySecret) {
      cryptoInstance = new Crypto(keySecret);
    }
    result.value = cryptoInstance.encrypt(plainText.value);
  });

  btnDecrypt.addEventListener('click', function(e) {
    e.preventDefault();
    var keySecret = keySecretEle.value;
    if (cryptoInstance.keySecret !== keySecret) {
      cryptoInstance = new Crypto(keySecret);
    }
    result.value = cryptoInstance.decrypt(plainText.value);
  });
});
