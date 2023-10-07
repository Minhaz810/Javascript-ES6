function myFunc(x){
    return x;
}
console.log(myFunc()) //যদি এর ভেতর কিছু না পাঠাই তাহলে undefined return করবে। তাই আমরা একটা Default value দিয়ে দিবো।

function myFunc2(x=5){
    return x;
}
console.log(myFunc2(10))// value দিলে সে value return করবে,কিন্তু value না দিলে Default value return করবে।
console.log(myFunc2())//Deafult value অর্থ্যাৎ 5 return করবে।

//যদি আমি undefined পাঠাই তাহলে default value return করবে,কারণ undefined পাঠানো আর কিছু না পাঠানো একই।
console.log(myFunc2(undefined))
//কিন্তু null পাঠালে null ই return করবে,কারণ ওর কাছে null একটা value
console.log(myFunc2(null))