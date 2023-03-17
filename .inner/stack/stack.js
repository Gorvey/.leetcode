/*
 * @Author: zengzhe
 * @Date: 2023-03-16 10:19:09
 * @LastEditors: zengzhe
 * @LastEditTime: 2023-03-16 10:22:03
 * @Description:
 */
// 先进后出 LIFO
class Stack {
  constructor() {
    this.items = []
  }
  push(element) {
    return this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return !this.items.length
  }
  clear() {
    this.items = []
  }
  size() {
    return this.items.length
  }
}
