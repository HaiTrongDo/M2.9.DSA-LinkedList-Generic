"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryList = void 0;
var EmployeeSalary_1 = require("./EmployeeSalary");
var SalaryList = /** @class */ (function () {
    function SalaryList() {
        this.head = null;
        this.tail = null;
    }
    // Thêm một node mới vao dau
    SalaryList.prototype.addNewDataAtFirst = function (month, money) {
        this.head = new EmployeeSalary_1.EmployeeSalary(month, money, this.head);
        if (!this.tail)
            this.tail = this.head;
    };
    // Thêm một node mới vao cuoi
    SalaryList.prototype.addNewDataAtLast = function (month, money) {
        if (!this.head) {
            this.addNewDataAtFirst(month, money);
        }
        else {
            var currentData = new EmployeeSalary_1.EmployeeSalary(month, money, null);
            this.tail.next = currentData;
            this.tail = currentData;
        }
    };
    // Hiển thị danh sách node
    SalaryList.prototype.showListData = function () {
        var currentData = this.head;
        var result = [];
        while (currentData) {
            result.push([currentData.month, currentData.money]);
            console.log([currentData.month, currentData.money]);
            currentData = currentData.next;
        }
        // console.log(result)
        return result;
    };
    // Tính tổng lương của nhân viên
    SalaryList.prototype.totalEmployeeWave = function () {
        var currentData = this.head;
        var totalSalary = 0;
        while (currentData !== null) {
            totalSalary += currentData.money;
            currentData = currentData.next;
        }
        console.log(totalSalary);
        return totalSalary;
    };
    // Tìm tháng có lương cao nhất
    SalaryList.prototype.maxWave = function () {
        var currentData = this.head;
        var maxSalary = 0;
        var result;
        while (currentData !== null) {
            if (maxSalary < currentData.money) {
                maxSalary = currentData.money;
                result = [currentData.month, currentData.money];
            }
            currentData = currentData.next;
        }
        console.log(result);
        return result;
    };
    return SalaryList;
}());
exports.SalaryList = SalaryList;
