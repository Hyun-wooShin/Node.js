const Product = require('../models/product');

//상품등록폼 로드
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

//상품 등록
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description
  }).then(result=>{
    console.log("Product Created!!");
  }).catch(err=>{
    console.log(err);
  });
};

//상품 수정폼 로드
exports.getEditProduct = (req, res, next) => {
  //쿼리매개변수 세팅
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  //:productId 로 넘긴것은 req.params로 받는다
  const prodId = req.params.productId;
  Product.findByPk(prodId).then(
    product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    }
  ).catch(err=>{
    console.log(err);
  })
};

//상품 수정
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl,updatedDescription, updatedPrice);
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.postDeleteProduct = (req, res, next) => {
  const ProdId = req.body.productId;
  Product.deleteById(ProdId);
  res.redirect('/admin/products')
}

//상품목록
exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err=>{
    console.log(err);
  })
};
