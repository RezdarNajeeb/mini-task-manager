import { saveTask, getTasks, deleteTask, toggleComplete } from './storage.js';
import { createTaskElement } from './task.js';

const form = document.getElementById('task-form');
const titleInput = document.getElementById('title');
const dateInput = document.getElementById('due-date');
const priorityInput = document.getElementById('priority');
const filterSelect = document.getElementById('filter-priority');
const taskList = document.getElementById('task-list');

function renderTasks(filter = 'all') {
  taskList.innerHTML = '';
  const tasks = getTasks();
  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.priority === filter);
  filtered.forEach(task => {
    const el = createTaskElement(task);
    taskList.appendChild(el);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = {
    id: Date.now(),
    title: titleInput.value.trim(),
    dueDate: dateInput.value,
    priority: priorityInput.value,
    completed: false,
  };

  saveTask(task);
  form.reset();
  renderTasks(filterSelect.value);
});

filterSelect.addEventListener('change', () => {
  renderTasks(filterSelect.value);
});

taskList.addEventListener('click', (e) => {
  const taskEl = e.target.closest('li[data-id]');
  if (!taskEl) return;

  const id = +taskEl.dataset.id;

  if (e.target.closest('.delete-btn')) {
    deleteTask(id);
    renderTasks(filterSelect.value);
  }

  if (e.target.matches('.toggle-checkbox')) {
    toggleComplete(id);
    renderTasks(filterSelect.value);
  }
});

renderTasks();