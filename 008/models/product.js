//const products = [];
//products배열 대신 파일 시스템으로 저장
const fs = require('fs');
const path = require('path');


module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save(){
        // products.push(this);
        // products배열 대신 파일 시스템으로 저장
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent)=>{
            //console.log(err);
            let products = [];
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        })
    }

    //비동기식 방식으로 인해 에러 발생
    /*
    static fetchAll(){
        // return products;
        // products배열 대신 파일 시스템에서 읽어오기
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                return [];
            }
            return JSON.parse(fileContent);
        });
    }
    */

    static fetchAll(cb){
        // return products;
        // products배열 대신 파일 시스템에서 읽어오기
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }

}