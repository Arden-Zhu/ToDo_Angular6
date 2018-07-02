import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { todoList } from './fakeTodoList'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList(): Todo[] {
    return todoList;
  }

  update(todo: Todo) {
    const oldTodo = todoList.find(t => t.pkey == todo.pkey);
    if (oldTodo) {
      const newTodo = Object.assign(oldTodo, todo);
    }
  }
}
