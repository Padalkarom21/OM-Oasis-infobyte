const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = document.createElement('li');
  const taskText = document.createTextNode(input.value);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', function() {
    task.remove();
  });
  task.appendChild(taskText);
  task.appendChild(deleteBtn);
  taskList.appendChild(task);
  input.value = '';
});

taskList.addEventListener('click', function(event) {
  const task = event.target;
  if (task.tagName === 'LI') {
    task.classList.toggle('completed');
  }
});
