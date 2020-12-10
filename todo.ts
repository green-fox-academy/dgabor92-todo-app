'use strict';

import { Todofunction } from './function';

let todo = (): void => {
  if (process.argv.length === 2) {
    let a = new Todofunction();
    a.printCommands();
  }
  if (process.argv[2] === '-l') {
    let a = new Todofunction();
    a.listTasks();
  }
  if (process.argv[2] === '-a') {
    let a = new Todofunction();
    a.writeTask();
  }
};
todo();
