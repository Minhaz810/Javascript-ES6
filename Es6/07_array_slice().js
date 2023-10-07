var numbers=[0,1,2,3,4,5,6,7,8,9,10]
let result=numbers.slice(1,5) // index 1 থেকে শুরু করে index 5 এর আগ পর্যন্ত
console.log(result)
let result2=numbers.slice(-1,-4)
console.log(result2) //এই ক্ষেত্রে Blank array পাবো কারণ slice আসলে ডানদিক বরাবর করে/

let result3=numbers.slice(-4,10)
console.log(result3)//-4 এ আছে 7 এবং এর পর থেকে 10 নাম্বার index এর আগ পর্যন্ত।
