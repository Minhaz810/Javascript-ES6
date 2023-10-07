let numbers=[1,2,3,4,5,6]

var result=numbers.map((num)=>{
    return num*2 //numbers এর প্রত্যেকটা value কে দ্বিগুন করে result array এর ভেতর রাখবে কিন্তু main array কে চেইঞ্জ করবে না।
})
console.log(result)
console.log(numbers) //কোনো চেইঞ্জ নাই