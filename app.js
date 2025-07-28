import Task from "./task.js";

function getById(id) {
  return document.getElementById(id);
}

const addTaskFromElement = getById("task-form");
const taskTitleElement = getById("title");
const taskdueDataElement = getById("due-date");
const taskPriorityElement = getById("priority");

let task;

addTaskFromElement.addEventListener("submit", function (e) {
  e.preventDefault();

  task = new Task({
    title: taskTitleElement.value,
    dueDate: taskdueDataElement.value,
    priority: taskPriorityElement.value,
  });

  console.log(task);
});
