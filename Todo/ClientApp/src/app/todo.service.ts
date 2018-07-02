import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { todoList } from './fakeTodoList'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lastPkey: number;

  constructor() {
    this.lastPkey = 100;
  }

  getTodoList(): Todo[] {
    return todoList;
  }

  update(todo: Todo) {
    const oldTodo = todoList.find(t => t.pkey == todo.pkey);
    if (oldTodo) {
      const newTodo = Object.assign(oldTodo, todo);
    }
  }

  addNew(): Todo {
    const todo = new Todo(
      this.lastPkey,
      'Todo ' + this.lastPkey,
      false
    );
    this.lastPkey++;
    todoList.push(todo);
    return todo;
  }

  remove(todo: Todo) {
    const idx = todoList.indexOf(todo);
    todoList.splice(idx, 1);
  }
}
