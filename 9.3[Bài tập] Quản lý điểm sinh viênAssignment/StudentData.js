"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentData = void 0;
var StudentData = /** @class */ (function () {
    function StudentData(name, score, next) {
        this.name = name;
        this.score = score;
        this.next = next;
    }
    StudentData.prototype.readData = function () {
        return { name: this.name, Score: this.score };
    };
    return StudentData;
}());
exports.StudentData = StudentData;
