let numbers=[1,2,3,4,5,6]
let result=numbers.reduce((prevValue,currentValue)=>{
    return prevValue+currentValue //কিছুই রিটার্ন করবে না কারণ 1 এর জন্য কোনো prev ভ্যালু নাই। তাই 1 এর prev ভ্যালু কে 2nd প্যারামিটার হিসেবে দিতে হবে।
},0)
console.log(result)