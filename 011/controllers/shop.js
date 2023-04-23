const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData])=>{
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err=>console.log(err));
};

exports.getProduct = (req, res, next) => {
  //라우터에서 지정한 :productId
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([rows, fieldData])=>{
      res.render('shop/product-detail', {
        product: rows[0],
        pageTitle: 'Product',
        path: '/products'
      });
    })
    .catch(err=>console.log(err));
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err=>console.log(err));
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
