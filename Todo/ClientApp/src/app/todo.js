"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo(pkey, name, hasDone) {
        this.pkey = pkey;
        this.name = name;
        this.hasDone = hasDone;
    }
    Todo.create = function () {
        return new Todo(0, '', false);
    };
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map