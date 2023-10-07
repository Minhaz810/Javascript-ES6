var myObj={
    name: "Javascript",
    Founder:"Brendon Eich",
    estd: "1995",
    ranking: 1

}
// যদি শুধু keys পেতে চাই
var keys=Object.keys(myObj)
console.log(keys) //array আকারে পাবো।

//যদি values পেতে চাই

var values=Object.values(myObj)
console.log(values) //array আকারে পাবো।

//যদি এন্ট্রি গুলো অর্থ্যাৎ key-value pair পেতে চাই তাহলে

var entries =Object.entries(myObj)

console.log(entries)  //array of array আকারে পাবো।


//Object shorthand

var x=25;
var y=40;
var newObj={
    x,  //এটার মানে হচ্ছে x:x
    y,  //এটার মানে হচ্ছে y:y
}
console.log(newObj.x)