const {fs,filePath} = require('./utils');
let todos=JSON.parse(fs.readFileSync(filePath,'utf8'));

//add todo
function add(dataObj){
    if(dataObj.title && dataObj.body)
    {
        let todoId;
       if(todos.length===0){todoId=1}
       else {todoId = todos[todos.length-1].id+1}
       todo={id:todoId, title:dataObj.title, body:dataObj.body, checked:false };
       todos.push(todo);
       fs.writeFileSync(filePath, JSON.stringify(todos));
    }
}

//edit
function edit(dataObj){
    if(dataObj.id && dataObj.title && dataObj.body)
    {
        const {todo,index} = getTheTodo(dataObj.id);
        if(todo)
        {
            todo.title=dataObj.title;
            todo.body=dataObj.body;
            todos[index]= todo;
            fs.writeFileSync(filePath, JSON.stringify(todos));
        }
        else{console.log("Invalid id!!");}
    }
}

//delete
function remove(dataObj){
    if(dataObj.id)
    {
        const {todo,index} = getTheTodo(dataObj.id);
        if(todo){
            todos.splice(index,1);
            fs.writeFileSync(filePath, JSON.stringify(todos));
        }
        else{console.log("Invalid id!!")}
    }
}

//check 
function check(dataObj){
    if(dataObj.id)
    {
        const {todo,index} = getTheTodo(dataObj.id);
       if(todo)
       {
            if(todo.checked===false)
            {
                todo.checked=true;
                todos[index]= todo;
                fs.writeFileSync(filePath, JSON.stringify(todos));
            }
            else{console.log("todo is already checked true!");}
       }
       else{console.log("Invalid id!!");}
    }
}

//uncheck
function uncheck(dataObj){
    if(dataObj.id)
    {
        const {todo,index} = getTheTodo(dataObj.id);
       if(todo)
       {
            if(todo.checked===true)
            {
                todo.checked=false;
                todos[index]= todo;
                fs.writeFileSync(filePath, JSON.stringify(todos));
            }
            else{console.log("todo is already checked false!");}
       }
       else{console.log("Invalid id!!");}
    }}

//list
function list(dataObj){
    if(dataObj.type==="all")
        console.log(todos);
    else if(dataObj.type==="checked")
    {
        todos.map(e=>{
            if(e.checked===true)
                console.log(e);
        })
    }
    else if(dataObj.type==="unchecked")
    {
        todos.map(e=>{
            if(e.checked===false)
                console.log(e);
        })
    }
    else{console.log("Invalid type!!..");}
}

getTheTodo=(id)=>{
    let todo,index;
    todos.find((e,i)=>{
        if(e.id==id)
        {
            todo=e;
            index=i;       
        }
    });
    return {todo,index};
}

module.exports={add,edit,remove,check,uncheck,list}