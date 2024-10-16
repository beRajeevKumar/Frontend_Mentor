const taskInput = document.getElementById('taskContainer');
const addButton = document.getElementById('addButton');
const taskContainer = document.querySelector('.addedTask')

// add task
const addTask = ()=>{
             if(taskInput.value ===  ""){
                alert('Write the task you want to add!')
                return false
             }
                let newTaskContainer = document.createElement('div');
                taskContainer.appendChild(newTaskContainer);
                newTaskContainer.classList.add('newTaskContainer')
        
               let taskContext = document.createElement('span');
               taskContext.textContent = taskInput.value;
                newTaskContainer.appendChild(taskContext)
                taskContext.classList.add('taskContext')
                
                taskInput.value = "";
        
               let editOption = document.createElement('button');
               editOption.textContent = "Edit";
               newTaskContainer.appendChild(editOption)
               editOption.classList.add('editOption')
               editOption.addEventListener('click', editTask)
        
               let deleteOption = document.createElement('button');
               deleteOption.textContent = "X";
               newTaskContainer.appendChild(deleteOption)
               deleteOption.classList.add('deleteOption')
               deleteOption.addEventListener('click', deleteTask)
              
               let date = document.createElement('span');
               let createDate = new Date();
               let day = createDate.getDate(); 
               let month = createDate.getMonth() + 1; 
               let year = createDate.getFullYear(); 
               let hour = createDate.getHours();
               let minute = createDate.getMinutes();
               let period = hour >= 12 ? 'PM' : 'AM';
               hour = hour % 12 || 12; 
               minute = String(minute).padStart(2, '0');
          
            
               date.textContent = `${day}/${month}/${year} ${hour}:${minute} ${period} `; 
               newTaskContainer.appendChild(date);
               date.classList.add('date')

               let doneBtn = document.createElement('button')
               doneBtn.textContent = "Done";
               doneBtn.classList.add('doneBtn')
               newTaskContainer.appendChild(doneBtn);
              doneBtn.addEventListener('click', addToLocalStorage)


        }
        
        addButton.addEventListener('click', addTask);

        
        
        // delete task ... 
        
        const deleteTask = (e) => {
            // Navigate to the parent task container
            const task = e.target.closest('.newTaskContainer');
            if (task) {
                taskContainer.removeChild(task);
            }
        };
         
        // edit task
        const editTask = (e) => {
            // Navigate to the parent task container
            const taskContainer = e.target.closest('.newTaskContainer');
            if (taskContainer) {
                let taskText = taskContainer.querySelector('.taskContext');
                taskInput.value = taskText.textContent;
        
                let updateButton = document.createElement('button');
                updateButton.textContent = "Update";
                let inputTask = document.querySelector('.inputTask');
                inputTask.appendChild(updateButton);
                updateButton.classList.add('updateButton');
        
                const editOption = e.target; // The clicked edit button
                editOption.disabled = true;
        
                updateButton.addEventListener('click', () => {
                    taskText.textContent = taskInput.value;
                    inputTask.removeChild(updateButton);
                    taskInput.value = "";
                    editOption.disabled = false;
                });
            }
        };
        

 
//  add tasks to localStorage
const addToLocalStorage = (e) => {
    // Navigate to the parent task container
    const taskContainer = e.target.closest('.newTaskContainer');
    if (taskContainer) {
        // Change the button's appearance
        const doneButton = e.target; // The clicked done button
        doneButton.style.backgroundColor = "green";
        doneButton.textContent = "✔";

        // Get the task text and date
        const taskText = taskContainer.querySelector('.taskContext').textContent;
        const taskDate = taskContainer.querySelector('.date').textContent;

        // Store to localStorage
        let existingTasks = JSON.parse(localStorage.getItem('toDoTasks')) || [];
        if (!existingTasks.some(existingTask => existingTask.text === taskText && existingTask.date === taskDate)) {
            existingTasks.push({ text: taskText, date: taskDate });
        }

        localStorage.setItem('toDoTasks', JSON.stringify(existingTasks));
    }
};

// show completed tasks
const completButton = document.getElementById('CompletedTask')
const showCompletedTasks = () => {
     taskContainer.innerHTML = "";
    let completedTasksContainer = document.querySelector('.completed-tasks-container');
    if (!completedTasksContainer) {
        completedTasksContainer = document.createElement("div");
        completedTasksContainer.classList.add('completed-tasks-container');
        taskContainer.appendChild(completedTasksContainer);
    }
       
    completedTasksContainer.innerHTML = ''; 
    let completedTasks = JSON.parse(localStorage.getItem('toDoTasks')) || [];
    completedTasks.forEach(task => {
        let taskDiv = document.createElement('div');
        taskDiv.textContent = `* ${task.text} - ${task.date} ✔`;
        completedTasksContainer.appendChild(taskDiv);
    });
    const inputTask = document.querySelector('.inputTask')
    inputTask.removeChild(completButton);
    // add clear button 
    let clearButton =  document.createElement('button');
    clearButton.classList.add('clear-button');
     clearButton.textContent = "Clear"
     inputTask.appendChild(clearButton);

     clearButton.addEventListener("click", ()=>{
        localStorage.clear("toDoTasks");
        taskContainer.removeChild(completedTasksContainer)
        inputTask.removeChild(clearButton);
        inputTask.appendChild(completButton)
     })

     addToLocalStorage()

}
completButton.addEventListener('click', showCompletedTasks)