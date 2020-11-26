import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Task[];
  newTaskForm: FormGroup;

  constructor(private todoService: TodoService, private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

 createForm() {
   this.newTaskForm = this.formBuilder.group({
     title: [''],
     description: ['']
    });
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasks=this.todoService.getTasks()
  }

  addTask(task) {
    this.todoService.addToTasks(task);
    this.getTasks();
  }

  delete(task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.todoService.deleteTask(task);
  }

  onSubmit(customerData: Task) {
    if (customerData.title !== null || customerData.description !== null) {
      this.newTaskForm.reset();
      this.addTask(customerData);
    }
  }

}
