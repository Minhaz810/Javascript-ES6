var nums1=[0,1,2,3,4]
var nums2=[5,6,7,8,9,10]
var nums3=[11,12,13,14,15]
var result=nums1.concat(nums2)
console.log(result)  //main array চেইঞ্জ হবে না।

// multiple array কে concat করতে চাইলে
var result1=nums1.concat(nums2,nums3)
console.log(result1)
