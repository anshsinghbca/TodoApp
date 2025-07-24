const inputElement=document.querySelector("#input");
const tarikhElement=document.querySelector("#date");
const btnElement=document.querySelector("#btn");


let todoList=[
    
    

];
show();

function chut(){
    btnElement.addEventListener("click",()=>{
        if(inputElement.value===""){
            alert("please enter the all section");
        }


        if(tarikhElement.value===""){
            alert("please enter the all section");
        }

        let todoitem=inputElement.value;
         let tododate=tarikhElement.value;
        todoList.push({items:todoitem,dueDate:tododate});
        inputElement.value="";
        tarikhElement.value="";
        
        
 show();
    })
   
}

chut();

function show(){
    const contain=document.querySelector(".container");
    newHtml="";
    for(let i=0;i<todoList.length;i++){

        let item=todoList[i].items;
        let dueDate=todoList[i].dueDate;


        newHtml+=`
        <div>
        <span id="span1">${item}</span>
         <span id="span2">${dueDate}</span>
        <button onclick="todoList.splice(${i}, 1); show();"  id="btn2">Delete</button>
        </div>
        
        
        `;

    }
contain.innerHTML=newHtml;
}



