/* COUNTDOWN */

let count = 3;
let countdownEl = document.getElementById("countdown");

let interval = setInterval(()=>{

count--;

if(count>0){

countdownEl.innerText = count;

}

else{

countdownEl.innerText = "🎉 Yeyyy 23!!! 🎉";

confetti({
particleCount:150,
spread:120,
origin:{y:0.6}
});

setTimeout(()=>{

countdownEl.style.display="none";

document.getElementById("birthday").style.display="block";

document.getElementById("book").style.display="block";

},1000);

clearInterval(interval);

}

},1000);


/* BOOK PAGE FLIP */

let pages = document.querySelectorAll(".page");
let current = 0;

document.getElementById("book").onclick = function(){

if(current < pages.length){

pages[current].classList.add("flipped");
current++;

}

else{

document.getElementById("book").style.display="none";

document.getElementById("loveGallery").style.display="block";

}

}


/* FLOATING HEARTS */

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "vw";

heart.style.animationDuration = (Math.random()*3 + 3) + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000)

}

setInterval(createHeart,500);