const myStack = {
    values: [],
    push: function(newValue) {
        this.values.unshift(newValue)
    },
    pop: function() {
        return this.values.shift()
    }
}

myStack.push('hi')
myStack.push('bye')
myStack.push('huh?')

console.log(myStack)

const poppedValue = myStack.pop()
console.log(poppedValue);
console.log(myStack);

