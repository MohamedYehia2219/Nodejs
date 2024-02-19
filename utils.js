const fs= require('fs');
const filePath = './db';

const fileIsExisted = function()
{
    if(!fs.existsSync(filePath))
    {
        console.log(filePath);
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    else{
        console.log("File is already existed...");
    }
}

const dataPrepare =function(dataArray)
{
    const dataPreparation = dataArray.reduce((cum,e)=>{
                            const [key,value] = e.split("=");
                            cum[key]=value;
                            return cum;
                        },{});
     return dataPreparation;                   
}

module.exports={dataPrepare, fileIsExisted, fs, filePath};
//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh