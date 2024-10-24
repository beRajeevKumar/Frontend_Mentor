// Get references to DOM elements
const addTodoForm = document.getElementById("add-todo_form"),
  aTmodeInput = addTodoForm.querySelector(".s-mode"),
  aTpriorityInp = addTodoForm.querySelector(".s-p"),
  aTsts = addTodoForm.querySelector(".status"),
  aTInput = addTodoForm.querySelector(".todo_input");

const editTodoForm = document.getElementById("edit-todo_form"),
  editTodoBtn = editTodoForm.querySelector(".edit-todo-btn"),
  eTpriorityInp = editTodoForm.querySelector(".edit_s-p"),
  eTEditText = editTodoForm.querySelector(".edit-todo_input"),
  eTsts = editTodoForm.querySelector(".edit-status");

const addTodoModal = document.querySelector(".add-todo-modal"),
  editTodoModal = document.querySelector(".edit-todo-modal");
const openAddTodoModalBtn = document.querySelector(".open-add-todo-modal");

const workTasksContainer = document.querySelector(".work > .tasks"),
  personalTasksContainer = document.querySelector(".personal > .tasks");

// Arrays for storing tasks
let work = [],
  personal = [];

// Load tasks from localStorage
personal = localStorage.getItem("personal")
  ? [...JSON.parse(localStorage.getItem("personal"))]
  : [];

work = localStorage.getItem("work")
  ? [...JSON.parse(localStorage.getItem("work"))]
  : [];

openAddTodoModalBtn.onclick = function () {
  addTodoModal.classList.toggle("show");
};
// Event listeners for modals
addTodoModal.querySelector(".cross-icon").onclick = function () {
  addTodoModal.classList.toggle("show");
};

editTodoModal.querySelector(".cross-icon").onclick = function () {
  editTodoModal.classList.toggle("show");
};

// Form submission for adding a new todo
addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let content = aTInput.value;
  let sts = aTsts.value;
  let stsClass;
  switch (sts) {
    case "⬤ Done":
      stsClass = "done";

      break;
    case "⬤ In Progress":
      stsClass = "in-progress";

      break;
    case "⬤ Not Started":
      stsClass = "not-started";

      break;

    default:
      break;
  }

  let priority = aTpriorityInp.value;
  let prClass;
  switch (priority) {
    case "High":
      prClass = "high";

      break;
    case "Medium":
      prClass = "med";

      break;
    case "Low":
      prClass = "low";

      break;

    default:
      break;
  }

  let mode = aTmodeInput.value;
  let chosenContainer;
  let chosenArr;
  let chosenKey;
  switch (mode) {
    case "School/Work":
      chosenContainer = workTasksContainer;
      chosenArr = work;
      chosenKey = "work";
      break;
    case "Personal":
      chosenContainer = personalTasksContainer;
      chosenArr = personal;
      chosenKey = "personal";
      break;
    default:
      break;
  }

  let todoCard = document.createElement("div");
  todoCard.innerHTML = `
              <div class="top-part">
                <p class="content">${content}</p>

                <div class="btns">
                  <i class="fa-solid fa-pen-to-square edit"></i>
                  <i class="fa-solid fa-trash-can delete"></i>
                </div>
              </div>
              <span class="pr ${prClass}">${priority}</span>

              <span class="progress ${stsClass}">${sts}</span>`;

  todoCard.classList.add("todo-item");
  todoCard.classList.add(`${mode}`);
  todoCard.id = `task-${chosenKey}-${chosenArr.length + 1}`;
  chosenContainer.appendChild(todoCard);
  chosenArr.push({
    id: `${chosenKey}-${chosenArr.length + 1}`,
    content: todoCard.querySelector(".content").textContent,
    progress: todoCard.querySelector(".progress").textContent,
    priority: todoCard.querySelector(".pr").textContent,
    mode: mode,
  });
  localStorage.setItem(chosenKey, JSON.stringify(chosenArr));
  addTodoModal.classList.toggle("show");
  window.location.reload();
});

function deleteTodo(taskId, el, taskArr, taskArrKey, taskContainer) {
  let taskDiv = document.getElementById(taskId);
  taskContainer.removeChild(taskDiv);

  let indx = taskArr.indexOf(el);
  taskArr.splice(indx, 1);
  localStorage.setItem(taskArrKey, JSON.stringify(taskArr));
  window.location.reload();
}

