import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Todo } from '../todo'

@Component({
  selector: 'app-todo-detail-reactive',
  templateUrl: './todo-detail-reactive.component.html',
  styleUrls: ['./todo-detail-reactive.component.css']
})
export class TodoDetailReactiveComponent  {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      pkey: 0,
      name: ['', Validators.required],
      hasDone: false
    });
  }

  get diagnostic() { return JSON.stringify(this.form.value); }
}
