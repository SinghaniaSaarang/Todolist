const task=document.getElementById('task');
const taskadd=document.getElementById('taskadd');
const listcontainer=document.getElementById('listcontainer');

taskadd.addEventListener('click',(e)=>{
    e.preventDefault();

    let inputvalue=task.value.trim();

    if(inputvalue===''){
        alert("No tasks added");
    }else{
        let litask=document.createElement('li');
        litask.innerHTML=inputvalue;
        listcontainer.appendChild(litask);
        inputvalue='';
    }
})