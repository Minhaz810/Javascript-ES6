//Object destructuring

var user1={
    id:339,
    name:'sakib',
    age:36,
}

//আমি চাই user object এর কোনো একটা প্রোপার্টি reuse এর সুবিধার্থে অন্য কোনো variable এ assign করতে

//Old Method

var username=user1["name"]
console.log(username)

//Using Destructuring
 var user2={
    id:338,
    name:'Tamim',
    age:35,
}

const {name}=user2;
console.log(name)

//যদি চাই name property কে অন্য একটা variable এর মধ্যে assign করতে 

const {name:x}=user2
//name এখন x এর ভেতর assign হয়ে গেলো।

console.log(x)


//nested object destructuring

var user3={
    id:337,
    name:'Papon',
    age: 60,
    education:{
        degree: "Masters"
    }
}
//এখন আমি চাই user3 এর Degree কে Destructure করতে।

const {education:{degree:y}}=user3; //লাস্ট লেভেল পর্যন্ত কোলন দিয়ে লিখতে হবে। এখানে degree হচ্ছে last level.
console.log(y)


//মাঝে মাঝে api call করলে আমরা যেই json data পাই তাদের অনেকগুলোতেই property missing থাকে।

var user4={
    id:336,
    name:'Mashrafee',
    age: 42,
    // education:{
    //     degree: "Masters"
    // }
}

//যেমন user4 এ education টা missing

// const {education:{degree:z}}=user4; //লাস্ট লেভেল পর্যন্ত কোলন দিয়ে লিখতে হবে। এখানে degree হচ্ছে last level.
// console.log(z)//এখন আমি error খাবো। 

//আমি চাই error না হয়ে atleast undefined হোক।

const {education:{degree:w}={}}=user4;
console.log(w)


//array destructuring

var numbers=[1,2,3,4,5,6]

//আমি চাচ্ছি array থেকে কোনো number বের করে নিয়ে আসতে। আমি তখন Destructuring মেথডে এটা করতে পারি
var [,a,,,b]=numbers; //1 skip, 2 in a, 3 skip, 4 skip, 5 in b,6 skip
console.log(a,b)

//nested array তে

var numbers=[1,2,3,[100,500,600],5,6]
var [,,,[,a,b]]=numbers; //1skip, 2 skip, 3 skip [4 skip,500 in a,600 in b],rest skip
console.log(a,b) 

//swaping

var m=1;
var n=2;

[n,m]=[m,n]

console.log(m,n)

