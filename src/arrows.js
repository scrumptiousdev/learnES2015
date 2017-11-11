class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  log() {
    this.tasks.forEach(task => console.log(task));
    this.tasks.forEach((task, index) => console.log(task, index));
    this.tasks.forEach(() => console.log('Just logging'));
  }

  prepare() {
    this.tasks.forEach(task => task.toGulp());
  }
}

class Task {
  toGulp() {
    console.log('converting to gulp');
  }
}

new TaskCollection([
  new Task, new Task, new Task
]).log();

new TaskCollection([
  new Task, new Task, new Task
]).prepare();

let names = ["Ryan", "Jemma", "Jinwoo"];
let result = names.map(name => `${name} is cool`);
console.log(result);
