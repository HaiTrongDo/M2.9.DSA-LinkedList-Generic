import {LinkedList} from "./LinkedList";

let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(30);
linkedList.insertLastNode(40);
console.log(linkedList.getSize());
console.log(linkedList.readList());
console.log(linkedList);
