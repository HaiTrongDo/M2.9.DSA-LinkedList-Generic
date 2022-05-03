export class EmployeeSalary {
    month: string;
    money: number;
    next : any

    constructor(month: string, money: number, next: any) {
        this.month = month;
        this.money = money;
        this.next = next;
    }

    readData():[string, number]{
        return [this.month, this.money]
    }
}