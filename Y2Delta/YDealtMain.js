
let Ra=document.getElementById("Ra")
let Rb=document.getElementById("Rb")
let Rc=document.getElementById("Rc")
let R1=document.getElementById("R1")
let R2=document.getElementById("R2")
let R3=document.getElementById("R3")
let sw=document.getElementById("chose")
let bt=document.getElementById("caculate")
function Calc(){
        
//    console.log(sw.ariaValueNow)
}

console.log("Main")
bt.addEventListener("click",function(){
    let t=sw.value;
    console.log(sw.value);
    if(t=="D"){
        let ra=Number(Ra.value);
        let rb=Number(Rb.value);
        let rc=Number(Rc.value);
        
        let s=ra+rb+rc;
        console.log(s)
        R1.value=ra*rb/s;
        R2.value=rb*rc/s;
        R3.value=ra*rc/s;

       
    }
    else{
        let r1=Number(R1.value);
        let r2=Number(R2.value);
        let r3=Number(R3.value);
        let s=r1*r2+r2*r3+r3*r1;
        console.log (s)
        Ra.value=s/r2;
        Rb.value=s/r3;
        Rc.value=s/r1;
        
    }
})