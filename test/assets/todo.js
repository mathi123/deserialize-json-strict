"use strict";
var deserialize_util_1 = require("../../deserialize-util");
var Todo = (function () {
    function Todo() {
        this.id = 0;
        this.description = "";
        this.isDone = false;
    }
    Todo.prototype.toString = function () {
        return this.description;
    };
    Todo.prototype.deserialize = function (values) {
        this.id = deserialize_util_1.DeserializeUtil.StrictNumber(values.id);
        this.description = deserialize_util_1.DeserializeUtil.StrictString(values.description);
        this.isDone = deserialize_util_1.DeserializeUtil.StrictBoolean(values.isDone);
    };
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map