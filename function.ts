'use strict';

const fs = require('fs');

export default class Todofunction {
  // print the argument lists
  printCommands(): void {
    console.log(
      'Command Line Todo application' +
        '\n' +
        '=============================' +
        '\n' +
        '\n' +
        'Command line arguments:' +
        '\n' +
        '    -l   Lists all the tasks' +
        '\n' +
        '    -a   Adds a new task' +
        '\n' +
        '    -r   Removes an task' +
        '\n' +
        '    -c   Completes an task'
    );
    console.log('________________________');
  }
  //read from the predefined file the tasks and log it
  listTasks(): void {
    let context: string = fs.readFileSync('task.txt', 'utf-8');
    if (context == '') {
      console.log('No todos for today! ;)');
    } else {
      let contextLines: string[] = [];
      context.split('\n').forEach(function (lines) {
        contextLines.push(lines);
      });
      for (let i: number = 0; i < contextLines.length; i++) {
        console.log(i + 1 + '.-' + contextLines[i]);
      }
    }
    console.log('________________________');
  }

  writeTask(task: string): void {
    let list: string[] = [];
    list.push(task);
    fs.writeFileSync('task.txt', list, (err) => {
      if (err) {
        throw Error;
      }
    });
  }
}
