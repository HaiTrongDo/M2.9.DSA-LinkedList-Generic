"use strict";
exports.__esModule = true;
exports.EmployeeSalary = void 0;
var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(month, money, next) {
        this.month = month;
        this.money = money;
        this.next = next;
    }
    EmployeeSalary.prototype.readData = function () {
        return [this.month, this.money];
    };
    return EmployeeSalary;
}());
exports.EmployeeSalary = EmployeeSalary;
