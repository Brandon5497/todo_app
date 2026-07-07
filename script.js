function addTask() {
    const button = document.getElementById('todo-form');
    const task = document.getElementById('todo-input').value;
    button.addEventListener('click', function() 
    {
        //document.getElementById('todo-list').innerHTML += `<li>${document.getElementById('todo-input').value}</li>`;
        const addTask = document.createElement('li');
        addTask.textContent = task;
        document.getElementById('todo-list').appendChild(addTask);
    })
}