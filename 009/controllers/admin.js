const Product = require('../models/product');

//admin 제품추가 렌더링
exports.getAddProducts = (req, res, next)=>{
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product'
    });
}

//admin 제품목록 렌더링
exports.getAdminProducts = (req, res, next)=>{
    Product.fetchAll(products => {
        res.render('admin/products',{
            pageTitle:'Products', 
            prods:products, 
            path:'/admin/products'
        });
    });
}

//admin 제품추가
exports.postAddProducts = (req,res,next)=>{
    const title = req.body.title; 
    const imageUrl = req.body.imageUrl; 
    const description = req.body.description; 
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products => {
        res.render('admin/products',{
            pageTitle:'Admin products', 
            prods:products, 
            path:'/admin/products'
        });
    });
}


