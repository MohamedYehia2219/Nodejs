const {add,edit,remove,check,uncheck,list} = require('./functions');
const {dataPrepare,fileIsExisted} = require('./utils');

function main(args){
    const [node, path, operation ,...data] = args;
    const dataObj= dataPrepare(data);
    fileIsExisted();

    switch(operation){
        case "add":
            add(dataObj);
            break;
        case "edit":
            edit(dataObj);
            break;
        case "remove":
            remove(dataObj);
            break;
        case "check":
            check(dataObj);
            break;
        case "uncheck":
            uncheck(dataObj);
            break;
        case "list":
            list(dataObj);
            break;   
         default:
            console.log("Invalid Operation!!..");    
    }
}

main(process.argv);
