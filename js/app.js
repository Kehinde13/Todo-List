const clear = document.getElementById("clear");
const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const AddContent = document.getElementById("add-content");
const save = document.getElementById("saveBtn");
const savedToDo = localStorage.getItem("To-Do");



//show today's date
const options = {weekday: "long", month:"short", day:"numeric"};
const today = new Date();

date.innerHTML = today.toLocaleDateString("en-Us", options);

 //save To-Do 
const SaveToDo = () =>{
localStorage.setItem("To-Do", list.innerHTML);
console.log("saved");
} 

//display To-Do
if(savedToDo){
     list.innerHTML = savedToDo;  
}

//add To-Do
AddContent.addEventListener('click', () =>{
   
     // if input is empty
     if(input.value.length == ""){
          alert("Write a To-Do");
     } else {
          //create Elements
          const li = document.createElement('li');
          const circle = document.createElement('i');
          const paragraph = document.createElement('p');
          const trash = document.createElement('i');

          //add class list
          li.classList.add("item");
          circle.classList.add("fa","fa-circle-thin","co");
          paragraph.classList.add("text");
          trash.classList.add("fa","fa-trash-o","de");

          //Append child
          li.appendChild(circle);
          li.appendChild(paragraph);
          li.appendChild(trash);
          list.appendChild(li);

          //Add content
          paragraph.innerText = input.value;
      
          //Clear input field
          input.value = "";

          //delete To-Do
          trash.addEventListener('click', () => {
               list.removeChild(li);
          })

          //cross out a To-Do
          circle.addEventListener('click', () => {
               circle.classList.remove("fa-circle-thin");
               circle.classList.add("fa-check-circle");
               paragraph.classList.add("lineThrough");
          })

          //save To-Do
          save.addEventListener('click', SaveToDo);

          

     }    
})

clear.addEventListener('click', () => {
     window.localStorage.clear('savedToDo');
})









