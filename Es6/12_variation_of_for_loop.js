//Normal For Loop

for(let i=0;i<=5;i++){
    console.log(i)
}
// console.log(i)//কাজ করবে না,কারণ Let একটা blockscope

//কিন্তু Let এর বদলে যদি var দেই?
for(var i=0;i<=5;i++){
    console.log(i)
}
console.log(i) //কাজ করবে ,কারণ var একটা globalscope


//চাইলে এভাবেও লিখা যায়
let j=0
for(;j<=8;j++){
    console.log(j)
}
console.log(j)

//চাইলে ভেতরে কন্ডিশনটাকেও না লিখে এভাবে লিখা যায়

let k=0
for(; ;k++){
    if(k<=8){
    console.log(k)
    }else{
        break
    }
}
console.log(k)


//for in: index রিটার্ন করবে

const obj={
    name: 'My Object',
    Place: 'Sylhet',
    Born:'1998'
}
for (params in obj){
    console.log(params)
}

//for of: element পাওয়া যায়
const obj2={
    name: 'My Object',
    Place: 'Sylhet',
    Born:'1998'
}
for (params of obj2){
    console.log(params)         //কাজ করবে না,কারণ Object কে ইটারেট করা যায় না।
}