var myVar=19;
// var type;
// if(myVar>=18){
//     type="Adult"
// }else{
//     type="Child"
// }
 //টারনারি অপারেটর ব্যাবহার করে এক লাইনেই লিখা যায়
var type=(myVar>=18)? "adult":"child";
console.log(type)


//Nesting

var Age=9;
var type2=(Age>=18)? "adult":(Age<10)?"Child":"Young";
console.log(type2)