import { Todo } from './todo'

export const todoList: Todo[] = [
];

for (var i = 0; i < 10; i++) {
  let todo = new Todo(i, 'todo ' + i, (i & 1) === 1)
  todoList.push(todo);
}



