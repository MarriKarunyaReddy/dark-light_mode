let modebtn1 = document.querySelector("#mode");
let body= document.querySelector("body");
let a=0;
let cmode="LIGHTMODE";
modebtn1.addEventListener("click",()=>{
    console.log("you are trying to change mode");
    if(cmode==="LIGHTMODE"){
        cmode="DARKMODE";
        console.log(`mode changed to ${cmode}`);
        body.classList.remove("light");
        body.classList.add("dark");
        modebtn1.textContent = "LIGHT";
    }else if(cmode==="DARKMODE"){
        cmode="LIGHTMODE";
        console.log(`mode changed to ${cmode}`);
        body.classList.add("light");
        body.classList.remove("dark");
        modebtn1.textContent = "DARK";
    }
});

/*let hover = document.querySelector('#noclick');
let b =0;
hover.onmouseover=()=>{
    console.log("warning do not hover the mouse again");
    
    if(b>0){
        console.log(`you have hovered on ${b} timesand fined ${b*2} dollars`);
        }
    b++;
};
*/
    
    
