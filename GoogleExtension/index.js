const inputButton = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");


//let myLeads = ["s","asd","asds","das"];
let myLeads = [];


//function buttonClicked(){
//    console.log("Button clicked!");
//}

// inputButton.addEventListener("click", function(){
//     console.log("Clicked from addEventListener")
//     myLeads.push("www.awesomelead.com");
// })

inputButton.addEventListener("click", function(){
//  console.log("Clicked from addEventListener")
    myLeads.push(inputEl.value);
    inputEl.value = '';//clears text in input field
    //console.log(myLeads);
    renderLeads();
    
})


function renderLeads(){
    //Log out the items in the myLeads array using a for loop //
    let listItems = "";
    for(i = 0; i < myLeads.length; i++){
        //ulEl.textContent += myLeads[i];
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        //listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"; //target="_blank" open links in new tab
        listItems += `<li> <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`; // ` template string - can break into multiple lines | ${} - to escape template string

        // other way //
        // create element
        // set text content
        // append to ul
        // document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
    
}