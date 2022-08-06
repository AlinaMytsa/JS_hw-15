'use strict';

for (let primeNumber = +prompt('Enter a prime number'); ; primeNumber++){
  if (primeNumber % 2 === 0) {
    alert('False');
  } else
  {
    alert('True');
  }
  break;
}
