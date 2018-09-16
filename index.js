alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
encoded = "QWERTYUIOPASDFGHJKLZXCVBNM)(*&^%$#@1";
 
var word = "";

exports.encode = function(word) {
  word = word.toUpperCase();
  
  result = "";
  
  i=0;

  while (i < word.length) {
    ind = alphabet.indexOf(word.charAt(i));
    result = result + encoded.charAt(ind);
    i++;
  }
  
  return result;
  
}
