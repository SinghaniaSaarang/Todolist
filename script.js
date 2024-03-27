const task=document.getElementById('task');
const taskadd=document.getElementById('taskadd');
const contains=document.getElementById('contains');
const activetasks=document.getElementById('activetasks');

let totalactivetasks=0;
let totalgreentasks=[];
let totaltasks=[];

taskadd.addEventListener('click',(e)=>{
    e.preventDefault();

    let inputvalue=task.value.trim();

    if(inputvalue===''){
        alert("No tasks added");
    }else{

        if(contains.innerHTML===`<h2>No tasks</h2>`){
            contains.innerHTML='';
        }
        contains.classList.remove('loading');
        let litask=document.createElement('div');
        litask.id='litask';
        let taskdiv=document.createElement('div');
        taskdiv.innerHTML=inputvalue;
        taskdiv.id='taskdiv';
        litask.appendChild(taskdiv);
        contains.appendChild(litask);
        totalactivetasks++;
        activetasks.innerText=`Activetask:-${totalactivetasks}`;

        let deletelogo=document.createElement('span');
        deletelogo.innerHTML="\u00d7";
        litask.appendChild(deletelogo);

        totalgreentasks.push(litask);
        totaltasks.push(litask);

        deletelogo.addEventListener('click',()=>{
            litask.remove();
            if (taskdiv.style.backgroundColor!=='lightcoral') {
                totalactivetasks--;
                removeFromTotalGreen(litask);
            }
            removeFromTotaltasks(litask);
            activetasks.innerText=`Activetask:-${totalactivetasks}`;
        })

        taskdiv.addEventListener('dblclick',()=>{
            taskdiv.style.backgroundColor='lightcoral';
            totalactivetasks--;
            activetasks.innerText=`Activetask:-${totalactivetasks}`;
            removeFromTotalGreen(litask);
        })

        taskdiv.addEventListener('click', () => {
            if (taskdiv.style.backgroundColor==='lightcoral') {
                taskdiv.style.backgroundColor=`rgba(185, 238, 144, 0.865)`;
                totalactivetasks++;
                activetasks.innerText=`Activetask:-${totalactivetasks}`;
                totalgreentasks.push(litask);
            }
        });

       task.value=``;

    }
})

function removeFromTotalGreen(task) {
    const index = totalgreentasks.indexOf(task);
    if (index !== -1) {
        totalgreentasks.splice(index, 1);
    }
}

function removeFromTotaltasks(task){
    const index = totaltasks.indexOf(task);
    if (index !== -1) {
        totaltasks.splice(index, 1);
    }
}

activetasks.addEventListener('click',()=>{

    contains.innerHTML=`<h2>Loading</h2>`;

    if(activetasks.innerText==='all'){
        if(totaltasks.length>0){
            setTimeout(()=>{
             contains.innerHTML='';
             totaltasks.forEach(item=>{
                 contains.appendChild(item);
             })
            },1000) 
         }else{
             setTimeout(()=>{
                 contains.innerHTML=`<h2>No tasks</h2>`;
             },1000) 
         }
        activetasks.innerText=`Activetask:-${totalactivetasks}`;
    }else{
        

        if(totalgreentasks.length>0){
           setTimeout(()=>{
            contains.innerHTML='';
            totalgreentasks.forEach(item=>{
                contains.appendChild(item);
            })
           },1000) 
        }else{
            setTimeout(()=>{
                contains.innerHTML=`<h2>No remaining tasks</h2>`;
            },1000) 
        }
        activetasks.innerText='all';
    }
})