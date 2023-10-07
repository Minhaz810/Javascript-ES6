let numbers=[1,2,3,4,5,6]

numbers.push(7)
console.log(numbers)

//multiple value push করতে চাইলে

numbers.push(8,9,10)
console.log(numbers)

//কিন্তু যদি array আকারে push করি তাহলে?

numbers.push([11,12,13])
console.log(numbers) //numbers array এর ভেতর last এ একটা array add করে দিবে।

//যদি push টাকে কোনো variable এ assign করি?

var result5=numbers.push(20,24,27)
console.log(result5) //Last Element টা রিটার্ন করবে।
