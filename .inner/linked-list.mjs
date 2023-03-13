export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  // 向尾部添加一个新元素
  push(element) {
    const node = new Node(element);
    // 链表为空，添加的是第一个元素
    if (!this.head) {
      this.head = node;
      this.count++;
      return;
    }

    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
    this.count++;
  }
  // 向特定位置添加一个新元素
  insert(element, index) {
    const node = new Node(element);
    let current = this.head;
    let previous;
    if (index < 0 || index >= this.count) return false;
    // 处理索引为0
    if (index == 0) {
      this.head = node;
      node.next = current;
      this.count++;
      return;
    }

    previous = this.getElementAt(index - 1);
    current = previous.next;
    node.next = current;
    previous.next = node;
    this.count++;
    return true;
  }
  // 返回指定位置的元素，如果不存在，则返回undefined
  getElementAt(index) {
    if (index < 0 || index >= this.count) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  // 移除一个元素
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  // 根据索引移除一个元素
  removeAt(index) {
    let previous;
    let current = this.head;

    if (index < 0 || index >= this.count) return undefined;

    // 处理索引为0
    if (index == 0) {
      this.head = current.next;
      this.count--;
      return;
    }

    previous = this.getElementAt(index - 1);
    current = previous.next;
    previous.next = current.next;
    this.count--;
    return current.element;
  }
  // 返回元素在链表中的索引
  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
  }
  // 链表中不包含任何元素时，返回true，否则返回false
  isEmpty(element) {
    return this.size() === 0;
  }
  // 返回链表中的元素个数
  size() {
    return this.count;
  }
  // 返回整个链表的字符串
  toString() {
    if (this.head == null) {
      // {1}
      return "";
    }
    let objString = `${this.head.element}`; // {2}
    let current = this.head.next; // {3}
    for (let i = 1; i < this.size() && current != null; i++) {
      // {4}
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString; // {5}
  }
  getHead() {
    return this.head;
  }
}

const defaultEquals = (a, b) => {
  return a === b;
};

export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

// ----test-----//
const list = new LinkedList();
let first = "first";
let second = "second";
let third = "third";
list.push(first);
list.push(second);
list.push(third);

// const result = list.getElementAt(1);
// console.log(result);
list.insert("2.5", 2);
list.remove("2.5");
console.log(list.toString());
