const Product=require('../models/product');

exports.getAddProduct= (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

exports.postAddProduct=(req, res, next) => {
  const product =new Product(req.body.title);
  product.save(); //will push it in the array defined in the models 
  res.redirect('/');
};

exports.getProduct= (req, res, next) => {
  // const products = adminData.products; (no need since its already declared here)
  const products =Product.fecthAll(); //gives all products
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};