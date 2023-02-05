import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  task = ''
  tasks = [
    { id: 1, value: 'to do 1', done: false},
  ]

  addTask () {
    this.tasks.push({ id: this.tasks.length+1, value: this.task, done: false})
    this.task = '';
  }

  editTask(index: any) {
    this.tasks[index].done = !this.tasks[index].done
  }

  deleteTask (index: any) {
    this.tasks.splice(index, 1)
  }
}
