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
    this.rebuildForm();
  }

  rebuildForm(): void {
    this.form.reset(this.todo);
  }

  submit(): void {
    this.todo = Object.assign({}, this.form.value);
    if (this.todo.pkey == 0) {
      this.service.update(this.todo).subscribe(
        x => {
          this.todo = x;
          this.rebuildForm();
        }
      );
      //this.rebuildForm();
    }
    else {
      this.service.update(this.todo).subscribe();
      this.rebuildForm();
    }
  }

  revert(): void {
    this.rebuildForm();
  }

  get diagnostic() { return JSON.stringify(this.form.value); }
}
