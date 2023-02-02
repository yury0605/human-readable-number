 
function toReadable(number) {
 var converter = require('number-to-words');
return converter.toWords(number);
}
console.log(toReadable(15))





