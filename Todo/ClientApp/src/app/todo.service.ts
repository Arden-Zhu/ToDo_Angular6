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
}
