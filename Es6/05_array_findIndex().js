var numbers=[1,2,3,4,5,6,7,8,9,10]
let result=numbers.findIndex((currentValue,index,array)=>{
    return !(currentValue%2) //True রিটার্ন করবে কারণ 1%2=1 আর 1 এর ভ্যালু True ধরে নেয়া হয়
})
console.log(result) //1 এর Index রিটার্ন করবে।
