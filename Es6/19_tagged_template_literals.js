var player1="sakib"
var player2="tamim"

console.log(`we have ${player1} and ${player2} in our cricket team`)

//আমি যদি চাই template literals এর ভেতর সব কিছুকে আলাদা করে পেতে। তাই আমি একটা modifier function declare করবো

//modifier এর দুইটা argument,একটা হচ্ছে strings and আরেকটা হচ্ছে values

// function modifier(strings,...values){
//     console.log(strings) //output পাবো [ 'we have ', ' and ', ' in our cricket team' ]
//     console.log(values) //output পাবো  ['sakib','tamim']
// }

// console.log(modifier`we have ${player1} and ${player2} in our cricket team`)

//এখন আমি চাচ্ছি প্রত্যেকটা value এর আগে MR. যোগ করতে

function modifier(strings,...values){
    const m =strings.reduce((prev,current)=>{
        return prev+current+(values.length?"Mr."+values.shift():"")
    },"")
    return m
}
console.log(modifier`we have ${player1} and ${player2} in our cricket team`)

//default prev হচ্ছে = ""
//current string হচ্ছে="We have"
//এটার সাথে Mr. যোগ হবে আর
//এটার সাথে value হিসেবে যোগ হবে ['sakib','tamim].shift() অর্থ্যাৎ sakib এবং values array থেকে sakib সরে যাবে। অর্থ্যাৎ values=['tamim']
//তাহলে এখন prev হচ্ছে we have Mr. sakib আর current হচ্ছে 'and'
//এটার সাথে Mr. যোগ হবে আর
//এটার সাথে value হিসেবে যোগ হবে ['tamim].shift() অর্থ্যাৎ tamim এবং values array থেকে tamim সরে যাবে। অর্থ্যাৎ values=[]
//এখন m হচ্ছে "we have Mr. sakib and Mr. tamim"
//যেহেতু স্ট্রিং ও শেষ আর values array থেকে shift করারও কিছু নাই,তাই এখানেই iteration শেষ return হবে m