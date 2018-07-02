import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Todo } from '../todo'
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-detail-reactive',
  templateUrl: './todo-detail-reactive.component.html',
  styleUrls: ['./todo-detail-reactive.component.css']
})
export class TodoDetailReactiveComponent implements OnChanges {
  form: FormGroup;
  @Input() todo: Todo;

  constructor(private fb: FormBuilder, private service: TodoService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      pkey: 0,
      name: ['', Validators.required],
      hasDone: false
    });
  }

  ngOnChanges(): void {
    this.form.reset(this.todo);
  }

  submit(): void {
    this.todo = Object.assign({}, this.form.value);
    this.service.update(this.todo);
  }

  revert(): void {
    this.form.reset(this.todo);
  }

  get diagnostic() { return JSON.stringify(this.form.value); }
}
