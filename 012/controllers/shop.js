const Product = require('../models/product');

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
  /*
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
  */
 req.user.getCart()
 .then(cart=>{
    return cart.getProducts()
    .then(products=>{
      res.render('shop/cart', {
        products: products,
        path: '/cart',
        pageTitle: 'Your Cart'
      });
    }).catch(err => console.log(err));
 })
 .catch(err=>console.log(err));
};

//장바구니 저장
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  /*
  Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price);
  })
  console.log(prodId);
  res.redirect('/cart');
  }
  */
  req.user
  .getCart()
  .then(cart=>{
    fetchedCart = cart;
    return cart.getProducts({where: {id: prodId}})
  })
  .then (products => {
    let product;
    if(products.length > 0)
    {
      product = products[0];
    }
    let newQuantity = 1;
    if(product){
      console.log(product.cartItem.quantity);
      //상품이 있을경우 수량증가
      newQuantity = newQuantity + product.cartItem.quantity;
    }
    
    return Product.findByPk(prodId)
        .then(product=> {
          return fetchedCart.addProduct(product,{
            through: {quantity: newQuantity}
          });
      })
      .catch(err=>console.log(err));
  })
  .then(()=>res.redirect('/cart'))
  .catch(err=>console.log(err));
}

//장바구니 삭제
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
  .getCart()
  .then(cart=>{
    return cart.getProducts({where: {id: prodId}})
  })
  .then(products=>{
    const product = products[0];
    //products.destroy();
    //중간테이블의 데이터를 삭제하므로 product가 아닌 product.cartItem
    product.cartItem.destroy();
    console.log('cart deleted!!');
  })
  .then(result=>{
    res.redirect('/cart');
  })
  .catch(err=>console.log(err));

  /*
  const prodId = req.body.productId;
  Product.findByPk(prodId, product=>{
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
  */
}

//주문처리
exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
  .getCart()
  .then(cart=>{
    fetchedCart = cart;
    return cart.getProducts()
  })
  .then(products=>{
    return req.user.createOrder()
      .then(order=> {
        return order.addProducts(products.map(product=>{
          product.orderItem = {quantity: product.cartItem.quantity};
          return product;
        }));
      })
      .catch(err=>console.log(err));
  })
  .then(result=>{
    fetchedCart.setProducts(null);//장바구니삭제
  })
  .then(result=>{
    res.redirect('/orders');
  })
  .catch(err=>console.log(err));
}

//주문목록조회
exports.getOrders = (req, res, next) => {
  req.user
  .getOrders({include: ['products']})
  .then(
    orders => {
      console.log(orders);
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    }
  )
  .catch(err=>console.log(err));
  
}
