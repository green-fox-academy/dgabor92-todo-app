'use strict';

// process.argv -> array az eredmenye
console.log(process.argv);

if (process.argv[2] === '-l') {
  console.log('Here comes the description');
} else {
  console.log('I dont know what to do');
}
