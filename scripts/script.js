///////// FOR ANIMATED HAMBURGER ICON ////////////

let ham = document.getElementsByClassName("container");
let nav = document.getElementsByClassName("navBar");
 ham[0].addEventListener("click", function(){
 	this.classList.toggle("change");
     if(nav[0].style.display === 'none'){
          nav[0].style.display = 'block';
      }
      else{
      	nav[0].style.display = 'none';
      }
 });


////////////// Model //////////////////// 

let cats = [{
     name : "cat1",
     source : "images/cat1.png",
     clicks : 0
},{
     name : "cat2",
     source : "images/cat2.png",
     clicks: 0
},{
     name : "cat3",
     source : "images/cat3.png",
     clicks: 0
},{
     name : "cat4",
     source : "images/cat4.png",
     clicks : 0
},{
     name : "cat5",
     source : "images/cat5.png",
     clicks: 0
}]

let buttons = ["b1","b2","b3","b4","b5"];

/////////////view//////////////

let catName = document.getElementById("name");
let imageSource = document.getElementById("imgSrc");
let counter = document.getElementById("counter");
imageSource.style.display = 'none';

////////////Octopus///////////

for(let i = 0 ; i < buttons.length ; i++){
 let curb = document.getElementById(buttons[i]);
  curb.addEventListener('click',function(){
    imageSource.style.display = 'block';
    catName.innerHTML = cats[i].name;
    counter.innerHTML = cats[i].clicks;
    imageSource.src = cats[i].source;
    imageSource.addEventListener('click',function(){
       cats[i].clicks++;
       counter.innerHTML = cats[i].clicks; 
    })
  });
}


