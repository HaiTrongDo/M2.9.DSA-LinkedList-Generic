"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SalaryList_1 = require("./SalaryList");
var wl = new SalaryList_1.SalaryList();
wl.addNewDataAtFirst("FEB", 2000);
wl.addNewDataAtFirst("MAR", 2500);
wl.addNewDataAtLast("NOV", 3500);
wl.addNewDataAtLast("DEC", 3000);
wl.showListData();
wl.totalEmployeeWave();
wl.maxWave();
