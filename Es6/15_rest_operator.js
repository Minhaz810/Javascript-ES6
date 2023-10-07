//দেখতে spread operator এর মতোই কিন্তু usecase একটু ভিন্ন

function Func1(a,b){
    console.log(a,b)
}
Func1(2,5) //Output 2 5 দিবে

//কিন্তু আমি যদি 2 এর বেশি parameter pass করি তাহলেও output ২ টাই ই দিবে।

Func1(1,2,3)

//এই সমস্যা আগে arguments দিয়ে সমাধান করা যেতো
function Func2(){
    console.log(arguments)
}
Func2(1,2,3,4,5)
// কিন্তু Output আসতো [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } এরকম। পরে এটার ওপর লুপ চালিয়ে ভ্যালু পাওয়া লাগতো।
function Func3(...params){
    console.log(params)

}
Func3(1,2,3,4,5)

//এখন Output পাবো [ 1, 2, 3, 4, 5 ]

// চাইলে এরকম ও করা যায়।

function Func4(a,...params){ //params কে শেষেই দিতে হবে।
    console.log(a);
    console.log(params)
}
Func4(1,2,3,4,5) //এখানে a হিসেবে 1 কেই নিবে,বাকী params গুলো input অনুযায়ী ফবে।