function editTodo(taskId, el, taskArr) {
  let taskDiv = document.getElementById(taskId);
  let taskDivContent = taskDiv.querySelector(".content");
  let taskProgress = taskDiv.querySelector(".progress");
  let taskPriority = taskDiv.querySelector(".pr");

  eTEditText.value = taskDivContent.textContent;
  eTpriorityInp.value = taskPriority.textContent;
  eTsts.value = taskProgress.textContent;

  let index = taskArr.indexOf(el);

  eTEditText.onchange = function (e) {
    taskDivContent.textContent = e.target.value;
    taskArr[index].content = e.target.value;
  };

  eTpriorityInp.onchange = function (e) {
    taskPriority.textContent = e.target.value;
    taskArr[index].priority = e.target.value;

    let prClasses = Array.from(taskPriority.classList);
    switch (taskPriority.textContent) {
      case "High":
        taskPriority.classList.remove(prClasses[1]);
        taskPriority.classList.add("high");
        break;
      case "Medium":
        taskPriority.classList.remove(prClasses[1]);
        taskPriority.classList.add("med");
        break;
      case "Low":
        taskPriority.classList.remove(prClasses[1]);
        taskPriority.classList.add("low");
        break;

      default:
        break;
    }
  };

  eTsts.onchange = function (e) {
    taskProgress.textContent = e.target.value;
    taskArr[index].progress = e.target.value;

    let stsClasses = Array.from(taskProgress.classList);

    switch (taskProgress.textContent) {
      case "⬤ Done":
        taskProgress.classList.remove(stsClasses[1]);
        taskProgress.classList.add("done");
        break;
      case "⬤ In Progress":
        taskProgress.classList.remove(stsClasses[1]);
        taskProgress.classList.add("in-progress");

        break;
      case "⬤ Not Started":
        taskProgress.classList.remove(stsClasses[1]);
        taskProgress.classList.add("not-started");
        break;

      default:
        break;
    }
  };
}

personal = localStorage.getItem("personal")
  ? [...JSON.parse(localStorage.getItem("personal"))]
  : [];

work = localStorage.getItem("work")
  ? [...JSON.parse(localStorage.getItem("work"))]
  : [];

function populateTodos(tasks) {
  if (tasks.length !== 0) {
    tasks.forEach((task) => {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("todo-item");
      taskDiv.id = `task-${task.id}`;
      let stsClass;
      switch (task.progress) {
        case "⬤ Done":
          stsClass = "done";

          break;
        case "⬤ In Progress":
          stsClass = "in-progress";

          break;
        case "⬤ Not Started":
          stsClass = "not-started";

          break;

        default:
          break;
      }
      let prClass;
      switch (task.priority) {
        case "High":
          prClass = "high";

          break;
        case "Medium":
          prClass = "med";

          break;
        case "Low":
          prClass = "low";

          break;

        default:
          break;
      }
      taskDiv.innerHTML = ` <div class="top-part">
                <p class="content">${task.content}</p>

                <div class="btns">
                  <i class="fa-solid fa-pen-to-square edit"></i>
                  <i class="fa-solid fa-trash-can delete"></i>
                </div>
              </div>
              <span class="pr ${prClass}">${task.priority}</span>

              <span class="progress ${stsClass}">${task.progress}</span>`;
      let taskArrKey, taskContainer;
      switch (task.mode) {
        case "School/Work":
          workTasksContainer.appendChild(taskDiv);
          taskContainer = workTasksContainer;
          taskArrKey = "work";
          break;
        case "Personal":
          personalTasksContainer.appendChild(taskDiv);
          taskContainer = personalTasksContainer;
          taskArrKey = "personal";
          break;

        default:
          break;
      }

      const editBtn = taskDiv.querySelector(".edit");
      const delBtn = taskDiv.querySelector(".delete");

      editBtn.addEventListener("click", () => {
        editTodoModal.classList.add("show");
        editTodo(taskDiv.id, task, tasks);

        editTodoBtn.onclick = function () {
          localStorage.setItem(taskArrKey, JSON.stringify(tasks));
          editTodoModal.classList.remove("show");
        };
      });

      delBtn.addEventListener("click", () => {
        deleteTodo(taskDiv.id, task, tasks, taskArrKey, taskContainer);
      });
    });
  }
}

document.body.onload = function () {
  populateTodos(personal);
  populateTodos(work);
};
