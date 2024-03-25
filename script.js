const task=document.getElementById('task');
const taskadd=document.getElementById('taskadd');
const contains=document.getElementById('contains');
const activetasks=document.getElementById('activetasks');

let totalactivetasks=0;

taskadd.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('button pressed');

    let inputvalue=task.value.trim();

    if(inputvalue===''){
        alert("No tasks added");
    }else{

        let litask=document.createElement('div');
        litask.id='litask';
        let taskdiv=document.createElement('div');
        taskdiv.innerHTML=inputvalue;
        taskdiv.id='taskdiv';
        litask.appendChild(taskdiv);
        contains.appendChild(litask);
        totalactivetasks++;
        activetasks.innerHTML=`Activetask:-${totalactivetasks}`;

        let deletelogo=document.createElement('span');
        deletelogo.innerHTML="\u00d7";
        litask.appendChild(deletelogo);

        deletelogo.addEventListener('click',()=>{
            litask.remove();
            if (taskdiv.style.backgroundColor!=='lightcoral') {
                totalactivetasks--;
            }
            activetasks.innerHTML=`Activetask:-${totalactivetasks}`;
        })

        taskdiv.addEventListener('dblclick',()=>{
            taskdiv.style.backgroundColor='lightcoral';
            totalactivetasks--;
            activetasks.innerHTML=`Activetask:-${totalactivetasks}`;
        })

        taskdiv.addEventListener('click', () => {
            if (taskdiv.style.backgroundColor==='lightcoral') {
                taskdiv.style.backgroundColor=`rgba(185, 238, 144, 0.865)`;
                totalactivetasks++;
                activetasks.innerHTML=`Activetask:-${totalactivetasks}`;
            }
        });

        // taskdiv.addEventListener('click',()=>{            
        //     taskdiv.style.backgroundColor=`rgba(185, 238, 144, 0.865)`;
            
        // })

       task.value=``;

    }
})