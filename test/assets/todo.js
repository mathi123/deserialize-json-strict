"use strict";
var deserialize_util_1 = require("../../deserialize-util");
var Todo = (function () {
    function Todo() {
        this.id = 0;
        this.description = "";
        this.isDone = false;
    }
    Todo.prototype.deserialize = function (obj) {
        this.id = deserialize_util_1.DeserializeUtil.StrictNumber(obj.id);
        this.description = deserialize_util_1.DeserializeUtil.StrictString(obj.description);
        this.isDone = deserialize_util_1.DeserializeUtil.StrictBoolean(obj.isDone);
    };
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map