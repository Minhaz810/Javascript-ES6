let a=['Javascript','Python','PHP',' Ruby','C++','RUST']
//copyWithin(target,start,end)
a.copyWithin(3,2)
console.log(a)

//এখানে target হচ্ছে 3 ,start হচ্ছে 2 আর end যেহেতু Declare করা নাই,তাই end হচ্ছে array.length
//অর্থ্যাৎ ২ নং পজিশন মানে php থেকে শুরু করে end পর্যন্ত অর্থ্যাৎ array.length পর্যন্ত সবকিছু copy হয়ে ৩ নং অর্থ্যাৎ ruby এর জায়গায় বসে যাবে।
//এবং array এর length বেশি হয়ে যাওয়ার কারণে rust টা কাটা পড়বে।
//Target start এর চাইতে বড় হলেই last থেকে কিছু অংশ কাটা পড়বে
a.copyWithin(6,1,2)//target array length এর সমান বা বেশি হলে কপি হবেই না।

a.copyWithin(3)//start এখানে 0 আর end এখানে array.length. তাই 3 number target এ পুরোটাই কপি হয়ে যাবে।

a.copyWithin(3,-1,-2) //- এর ক্ষেত্রে কিছুই হবে না,কারণ - এর ক্ষেত্রে start কে অবশ্যই end এর বামে হতে হবে। -1 index -2 index এর ডানে।

a.copyWithin(3,-2,-1) //এটা ঠিক আছে।