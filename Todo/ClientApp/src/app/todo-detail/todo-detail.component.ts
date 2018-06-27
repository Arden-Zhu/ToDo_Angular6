import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  model = new Todo(11, 'test 11', false);
  
  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model) }

  dump(obj: any) {
    return JSON.stringify(typeof (obj))
  }

  onSubmit() {
    console.log("submit");
  }
}
