//constantes pour l'input button et la task list  area
const taskInput= document.querySelector("#newtask input");
const taskSection= document.querySelector('.tasks');

//les ecouteurs pour la touche entree pour ajouter une nouvelle tache
taskInput.addEventListener('keyup',(e)=>{
    if (e.key=="Enter"){
        createTask();}
}  );

//l'evenement onclick sur le bouton ajouter

document.querySelector('#push').onclick= function (){
    createTask();}

//la fonction de creation d'une tache

function createTask () {
    if(taskInput.value.length ==0){
        alert("Le champ de texte est vide. Entrez un nom de tâche et reessayez.");
    }
    else {
        //création effective d'une tache qui vient se rajouter a la liste
    
        taskSection.innerHTML += `    
        <div class="task"> 
            <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${document.querySelector('#newtask input').value} </p>
            </label>
            <div class="delete"> 
                <i class= " uil uil-trash"> </i>
            </div>

        </div>
           `;   
           
      var current_tasks = document.querySelectorAll(".delete");
      for (var i=0; i<current_tasks.length;i++){
        current_tasks[i].onclick=function(){
            this.parentNode.remove();
        }
      } 
      taskSection.offsetHeight >= 300
      ?taskSection.classList.add("overflow")
      :taskSection.classList.remove("overflow");   
    }
    taskInput.value = '';
}


function updateTask(task){
    let taskItem = task.parentElement.lastElementChild;
    if(task.checked){
        taskItem.classList.add("checked");
    }
    else{
        taskItem.classList.remove("checked");
    }
}