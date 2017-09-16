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


////////////// FOR IMAGE LIST //////////////////// 
let id =    ["img1", "img2", "img3", "img4", "img5"];
let catId = ["cat1", "cat2", "cat3", "cat4", "cat5"];
let divId = ["div1","div2","div3","div4","div5"];
let listItem =  ["li1","li2","li3","li4","li5"];
let clis = [0, 0, 0, 0, 0];
let pics = [];
let cats = [];
let divs = [];
let list = [];


for (let i = 0; i < 5; i++) {
    pics[i] = document.getElementById(id[i]);
    cats[i] = document.getElementById(catId[i]);
    divs[i] = document.getElementById(divId[i]);
    list[i] = document.getElementById(listItem[i]);
    cats[i].innerHTML = clis[i];
    divs[i].style.display = 'none';

    pics[i].addEventListener('click', function() {
        clis[i]++;
        cats[i].innerHTML = clis[i];
    }, false);

    list[i].addEventListener('click', function() {
      if(divs[i].style.display === 'none'){
          divs[i].style.display = 'block';
      }
      else{
      	divs[i].style.display = 'none';
      }
    }, false);

} 

console.log(list);