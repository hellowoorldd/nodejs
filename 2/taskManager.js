const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, 'data.json');

const loadTasks = () => {
  try {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

const saveTasks = (tasks) => {
  fs.writeFileSync(dataFile, JSON.stringify(tasks, null, 2));
}

const addTask = (title) => {
  const tasks = loadTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    comleted: false,
  }
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`module was added: ${newTask.id} - ${newTask.title}`)
}

module.exports = {
  loadTasks,
  saveTasks,
  addTask,
}
