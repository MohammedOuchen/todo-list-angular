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
          { id: 1, value: 'to do 1'},
  ]

  addTask () {
    this.tasks.push({ id: this.tasks.length+1, value: this.task})
    this.task = '';
  }

  editTask(index: any) {
    console.log('edit index =>', index);
  }

  deleteTask (index: any) {
    console.log('delete Task => ', index);
    this.tasks.splice(index, 1)
  }
}
