const fs = require('fs');
const path = require('path');

//저장하고 읽어올 파일경로
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

// 파일 에서 읽어오기
const getProductsFromFile = (cb)=>{   
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
    });
}


module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        console.log("save");
        const cb = products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err=>{
                console.log(err);
            });
        }
        getProductsFromFile(cb);
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
        getProductsFromFile(cb);
    }

}