const STORAGE_KEY = 'task-manager-tasks';

export function getTasks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function deleteTask(id) {
    const tasks = getTasks().filter(t => t.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function toggleComplete(id) {
    const tasks = getTasks().map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
