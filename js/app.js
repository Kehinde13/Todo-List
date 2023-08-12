const clear = document.getElementById("clear");
const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.querySelector("input");
const addTodo = document.getElementById("add-content");
const save = document.getElementById("saveBtn");
const addTodoForm = document.querySelector("#addTodoForm")



//get today's date
const options = {weekday: "long", month:"short", day:"numeric"};
const today = new Date();

//show current date
date.innerHTML = today.toLocaleDateString("en-Us", options);


//create a new Todo
const createTodo = (todo) => `
     <li class="item">
       <i class="fa fa-circle-thin co" onClick="toggleTodoCompletion(event)"></i>
       <p class="text">
          ${todo}
       </p>
       <i class="fa fa-trash-o de" onClick="deleteTodo(event)"></i>
     </li>
`

//check for saved todos, if there is no todo set the savedTodos to an empty array
savedTodos = JSON.parse(localStorage.getItem("todos")) || []

//render all saved Todos 
const renderTodos = () => {
    savedTodos.forEach((todo) => {
        list.insertAdjacentHTML(
           'beforeend',
           createTodo(todo)
        )
    })
}

//display all the saved todos
window.onload = renderTodos


// add a new todo
const addNewTodo = (event) => {
     //prevent the form from submitting
     event.preventDefault()

     //check if the input is empty
     if(input.value.length === ""){
          alert("Write a To-Do");
     } else {

          //insert the new todo into the list of todos
          const todo = input.value
          const newTask = createTodo(todo)
          list.insertAdjacentHTML(
               'beforeend',
               newTask
          )
          
          //save the new todo to localStorage
          savedTodos.push(todo)
          localStorage.setItem(
               'todos',
               JSON.stringify(savedTodos)
          )
          
          //clear the input
          addTodoForm.reset()
     }
    
 }

//add anew todo event
 addTodo.addEventListener("click", addNewTodo)

 //add a new todo when the enter key is pressed 
 input.addEventListener('keydown', (event) => {
     event.preventDefault()
     if (event.key === 'Enter') {
       addNewTodo;
       console.log(addNewTodo);
     }
   });



//check todo as completed
const toggleTodoCompletion = (event) => {
     //toggle the task completion
     if(event.target.classList.contains("fa-circle-thin")) {
          event.target.classList.remove("fa-circle-thin");
          event.target.classList.add("fa-check-circle");
          event.target.nextElementSibling.classList.add("lineThrough");
     } else if (event.target.classList.contains("fa-check-circle")) {
          event.target.classList.remove("fa-check-circle");
          event.target.classList.add("fa-circle-thin");
          event.target.nextElementSibling.classList.remove("lineThrough");
     }
     
}

//delete a todo
const deleteTodo = (event) => {
   //get the delete parentElement
    const listItem = event.target.parentElement
    //get the todo text and use it to access the index of the todo
    const todo = listItem.querySelector(".text").innerText
    const indexOfTask = savedTodos.indexOf(todo)
    
    //remove the todo from the saved todos nad the local storage
    savedTodos.splice(indexOfTask, 1)
    localStorage.setItem(
        'todos',
        JSON.stringify(savedTodos)
    )
    listItem.remove(todo)
}

//clear all todo
clear.addEventListener('click', () => {
     localStorage.clear('savedTodos');
     list.remove()
}) 









