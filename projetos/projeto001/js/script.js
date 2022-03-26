// Função que adiciona uma tarefa

function addTask(){
    const taskTitle = document.querySelector('#task-title');

    if(taskTitle.value){
        // Clona o template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);
        
        // adiciona título
        newTask.querySelector('.task-title').textContent = taskTitle.value;

        // remove classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // adicionar o evento de remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        });

        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this);
        });

        // adiciona tarefa na lista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        // limpando o input
        taskTitle.value = '';
    }
}

function removeTask(task){
    task.parentNode.remove(true);
}

function completeTask(task){
    const taskComplete = task.parentNode;

    // toggle == alternar
    taskComplete.classList.toggle('done'); // Se estiver com done, ele tira, se não estiver, ele adiciona
}

const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e){
    e.preventDefault();

    addTask();
});