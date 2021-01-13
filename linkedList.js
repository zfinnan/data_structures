const nodeThree = {
    next: null,
    value: 3
  }
  const nodeTwo = {
    next: nodeThree,
    value: 2
  }
  const nodeOne = {
    next: nodeTwo,
    value: 1
  }
  const reverseLinkedList = (head) => {
    let nodesArray = []
    let nextNode = head
    while (nextNode.next) {
      nodesArray.push(nextNode)
      nextNode = nextNode.next
    }
    nodesArray.push(nextNode) // clean up the tail
    nodesArray = nodesArray.reverse()
    for (let i = 0; i < nodesArray.length; i++) {
      nodesArray[i].next = nodesArray[i + 1] || null
    }
    return nodesArray[0]
  }
  // end product: three -> two -> 1 -> null
  // we will pass in one to our function
  const result = reverseLinkedList(nodeOne)
  console.log(result);