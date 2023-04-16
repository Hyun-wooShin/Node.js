const Product = require('../models/product');

//admin 제품추가 렌더링
exports.getAddProducts = (req, res, next)=>{
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

//admin 제품목록 렌더링
exports.getAdminProducts = (req, res, next)=>{
    Product.fetchAll(products => {
        res.render('admin/products',{
            pageTitle:'Products', 
            prods:products, 
            path:'/admin/products', 
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true
        });
    });
}

//admin 제품추가
exports.postAddProducts = (req,res,next)=>{
    //products.push({title: req.body.title})
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}


//shop 제품목록 렌더링
exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products => {
        res.render('shop/product-list',{
            pageTitle:'shop', 
            prods:products, 
            path:'/', 
            hasProds: products.length>0 ? true : false,
            activeShop: true,
            productCSS: true
        });
    });
    
}