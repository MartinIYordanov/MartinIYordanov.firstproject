function unhideList(domElement){
    if(domElement.style.visibility==='hidden'){
        domElement.style.visibility='visible'
    }else{
        domElement.style.visibility='hidden'
    }   
};


let dropDown=document.getElementById('aboutMartin');
let aboutMeButton=document.getElementById("about-me");
aboutMeButton.addEventListener('click', unhideList.bind(null, dropDown));



let dropDown1=document.getElementById('certificates');
let educationButton=document.getElementById("education");
educationButton.addEventListener('click',unhideList.bind(null,dropDown1));



let dropDown2=document.getElementById('worked');
let experienceButton=document.getElementById("experience");
experienceButton.addEventListener('click',unhideList.bind(null,dropDown2))



let dropDown3=document.getElementById('proglanguages');
let skillsButton=document.getElementById("skills");
skillsButton.addEventListener('click',unhideList.bind(null,dropDown3))



let dropDown4=document.getElementById('form');
let contactFormButton=document.getElementById("contactForm");
contactFormButton.addEventListener('click',unhideList.bind(null,dropDown4))







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
