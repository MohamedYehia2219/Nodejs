let fs= require('fs');
const FILE_PATH='./db';
const fileIsExisted = function()
{
    if(!fs.existsSync(FILE_PATH))
    {
        fs.writeFileSync(FILE_PATH, JSON.stringify([]));
    }
}
module.exports={FILE_PATH, fileIsExisted};
