//ছড়িয়ে দেয়া

var numbers=[1,2,3]

//আমি যদি চাই নাম্বারস array এর element গুলোকে অন্য array এর ভেতর নিয়ে রাখবো,একটা উপায় হচ্ছে,
var newNumbers=[numbers[0],numbers[1],numbers[2],4,5,6]
console.log(newNumbers)

//কিন্তু এই কাজটাকে সহজেই spread operator দিয়ে করা যায়।

var newNumbers2=[...numbers,7,8,9] //অর্থ্যাৎ numbers array এর elemnt গুলোকে newNumbers2 এর ভেতর ছড়িয়ে দাও।
console.log(newNumbers2)

//Immutability Maintain করার জন্য আমরা spread operator ব্যাবহার করতে পারি।

var digits=[1,2,3]
var a=digits
//আমি যদি এখন digits array টাকে change করি তাহলে কিন্তু a array টাও change হয়ে যাবে। তাই এটাকে spread operator ব্যাবহার করে immutable কতা সম্ভব।

var b=[...digits]
//এখন digits change হলেও b change হবে না।


//দুইটা array কে জোড়া লাগাতেও spread operator ব্যাবহার করা যায়।

var numbers1=[1,2,3]
var numbers2=[4,5,6]

var numbers_together=[...numbers1,...numbers2]
console.log(numbers_together)


//Object এর ক্ষেত্রেও spread operator ব্যাবহার করা যায়।

var obj1={
    x:1,
    y:2,
}
var obj2={
    n:3,
    m:4,
    
}

var newobj={
    ...obj1,
    ...obj2
}
console.log(newobj)