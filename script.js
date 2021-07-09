let container = document.getElementById("container")
let firstBg = document.getElementById("first-bg")
let third = document.getElementById("third")
let third2 = document.getElementById("third2")
let secondBg = document.getElementById("second-bg")
let fourth2 = document.getElementById("fourth2")
let cont1 = document.getElementById("cont1")
let cont2 = document.getElementById("cont2")
let cont3 = document.getElementById("cont3")
let cont4 = document.getElementById("cont4")
let last = document.getElementById("last")
let cbox = document.getElementById("cbox")


function chatclose(){
    cbox.style.opacity=0
}

third2.addEventListener("click",function chat(){
    cbox.style.opacity=1
})

cbox.style.opacity= 0
container.style.opacity = 0
firstBg.style.opacity = 0
third.style.opacity = 0
third2.style.opacity = 0
secondBg.style.opacity = 0
fourth2.style.opacity = 0
cont1.style.opacity = 0
cont2.style.opacity = 0
cont3.style.opacity = 0
cont4.style.opacity = 0
last.style.opacity = 0


setTimeout(() => {container.style.opacity = 1
    
}, 400 );
setTimeout(() => {firstBg.style.opacity = 1
    
}, 800);
setTimeout(() => { third.style.opacity= 1
    third2.style.opacity = 1
    
}, 1200);
setTimeout(() => {secondBg.style.opacity = 1
    fourth2.style.opacity = 1
    
},1600 );
setTimeout(() => { cont1.style.opacity= 1
    
},2000 );
setTimeout(() => {cont2.style.opacity = 1
    
},2400);
setTimeout(() => {cont3.style.opacity = 1
    
},2800 );
setTimeout(() => {cont4.style.opacity = 1
    
},3200 );
setTimeout(() => {last.style.opacity = 1
    
},3600 );






