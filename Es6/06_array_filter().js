let numbers=[1,2,3,4,5,6,7,8,9,10]
result=numbers.filter((currentValue,index,arr)=>{
    return currentValue>4 //4 থেকে বড় সকল value প্রিন্ট করবে। 
})
console.log(result)//main array কে change করবে না।