const fs = require('fs');
const path = require('path'); // corrected 'parse' to 'path'

const filepath = "./task.json";

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTasks(tasks); // corrected 'savetasks' to 'saveTasks' and passed 'tasks' instead of 'task'
  console.log(task);
}

const listTask = () => {
  const tasks = loadTask();
  tasks.forEach((task, index) => {
    console.log(`${index}. ${task.task}`);
  })
}

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filepath, dataJSON);
  console.log("task saved");
}

const command = process.argv[2];
const argument = process.argv[3];

if (command === 'add') {
  addTask(argument);
} else if (command === 'list') {
  listTask();
} else if (command === 'remove') {
  removeTask(parseInt(argument)); // corrected 'removetask' to 'removeTask'
} else {
  console.log("command not found");
}