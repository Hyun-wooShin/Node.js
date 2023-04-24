const Product = require('../models/product');
const Cart = require('../models/cart');

//상품 조회
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products=>{
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err=>console.log(err));
};

//상품 상세 조회
exports.getProduct = (req, res, next) => {
  //라우터에서 지정한 :productId 에 대한 처리로 req.params.productId 지정
  const prodId = req.params.productId;
  //findAll where를 써도 되고 findByPk를 써도 되지만 findByPk는 pk일경우 쓰면 된다.
  /*
  Product.findAll({where: {id: prodId}})
    .then(products =>{
      res.render('shop/product-detail', {
        product: products[0],
        pageTitle: products[0].title,
        path: '/products'
      });
    })
    .catch(err=>console.log(err));
  */
  Product.findByPk(prodId)
    .then(product =>{
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err=>console.log(err));
}

//Index 조회
exports.getIndex = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err=>{
    console.log(err);
  });
};

//장바구니 리스트
exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products){
        const cartProductData = cart.products.find(prod => prod.id === product.id);
        if(cartProductData){
          cartProducts.push({productData: product, qty: cartProductData.qty});
        }
      }
      res.render('shop/cart', {
        products: cartProducts,
        path: '/cart',
        pageTitle: 'Your Cart'
      });
    });
  });
};

//장바구니 저장
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price);
  })
  console.log(prodId);
  res.redirect('/cart');
}

//장바구니 삭제
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product=>{
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
