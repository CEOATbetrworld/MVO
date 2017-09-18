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
     name : "change",
     source : "images/cat1.png",
     clicks : 0
},{
     name : "is",
     source : "images/cat2.png",
     clicks: 0
},{
     name : "future",
     source : "images/cat3.png",
     clicks: 0
},{
     name : "hard",
     source : "images/cat4.png",
     clicks : 0
},{
     name : "butNecessary",
     source : "images/cat5.png",
     clicks: 0
}]

let buttons = ["b1","b2","b3","b4","b5"];

/////////////view//////////////

let catName = document.getElementById("name");
let imageSource = document.getElementById("imgSrc");
let counter = document.getElementById("counter");
let but  = document.getElementById("sub");
let admin = document.getElementById('admin');
let adminArea = document.getElementById('adminArea')
imageSource.style.display = 'none';

////////////Octopus///////////

for(let i = 0 ; i < buttons.length ; i++){
 let curb = document.getElementById(buttons[i]);
 curb.innerHTML = cats[i].name;
  curb.addEventListener('click',function(){
    imageSource.style.display = 'block';
    catName.innerHTML = cats[i].name;
    counter.innerHTML = cats[i].clicks;
    imageSource.src = cats[i].source;
    let currCat = i;
    document.getElementsByName("aname")[0].value = cats[i].name
    document.getElementsByName('aimageURL')[0].value = cats[i].source
    imageSource.addEventListener('click',function(){
       cats[i].clicks++;
       counter.innerHTML = cats[i].clicks; 
    });
  });
}

 admin.addEventListener('click',function(){
      if(adminArea.style.display === 'none'){
       adminArea.style.display = 'block';
      }
      else{
        adminArea.style.display = 'none';
      }
 });

 but.addEventListener('click',function(e){
  let inputText = document.getElementsByName("aname")[0].value;
  let enteredURL = document.getElementsByName('aimageURL')[0].value;
   e.preventDefault();
      catName.innerHTML = inputText;
      imageSource.src =  enteredURL;
      adminArea.style.display = 'none';
 });





