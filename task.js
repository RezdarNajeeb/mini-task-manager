export function createTaskElement(task) {
  const li = document.createElement('li');
  li.dataset.id = task.id;
  li.className = `flex items-center justify-between bg-gray-50 p-3 rounded border-l-4 ${
      task.priority === 'high'
          ? 'border-red-500'
          : task.priority === 'medium'
              ? 'border-yellow-500'
              : 'border-green-500'
  }`;

  li.innerHTML = `
    <div class="flex items-center gap-3">
      <input type="checkbox" class="toggle-checkbox hover:cursor-pointer" ${task.completed ? 'checked' : ''} />
      <div>
        <p class="${task.completed ? 'line-through text-gray-400' : 'font-medium'}">${task.title}</p>
        <small class="text-sm text-gray-500">Due: ${task.dueDate}</small>
      </div>
    </div>
    <button class="text-red-500 delete-btn hover:text-red-700">
      <i class="fas fa-trash"></i>
    </button>
  `;

  return li;
}
