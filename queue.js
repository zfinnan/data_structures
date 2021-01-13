const myQueue = {
    values: [],
    push: function(newValue) {
        this.values.unshift(newValue)
    },
    pop: function() {
        return this.values.pop()
    }
}

myQueue.push('huh')
myQueue.push('what')
myQueue.push('right')

console.log(myQueue)

const poppedValue = myQueue.pop()

console.log(poppedValue);
console.log(myQueue);