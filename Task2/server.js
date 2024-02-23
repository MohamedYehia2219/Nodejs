const {FILE_PATH, PORT, fs, fileIsExisted}= require('./utils');
fileIsExisted();
let todos= JSON.parse(fs.readFileSync(FILE_PATH));

//express
const express=require('express');
const server=express();
server.use(express.json())
server.listen(PORT, (err)=>{
    if(err){console.log(err);}
    console.log(`server listening on port ${PORT}`);
})
//APIS
//add todo
server.post('/todo',(req,res)=>{
    let data = req.body;
    console.log(data);
    if(data.title && data.body)
    {
       let todoId;
       if(todos.length===0){todoId=1}
       else {todoId = todos[todos.length-1].id+1}
       let todo={id:todoId, title:data.title, body:data.body, checked:false};
       todos.push(todo);
       fs.writeFileSync(FILE_PATH, JSON.stringify(todos));
       res.send("todo added successfully")
    }
    else{res.send("Invalid data!!")}
    res.end()
})

//edit todo
server.put('/todo/:id',(req,res)=>{
    let todoID= req.params.id;
    let data = req.body;
    const {todo,index} = getTheTodo(todoID);
    if(todo)
    {
        todo.title=data.title ?? todo.title;
        todo.body=data.body ?? todo.body;
        todo.checked = data.checked ?? todo.checked;
        todos[index]= todo;
        fs.writeFileSync(FILE_PATH, JSON.stringify(todos));
        res.send("todo updated successfully")
    }
    else{res.send("Invalid id!!")}
    res.end()
})

//delete todo
server.delete('/todo/:id',(req,res)=>{
    let todoID= req.params.id;
    const {todo,index} = getTheTodo(todoID);
    if(todo){
        todos.splice(index,1);
        fs.writeFileSync(FILE_PATH, JSON.stringify(todos));
        res.send("todo deleted succssfully")
    }
    else{res.send("Invalid id!!")}
    res.end()
})

//get todos
server.get('/todo',(req,res)=>{
    let {type} = req.query;
    let checked=[];
    let unchecked=[];
    if(type ==="all")
        res.send(JSON.stringify(todos))
    else if(type==="checked")
    {
        todos.map(e=>{
            if(e.checked===true)
                checked.push(e)
        })
        res.send(JSON.stringify(checked))
    }
    else if(type==="unchecked")
    {
        todos.map(e=>{
            if(e.checked===false)
                unchecked.push(e)
        })
        res.send(JSON.stringify(unchecked))
    }
    else{res.send("Invalid type!!..");}
    res.end();
})

//get specific todo
server.get('/todo/:id',(req,res)=>{
    let todoID=req.params.id;
    const {todo} = getTheTodo(todoID);
    if(todo)
    {res.send(JSON.stringify(todo))}
    else{res.send("Invalid id!!")}
    res.end()
})


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