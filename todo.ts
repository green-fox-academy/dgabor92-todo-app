'use strict';

// process.argv -> array az eredmenye
// console.log(process.argv);

// if (process.argv[2] === '-l') {
//   console.log('Here comes the description');
// } else {
//   console.log('I dont know what to do');
// }

console.log(process.argv);

if (process.argv[2] === '-a') {
  console.log('Walk the dog');
  console.log('Buy milk');
  console.log('Do homework');
} else {
  console.log('There is no task in the file');
}

export default class Todo {
  protected _lists = process.argv[2] === '-l';
  protected _add = process.argv[2] === '-a';
  protected _remove = process.argv[2] === '-r';
  protected _complete = process.argv[2] === '-c';

  addTask() {
    if (this._add) {
      console.log('Walk the dog');
      console.log('Buy milk');
      console.log('Do homework');
    } else {
      console.log('There is no task in the file');
    }
  }
}
