const fs = require('fs');
let src = "./Documentos-Pruebas-Tecnicas/";
let directories = ["AcuseIVA","REPSE", "DeclaracionIVA", "AcuseIMSS", "Pago INFONAVIT"]
let files = fs.readdirSync(src);

for(directory of directories) {
    if(!fs.existsSync("./"+directory)){
        fs.mkdirSync("./"+directory);
    }
}

for(file of files){
    let dir = "";
        if(file.includes("AcuseIVA")){
            dir="./AcuseIVA/";
        }
        else if (file.includes("REPSE")) {
            dir="./REPSE/";
        }
        else if (file.includes("DeclaracionIVA")) {
            dir="./DeclaracionIVA/";
        }
        else if (file.includes("AcuseIMSS")) {
            dir="./AcuseIMSS/";
        }
        else if (file.includes("Pago INFONAVIT")) {
            dir="./Pago INFONAVIT/"
        }
    fs.rename(src+file, dir+file, (err)=>{
        if(err) throw err;
    });
}
