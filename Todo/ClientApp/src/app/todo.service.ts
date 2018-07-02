import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

import { Todo } from './todo';
import { todoList } from './fakeTodoList'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lastPkey: number;
  delayMs = 500;

  constructor() {
    this.lastPkey = 100;
  }

  getTodoList(): Observable<Todo[]> {
    return of(todoList).pipe(delay(this.delayMs));
  }

  update(todo: Todo): Observable<Todo> {
    const oldTodo = todoList.find(t => t.pkey == todo.pkey);
    const newTodo = Object.assign(oldTodo, todo);
    return of(newTodo).pipe(delay(this.delayMs));
  }

  addNew(): Observable<Todo> {
    const todo = new Todo(
      this.lastPkey,
      'Todo ' + this.lastPkey,
      false
    );
    this.lastPkey++;
    todoList.push(todo);
    return of(todo).pipe(delay(this.delayMs));
  }

  remove(todo: Todo): Observable<boolean> {
    const idx = todoList.indexOf(todo);
    todoList.splice(idx, 1);
    return of(true).pipe(delay(this.delayMs));
  }
}
