const FILE_PATH='./db';
const PORT =5000;

let fs= require('fs');
const fileIsExisted = function()
{
    if(!fs.existsSync(FILE_PATH))
    {
        fs.writeFileSync(FILE_PATH, JSON.stringify([]));
    }
}
module.exports={FILE_PATH, PORT,fs,fileIsExisted};
