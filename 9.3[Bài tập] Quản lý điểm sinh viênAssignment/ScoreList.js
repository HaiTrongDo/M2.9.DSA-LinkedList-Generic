"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreList = void 0;
var StudentData_1 = require("./StudentData");
var ScoreList = /** @class */ (function () {
    function ScoreList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    //insertFirst() để thêm một nút vào đầu danh sách.
    ScoreList.prototype.insertFirst = function (name, score) {
        this.head = new StudentData_1.StudentData(name, score, this.head);
        this.size++;
        if (!this.tail)
            this.tail = this.head;
    };
    //để thêm một học sinh vào cuối danh sách.
    ScoreList.prototype.insertLast = function (name, score) {
        var currentStudent;
        var student = new StudentData_1.StudentData(name, score, null);
        this.size++;
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var currentStudent_1 = new StudentData_1.StudentData(name, score, null);
            this.tail.next = currentStudent_1;
            this.tail = currentStudent_1;
        }
        //if we do no have tail at all.
        // currentStudent = this.head
        // while (currentStudent.next) {
        //     currentStudent = currentStudent.next
        // }
        // currentStudent.next = student;
    };
    //để hiển thị danh sách
    ScoreList.prototype.showList = function () {
        var listData = [];
        var currentStudent = this.head;
        while (currentStudent) {
            listData.push([currentStudent.name, currentStudent.score]);
            console.log([currentStudent.name, currentStudent.score]);
            currentStudent = currentStudent.next;
        }
        return listData;
    };
    //để đếm xem trong danh sách có bao nhiêu sinh viên thi lại (điểm ≤ 5).
    ScoreList.prototype.totalStudentsFail = function () {
        var count = 0;
        var reExamineStudent = [];
        var currentStudent = this.head;
        while (currentStudent !== null) {
            if (currentStudent.score <= 5) {
                count++;
                reExamineStudent.push([currentStudent.name, currentStudent.score]);
            }
            currentStudent = currentStudent.next;
        }
        return count;
    };
    //để hiển thị (các) sinh viên có điểm cao nhất.
    ScoreList.prototype.listStudentMaxScore = function () {
        var currentStudent = this.head;
        var maxStudentScore = 0;
        var maxStudentData = [];
        while (currentStudent !== null) {
            if (currentStudent.score > maxStudentScore) {
                maxStudentScore = currentStudent.score;
                maxStudentData = [currentStudent.name, currentStudent.score];
            }
            currentStudent = currentStudent.next;
        }
        return maxStudentData;
    };
    //findByName() để tìm kiếm và hiển thị (các) sinh viên theo tên.
    ScoreList.prototype.findByName = function (studentName) {
        var result = [];
        var currentStudent = this.head;
        while (currentStudent !== null) {
            if (currentStudent.name.toUpperCase() === studentName.toUpperCase()) {
                return result = [currentStudent.name, currentStudent.score];
            }
            currentStudent = currentStudent.next;
        }
        return "Student name is not exist";
    };
    return ScoreList;
}());
exports.ScoreList = ScoreList;
