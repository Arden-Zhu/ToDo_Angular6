"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
exports.todoList = [];
for (var i = 0; i < 10; i++) {
    var todo = new todo_1.Todo(i, 'todo ' + i, (i & 1) === 1);
    exports.todoList.push(todo);
}
//# sourceMappingURL=fakeTodoList.js.map