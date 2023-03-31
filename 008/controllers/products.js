//const products = [];
const Product = require('../models/product');

exports.getAddProducts = (req, res, next)=>{
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProducts = (req,res,next)=>{
    //products.push({title: req.body.title})
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

//비동기방식으로 인해 발생하는 에러 수정 필요
/*
exports.getProducts = (req, res, next)=>{
    const products = Product.fetchAll();
    console.log(products);
    res.render('shop',{
        pageTitle:'Shop', 
        prods:products, 
        path:'/', 
        hasProds: products.length>0 ? true : false,
        activeShop: true,
        productCSS: true
    });
}
*/

//비동기방식으로 인해 발생하는 에러 수정
exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products => {
        res.render('shop',{
            pageTitle:'Shop', 
            prods:products, 
            path:'/', 
            hasProds: products.length>0 ? true : false,
            activeShop: true,
            productCSS: true
        });
    });
    
}