//unique data store করার জন্য set ব্যাবহার করা হয়।

//array declare করার দুইটা way আছে

//Literal Syntax
 let myArray=[];
//constructor syntax
let myArray2=new Array();

//set declare করার সময় literal syntax ব্যাবহার করতে পারবো না,constructor syntax ই ব্যাবহার করতে হবে

let mySet=new Set()

//set methods

//Data Insert
mySet.add(5)
mySet.add('Bangladesh')
console.log(mySet)
//data delete
mySet.delete('Bangladesh')
console.log(mySet)

//has or not

console.log(mySet.has(5))

//* Set এর মেথডগুলো call করলে সেগুলো set কে modigy করে modified set টাই return করে*/

mySet.add(6).add(7).add('Bangladesh')
console.log(mySet)

//পুরো set কে clear করে দিতে চাইলে

mySet.clear()
console.log(mySet)

//set from Array

let Array1=[1,2,3]
let Newset= new Set(Array1)
console.log(Newset)

//set এ যে শুধু array pass করা যায় এমন না, set এ যেকোনো iterable pass করা যায়।
//set এ object pass করালে হবে না কারণ,object iterable না।

let set3=new Set("Bangladesh") //String একটা iterable
console.log(set3)

//set নিজেও iterable

for(let value of set3){
    console.log(value)
}
//set এর কোনো order নাই

//Array from set
let array3=[1,2,3,4]
let set4=new Set(array3)
let array4=[...set4]
console.log(array4)

//another way:
let array5=Array.from(set4)
console.log(array5)


//set usage:
//unique element নিয়ে আসা

let myArray1=[1,2,3,3]
let myset1=new Set(myArray1)
console.log(myset1)

myset1.add({
    a:5,
    b:2
})
console.log(myset1)

myset1.add({
    a:5,
    b:2
})
console.log(myset1)

//এখানে দুইটা object একই মনে হলেও এদের reference আলাদা। তাই set এদেরকে unique element হিসেবে চিনবে না।

//কিন্তু
let object={
    a:6,
    b:7
}
myset1.add(object)
myset1.add(object)
console.log(myset1)

//এখন একই reference এর দুইটা object pass করাতে set unique element টা রাখবে।

//set এর union

let a=new Set([1,2,3])
let b=new Set([4,3,2])
let union=new Set([...a,...b])
console.log(union)

//set এর intersection

let intersection=new Set([...a].filter(x=>b.has(x)))
//যেইসব x b set এর ভেতর আছে,তাদের ভিত্তিতে a set filter হয়ে যাবে
console.log(intersection)

//set এর difference
let difference=new Set([...a].filter(x=>!b.has(x)))
//যেইসব x b set এ নাই তাদের ভিত্তিতে a set filtered হয়ে যাবে।
console.log(difference)


//weakset:

const ws=new WeakSet();
// ws.add("Bangladesh") //error দেখাবে

//weakset এ অবশ্যই object add করতে হবে,number অথবা string add করা যাবে না

const ws2=new WeakSet([{a:1},{b:2}])
//weakset parameter হিসেবে iterable নিলেও সে নিজে কিন্তু iterable না

// for(let value of ws2){
//     console.log(value)
// }//error দিবে

//weakset  usage:

const ws3=new WeakSet();
class someClass{
    constructor(){

    }
    method(){

    }
}

//যদি method access করতে চাই তাহলে
const classA =new someClass()
classA.method//এভাবে access করতে হবে।

//অথবা
console.log(someClass.prototype.method)
//এভাবে access করতে হয়।

//কিন্তু যদি আমি চাই method কে Direct access না করা যাক,তাহলে

class someClass2{
    constructor(){
        ws.add(this)
    }
    method(){
        if(!ws.has(this)){
            throw new Error("You Can not access this method directly")
        }else{
            return "i am method"
        }
    }
}

//এখন আমি যে object তৈরী করবো,সেটা this হিসেবে weakset এর ভেতর চলে যাবে। তাই চাইলেই direct এখন method কে access করা যাবে না,আগে object তৈরী করে নিতে হবে।

