const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

const getCartFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
        cb([]);
        } else {
        cb(JSON.parse(fileContent));
        }
    });
};
  

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
            
            cart.totalPrice = cart.totalPrice + +productPrice; //productPrice앞에 +가 붙어있는 것은 문자열을 숫자로 변환하기 위함.

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
              });
        });

    }

    static deleteProduct(id, productPrice){
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                return;
            }

            const updatedCart = {...JSON.parse(fileContent)};
            const product = updatedCart.products.find(prod => prod.id === id);
            if(!product) {
                return;
            }

            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;
            
            fs.writeFile(p, JSON.stringify(updatedCart), err => {
                console.log(err);
              });
        });
    }

    
    static getCart(cb) {
        getCartFromFile(cb);
      }
};