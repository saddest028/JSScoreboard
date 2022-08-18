let countEl1 = document.getElementById("count-el1");
let countEl2 = document.getElementById("count-el2");

let count = 0;

function increment1(){
    //count = count + 1; //method 1
    count += 1; //method 2
    countEl1.innerText = count; 
 }
 function increment2(){
    //count = count + 1; //method 1
    count += 2; //method 2
    countEl1.innerText = count; 
 }
 function increment3(){
    //count = count + 1; //method 1
    count += 3; //method 2
    countEl1.innerText = count; 
 }

 function increment12(){
    //count = count + 1; //method 1
    count += 1; //method 2
    countEl2.innerText = count; 
 }
 function increment22(){
    //count = count + 1; //method 1
    count += 2; //method 2
    countEl2.innerText = count; 
 }
 function increment32(){
    //count = count + 1; //method 1
    count += 3; //method 2
    countEl2.innerText = count; 
 }