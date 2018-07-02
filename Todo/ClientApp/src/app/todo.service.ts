import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from './todo';
//import { todoList } from './fakeTodoList'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //lastPkey: number;
  delayMs = 500;
  httpUrl = 'api/todo';
  todoList: Todo[] = [];

  constructor(private http: HttpClient) {
    //this.lastPkey = 100;
  }

  getTodoList(): Observable<Todo[]> {
    //return of(todoList).pipe(delay(this.delayMs));
    return this.http.get<Todo[]>(this.httpUrl).pipe(
      tap(list => this.todoList = list)
    );

  }

  update(todo: Todo): Observable<Todo> {
    if (todo.pkey == 0) {
      return this.saveNew(todo);
    }
    else {
      return this.saveNotNew(todo);
    }
    //const oldTodo = todoList.find(t => t.pkey == todo.pkey);
    //const newTodo = Object.assign(oldTodo, todo);
    //return of(newTodo).pipe(delay(this.delayMs));
  }

  saveNew(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.httpUrl, todo, this.httpOptions).pipe(
      tap(newTodo => this.todoList.push(newTodo))
    );
  }

  saveNotNew(todo: Todo): Observable<any> {
    return this.http.put(this.httpUrl + '/' + todo.pkey, todo, this.httpOptions)
      .pipe(tap(_ => {
        let td = this.todoList.find(t => t.pkey == todo.pkey);
        if (td)
          td.name = todo.name;
      }));
  }

  addNew(): Observable<Todo> {
    const todo = new Todo(
      0,
      'Todo',
      false
    );
    return of(todo);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  remove(todo: Todo): Observable<any> {
    //const idx = todoList.indexOf(todo);
    //todoList.splice(idx, 1);
    //return of(true).pipe(delay(this.delayMs));
    return this.http.delete<boolean>(this.httpUrl + '/' + todo.pkey)
      .pipe(tap(f => {
        if (f) {
          const idx = this.todoList.findIndex(p => p.pkey == todo.pkey);
          this.todoList.splice(idx, 1);
        }
      }))
  }
}
