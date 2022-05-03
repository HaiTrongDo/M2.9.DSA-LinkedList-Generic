import {EmployeeSalary} from "./EmployeeSalary";

export class SalaryList<T> {
    head: EmployeeSalary | null;
    tail: EmployeeSalary | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Thêm một node mới vao dau
    addNewDataAtFirst(month: string, money: number): void {
        this.head = new EmployeeSalary(month, money, this.head)
        if (!this.tail) this.tail = this.head
    }

    // Thêm một node mới vao cuoi
    addNewDataAtLast(month: string, money: number): void{
        if (!this.head){
            this.addNewDataAtFirst(month,money)
        } else {
            let currentData = new EmployeeSalary(month,money,null)
            this.tail.next = currentData
            this.tail = currentData
        }
    }

    // Hiển thị danh sách node
    showListData(): [string, number][] {
        let currentData = this.head;
        let result = [];
        while (currentData) {
            result.push([currentData.month, currentData.money]);
            console.log([currentData.month, currentData.money]);
            currentData = currentData.next;
        }
        // console.log(result)
        return result;
    }

    // Tính tổng lương của nhân viên
    totalEmployeeWave(): number {
        let currentData = this.head;
        let totalSalary = 0;
        while (currentData !== null) {
            totalSalary += currentData.money;
            currentData = currentData.next;
        }
        console.log(totalSalary)
        return totalSalary;
    }

    // Tìm tháng có lương cao nhất
    maxWave(): [string,number] {
        let currentData = this.head;
        let maxSalary = 0;
        let result;
        while (currentData !== null) {
            if (maxSalary < currentData.money) {
                maxSalary = currentData.money
                result = [currentData.month,currentData.money];
            }
            currentData = currentData.next;
        }
        console.log(result)
        return result;
    }
}