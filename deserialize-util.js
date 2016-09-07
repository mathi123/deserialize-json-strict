"use strict";
var DeserializeUtil = (function () {
    function DeserializeUtil() {
    }
    DeserializeUtil.StrictString = function (obj) {
        if (obj === null || obj === undefined) {
            throw new KeyNotFoundException();
        }
        else if (typeof obj != "string") {
            throw new InvalidTypeException();
        }
        return obj;
    };
    DeserializeUtil.StrictNumber = function (obj) {
        if (obj === null || obj === undefined) {
            throw new KeyNotFoundException();
        }
        else if (typeof obj != "number") {
            throw new InvalidTypeException();
        }
        return obj;
    };
    DeserializeUtil.StrictBoolean = function (obj) {
        if (obj === null || obj === undefined) {
            throw new KeyNotFoundException();
        }
        else if (typeof obj != "boolean") {
            throw new InvalidTypeException();
        }
        return obj;
    };
    DeserializeUtil.StrictStringArray = function (obj) {
        var _this = this;
        if (obj === null || obj === undefined) {
            throw new KeyNotFoundException();
        }
        else if (obj.constructor !== Array) {
            throw new InvalidTypeException();
        }
        obj.forEach(function (a) { return _this.StrictString(a); });
        return obj;
    };
    DeserializeUtil.StrictNumberArray = function (obj) {
        var _this = this;
        if (obj === null || obj === undefined) {
            throw new KeyNotFoundException();
        }
        else if (obj.constructor !== Array) {
            throw new InvalidTypeException();
        }
        obj.forEach(function (a) { return _this.StrictNumber(a); });
        return obj;
    };
    DeserializeUtil.StrictBooleanArray = function (obj) {
        var _this = this;
        if (obj === null || obj === undefined) {
            throw new KeyNotFoundException();
        }
        else if (obj.constructor !== Array) {
            throw new InvalidTypeException();
        }
        obj.forEach(function (a) { return _this.StrictBoolean(a); });
        return obj;
    };
    DeserializeUtil.StrictObjectArray = function (obj, createInstance) {
        if (obj === null || obj === undefined) {
            throw new KeyNotFoundException();
        }
        else if (obj.constructor !== Array) {
            throw new InvalidTypeException();
        }
        var result = [];
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var a = obj_1[_i];
            var b = createInstance();
            b.deserialize(a);
            result.push(b);
        }
        return result;
    };
    return DeserializeUtil;
}());
exports.DeserializeUtil = DeserializeUtil;
var KeyNotFoundException = (function () {
    function KeyNotFoundException() {
    }
    return KeyNotFoundException;
}());
exports.KeyNotFoundException = KeyNotFoundException;
var InvalidTypeException = (function () {
    function InvalidTypeException() {
    }
    return InvalidTypeException;
}());
exports.InvalidTypeException = InvalidTypeException;
//# sourceMappingURL=deserialize-util.js.map