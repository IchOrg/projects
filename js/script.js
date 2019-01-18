window.onload = function(){
    console.log('simple text');
}

let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit',addTask);

function addTask(e){
    e.preventDefault();
    let textInput = document.getElementById('sendtask');
    let ul = document.getElementsByClassName('list-task')[0];
    let value = textInput.value;
    let newTask = document.createElement('li');
    newTask.innerHTML = value;
    ul.appendChild(newTask);
    textInput.value = '';
}