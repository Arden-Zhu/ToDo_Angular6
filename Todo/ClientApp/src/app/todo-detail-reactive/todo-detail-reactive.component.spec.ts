import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailReactiveComponent } from './todo-detail-reactive.component';

describe('TodoDetailReactiveComponent', () => {
  let component: TodoDetailReactiveComponent;
  let fixture: ComponentFixture<TodoDetailReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
