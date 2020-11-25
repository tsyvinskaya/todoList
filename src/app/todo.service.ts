import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks;

  constructor() { }

  setLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(this.tasks))
  }

  getLocalStorage(){
    JSON.parse(localStorage.getItem('toDoList'))
  }

  addToTasks(task) {
   this.tasks.push(task);
   this.setLocalStorage();
    this.tasks = JSON.parse(localStorage.getItem('toDoList'));
  }

  getTasks() {  
    if (JSON.parse(localStorage.getItem('toDoList')) == null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('toDoList'));
    };
    return this.tasks;
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.setLocalStorage();
  }

  //clearTasks() {
    //this.tasks = [];
    //setLocalStorage();
 // }

}
