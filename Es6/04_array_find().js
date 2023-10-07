let numbers=[1,2,3,4,5,6,7,8,9]

var result=numbers.find(function(currentValue){
    return currentValue>4
})
console.log(result)

//এটা যখনই True কন্ডিশন পেয়ে যাবে,তখন আর সামনে iterate করবে না।
//main array কখনো change হবে না।


//আমারা find এর ভেতর second parameter হিসেবে this পাঠাতে পারি।

class Student{
    constructor(name,age){
        this.name=name
        this.age=age 
    }
    test(){
        console.log("hello")
    }
    exampleFunction(){
        let array=[1,2,3]
        array.find(function(){
            this.test()
        },this)//এখানে second parameter হিসেবে this না পাঠালে এরর দেখাবে "Cannot read properties of undefined (reading 'test')"
    }
}
let Student1=new Student('Rongon',25)
Student1.exampleFunction()
