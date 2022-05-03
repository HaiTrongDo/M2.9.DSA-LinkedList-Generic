"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScoreList_1 = require("./ScoreList");
var ll = new ScoreList_1.ScoreList();
ll.insertFirst("Hai", 8);
ll.insertFirst("Trang", 9);
ll.insertFirst("Thinh", 2);
ll.insertLast("Thanh", 4);
ll.insertLast("Minh Duc", 3);
console.log(ll.findByName("Thanh"));
// ll.showList()
