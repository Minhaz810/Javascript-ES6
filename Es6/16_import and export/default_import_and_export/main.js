import external from './external.js' //external টাই এখন external.js এর default হিসেবে import হলো

console.log(external) //a এর ভ্যালু দেখাবে কারণ external.js a কে Default হিসেবে export করে।

import {myFunc} from './external.js'

myFunc() //আউটপুট দেখাবে Hello this is a function

import external2 ,{a}from './external2.js'  //external2 টা external2.js এর Default হিসেবে import হলো। আর a হলো named import

//named import {} এর ভেতর করতে হয়।
external2()
console.log(a)
