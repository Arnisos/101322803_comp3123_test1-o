const fs = require('fs')
const path = require('path')
const dir = './Q3/logs'

function clear(){
    fs.readdir(dir, (err, files) => {
    if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(dir, file), (err) => {
                if (err) throw err
                    console.log(file + " was deleted")
            })
        }
    })
}


function create(){
    for(let i = 1; i<11;i++){
        fs.writeFile(`${dir}/log${i}.txt `, `This is log${i}.txt file`, (err) => {
            if (err) throw err
        })
    } 
}


if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
  setTimeout(create, 100)
} 
else{
console.log("directory already exists")
clear()
}
