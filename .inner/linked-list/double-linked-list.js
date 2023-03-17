// 双向列表
import { Node, LinkedList, defaultEquals } from './linked-list.js'

class DoubleNode extends Node {
  constructor(element, next = undefined, prev) {
    super(element, next)
    this.prev = prev
  }
}

class DoubleLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }
  // 向特定位置添加一个新元素
  insert(element, index) {
    const node = new DoublyNode(element)
    let current = this.head
    let previous
    if (index < 0 || index >= this.count) return false
    // 处理索引为0
    if (index == 0) {
      if (this.head == null) {
        this.head = node
        this.tail = node
      } else {
        this.head = node
        node.next = current
        current.prev = node
      }

      this.count++
      return
    } else if (index === this.count) {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    }

    previous = this.getElementAt(index - 1)
    current = previous.next
    node.next = current
    previous.next = node
    current.prev = node
    node.prev = previous
    this.count++
    return true
  }
}
