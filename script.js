var task = document.getElementById('task');
var add = document.getElementById('add');
var box = document.getElementById('p');

add.addEventListener('click', function() {
  if (task.value === '') {
    alert("Please enter a task");
  } else {
    var newTask = document.createElement('div');
    newTask.classList.add('new_task');
    newTask.innerHTML = `
      <h2>${task.value}</h2>
      <button class="delete">Delete</button>
      <button class="done">Done</button>
    `;
    box.appendChild(newTask);
    task.value = '';

    newTask.querySelector('.delete').addEventListener('click', function() {
      newTask.remove();
    });

    newTask.querySelector('.done').addEventListener('click', function() {
      newTask.querySelector('h2').style.textDecoration = 'line-through';
    });
  }
});