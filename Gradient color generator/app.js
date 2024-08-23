let btn1=document.querySelector(".button1")
let btn2=document.querySelector(".button2")
let copyyyDiv =document.querySelector(".box")
let rgb1="#000";
let rgb2="#fff";
const getNumber=()=>{
    let sixDigits="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
        color=color + sixDigits[Math.floor(Math.random()*16)];
    }
    return color
}
const handelbtn1=()=>{
    rgb1=getNumber()
    btn1.textContent=rgb1
    document.body.style.backgroundImage=`linear-gradient(to right ,${rgb1},${rgb2})`;
    copyyyDiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`
}
const handelbtn2=()=>{
    rgb2=getNumber()
    btn2.textContent=rgb2
    document.body.style.backgroundImage=`linear-gradient(to right ,${rgb1},${rgb2})`;
    copyyyDiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`

}

btn1.addEventListener("click",handelbtn1)//arrow function mat lenadirect
btn2.addEventListener("click",handelbtn2)
copyyyDiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyyyDiv.innerHTML)
    alert("text is copied")
})
