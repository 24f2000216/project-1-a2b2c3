document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    const taskDate = document.getElementById('taskDate').value;
    
    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskValue + (taskDate ? ' (Due: ' + taskDate + ')' : '');
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'removeBtn';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };
    
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';
    document.getElementById('taskDate').value = '';
});
