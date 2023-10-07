import {pi,a} from './external.js' //এটার নাম হচ্ছে named import

console.log(pi,a) 

//যদি file এর সবকিছুকে import করতে চাই

import * as test from './external.js'
console.log(test) //object আকারে result পাবো { a: 2.9, pi: 3.1416 }
console.log(test.a) //a এর value পাবো

//চাইলে a ও pi কে নতুন variable এ assign করেও import করা যায়

import {a as varA,pi as varPi} from './external.js'
console.log(varA,varPi)