const searchEvent=document.querySelector(".search")
const display=document.querySelector(".result")
const Thanks=document.querySelector(".thanks")

function show(){
    display.innerHTML=this.value
    setTimeout(function(){
        Thanks.innerHTML=`You have typed ${self.value}`
    },2000)
}
searchEvent.addEventListener("keyup",show);