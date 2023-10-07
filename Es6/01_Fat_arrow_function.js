// let Javascript ={
//     name:"Javascript",
//     libraries:['React','Angular','Vue'],
//     printLibraries: function(){
//         this.libraries.forEach((a)=>{
            
//             console.log(`${this.name} Loves ${a}`)
//         })
//     }
    
// }
// Javascript.printLibraries()


// function Person(name){
//     this.name=name
// }
// Sakib=new Person("Tamim")
// console.log(Sakib.name)


// But When we use arrow,it will give us error.

const Person=(name)=>{
    this.name
}
Sakib=new Person("Tamim")
console.log(Sakib.name)