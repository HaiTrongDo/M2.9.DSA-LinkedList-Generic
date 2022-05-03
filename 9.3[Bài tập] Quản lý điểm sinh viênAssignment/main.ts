import {ScoreList} from "./ScoreList";


const ll = new ScoreList()

ll.insertFirst("Hai", 8)
ll.insertFirst("Trang", 9)
ll.insertFirst("Thinh", 2)
ll.insertLast("Thanh", 4)
ll.insertLast("Minh Duc", 3)

console.log(ll.findByName("Thanh"))

// ll.showList()