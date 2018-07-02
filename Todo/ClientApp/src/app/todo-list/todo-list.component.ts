import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService  } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Observable<Todo[]>;
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

  add() {
    this.service.addNew().forEach((todo) => this.selectedTodo = todo);
    //this.todoList.push(todo);
    //this.selectedTodo = todo;
  }

  remove(todo: Todo) {
    this.service.remove(todo);
    //const idx = this.todoList.indexOf(todo);
    //this.todoList.splice(idx, 1);
  }
}
