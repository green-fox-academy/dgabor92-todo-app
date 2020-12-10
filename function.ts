'use strict';

const fs = require('fs');
const input: string[] = process.argv;
export class Todofunction {
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

  writeTask(): void {
    fs.appendFileSync('task.txt', '\n' + input[3], (err: any) => {
      if (err) {
        console.log('Please add some task');
      } else if (input[3] === '') {
        console.log('Please add some task');
      }
    });
  }

  removeTask(): string {
    let context: string = fs.readFileSync('task.txt', 'utf-8');
    if (context.lastIndexOf('\n') > 0) {
      return context.substring(0, context.lastIndexOf('\n'));
    } else {
      return context;
    }
  }
  completeTask(): void {
    fs.readFileSync('task.txt', 'utf-8', function (err: any, data: string) {
      if (err) {
        throw Error;
      }
      let completedData = data.split('\n').slice(1);
      console.log(completedData + 'completed');
    });
  }
}
