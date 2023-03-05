
let experiment=document.getElementById('aboutMartin');
let experimental=document.getElementById("about-me");
function unhideList(event){
    if(experiment.style.visibility==='hidden'){
        experiment.style.visibility='visible'
    }else{
        experiment.style.visibility='hidden'
    }   
}

experimental.addEventListener('click',unhideList)



let experiment1=document.getElementById('certificates');
let experimental1=document.getElementById("education");
function unhideList1(event){
    if(experiment1.style.visibility==='hidden'){
        experiment1.style.visibility='visible'
    }else{
        experiment1.style.visibility='hidden'
    }
}
experimental1.addEventListener('click',unhideList1)



let experiment2=document.getElementById('worked');
let experimental2=document.getElementById("experience");
function unhideList2(event){
    if(experiment2.style.visibility==='hidden'){
        experiment2.style.visibility='visible'
    }else{
        experiment2.style.visibility='hidden'
    }
}
experimental2.addEventListener('click',unhideList2)



let experiment3=document.getElementById('proglanguages');
let experimental3=document.getElementById("skills");
function unhideList3(event){
    if(experiment3.style.visibility==='hidden'){
        experiment3.style.visibility='visible'
    }else{
        experiment3.style.visibility='hidden'
    }
}
experimental3.addEventListener('click',unhideList3)




let experiment4=document.getElementById('form');
let experimental4=document.getElementById("taste");
function unhideList4(event){
    if(experiment4.style.visibility==='hidden'){
        experiment4.style.visibility='visible'
    }else{
        experiment4.style.visibility='hidden'
    }
}
experimental4.addEventListener('click',unhideList4)




















let bigImg = document.getElementById('big')
let oneImg = document.getElementById("one");
let twoImg = document.getElementById("two");
let threeImg = document.getElementById("three");

function swapImage(event) {
  let temp = bigImg.src
  bigImg.src=event.target.src
  event.target.src=temp
}

let expImages = document.getElementsByClassName('exp');

for (let i = 0; i < expImages.length; i++) {
  expImages[i].addEventListener('click', swapImage);
}
