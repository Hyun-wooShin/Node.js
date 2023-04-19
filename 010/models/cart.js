const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );
  

module.exports = class cart{
    static addProduct(id, productPrice) {
        
        fs.readFile(p, (err, fileContent)=>{
            let cart = { products:[], totalPrice:0};
            if(!err)
            {
                cart = JSON.parse(fileContent);
            }
            
            //카트에 기존 id의 제품이 있는지 검사한 후
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if(existingProduct){
                // 있으면 수량중가
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
                // 없으면 제품추가
                updatedProduct = { id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + productPrice;

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
              });
        });

    }
}