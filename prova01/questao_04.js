// Comentário: código implementado corretamente. Nota 2.0

const fs = require("fs").promises;

async function somar(){
    const filesPath = ['./1.txt', './2.txt', './3.txt']
    let soma = 0;
    
    for(index in filesPath){
        const data = await fs.readFile(filesPath[index]).catch(err=>{
            console.log(err)
        })
    
        if(!data){
            return;
        }
    
        soma += parseInt(data);
    }
    
    console.log(soma);
}

somar()
