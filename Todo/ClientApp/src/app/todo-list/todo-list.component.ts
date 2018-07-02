import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodoService  } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];
  selectedTodo: Todo;

  constructor(private service : TodoService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoList = this.service.getTodoList();
  }

  selectTodo(todo: Todo) {
    this.selectedTodo = todo; 
  }

}
