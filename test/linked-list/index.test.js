import { Node, LinkedList } from '../../.inner/linked-list/linked-list.js'
const list = new LinkedList()
list.head = new Node(1)
list.push(2)

console.log(list)
var reverseList = function (head) {
  let prev = null
  let current = head
  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}
reverseList(list)
