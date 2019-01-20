SET NAMES UTF8;
DROP DATABASE IF EXISTS bs;
CREATE DATABASE bs CHARSET = UTF8;
USE bs;


/****** 商品同款家族 ******/
CREATE TABLE bs_product_family
(
  family_id INT PRIMARY KEY AUTO_INCREMENT,
  fname     VARCHAR(32)
);

/****** 首页轮播广告商品 ******/
CREATE TABLE bs_index_carousel
(
  cid   INT PRIMARY KEY AUTO_INCREMENT,
  /* 图片路径 */
  img   VARCHAR(128),
  /* 图片描述 */
  title VARCHAR(64),
  /* 图片链接 */
  href  VARCHAR(128)
);

/****** 首页广告商品 ******/
CREATE TABLE bs_index_banner
(
  --    pid INT PRIMARY KEY AUTO_INCREMENT,
  img   VARCHAR(128),
  #   图片路径
  title VARCHAR(64),
  #   图片描述
  href  VARCHAR(128) # 图片链接
);

/****** 单个商品详情页面 ******/
CREATE TABLE bs_product
(
  #   商品编号
  pid       INT PRIMARY KEY AUTO_INCREMENT,
  #   所属同款商品家族编号
  family_id INT,
  #   主标题
  title     VARCHAR(64),
  #   商品详细说明
  details   VARCHAR(512),
  #   规格/颜色
  spec      VARCHAR(64),
  pic       VARCHAR(128),
  #   价格
  price     DECIMAL(10,2),
  FOREIGN KEY (family_id) REFERENCES bs_product_family (family_id)
);

/****** 商品图片 ******/
CREATE TABLE bs_product_pic
(
  #   图片编号
  picid      INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  #   小图片路径
  sm         VARCHAR(128),
  #   中图片路径
  md         VARCHAR(128),
  #   大图片路径
  lg         VARCHAR(128)
);

/****** 用户信息 ******/
CREATE TABLE bs_user
(
  uid       INT PRIMARY KEY AUTO_INCREMENT,
  uname     VARCHAR(32),
  upwd      VARCHAR(32),
  email     VARCHAR(64),
  phone     VARCHAR(16),
  # 头像图片路径
  avatar    VARCHAR(128),
  # 用户名,如: 小明
  user_name VARCHAR(32),
  # 性别 0-女 1-男
  gender    INT
);


/****** 商品同款家族 data ******/
INSERT INTO bs_product_family
VALUES
  (100, '第一款商品');

/****** 首页轮播广告商品 data ******/
INSERT INTO bs_index_carousel
VALUES
(NULL, './images/hero/hero-1.jpg', '轮播广告商品1', 'single_product.html?pid=1'),
(NULL, './images/hero/hero-2.jpg', '轮播广告商品2', 'single_product.html?pid=2');

/****** 首页广告商品 data ******/
INSERT INTO bs_index_banner
VALUES
  ('images/banner/banner-1.jpg', '首页广告商品1', 'single_product.html?pid=1'),
  ('images/banner/banner-2.jpg', '首页广告商品2', 'single_product.html?pid=2'),
  ('images/banner/banner-3.jpg', '首页广告商品3', 'single_product.html?pid=3');

/****** 单个商品详情页面 data ******/
INSERT INTO bs_product
VALUES
(1, 100, 'Tmart Baby Dress',
 '1 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-zoom-1.jpg', 25),
(2, 100, 'Jumpsuit Outfits',
 '2 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'yellow', 'images/product/product-zoom-2.jpg', 09),
(3, 100, 'Smart Shirt',
 '3 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'blue', 'images/product/product-zoom-3.jpg', 18),
(4, 100, 'Kids Shoe',
 '4 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-4.jpg', 15),
(5, 100, 'Bowknot Bodysuit',
 '5 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'blue', 'images/product/product-5.jpg', 12),
(6, 100, 'Striped T-Shirt',
 '6 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-6.jpg', 12),
(7, 100, 'Kislen Jak Tops',
 '4 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-7.jpg', 29),
(8, 100, 'Lattic Shirt',
 '4 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-8.jpg', 08),
(9, 100, 'Tmart Baby Dress',
 '1 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-zoom-1.jpg', 25),
(10, 100, 'Jumpsuit Outfits',
 '2 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'yellow', 'images/product/product-zoom-2.jpg', 09),
(11, 100, 'Smart Shirt',
 '3 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'blue', 'images/product/product-zoom-3.jpg', 18),
(12, 100, 'Kids Shoe',
 '4 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-4.jpg', 15),
(13, 100, 'Bowknot Bodysuit',
 '5 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'blue', 'images/product/product-5.jpg', 12),
(14, 100, 'Striped T-Shirt',
 '6 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-6.jpg', 12),
(15, 100, 'Kislen Jak Tops',
 '4 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-7.jpg', 29),
(16, 100, 'Lattic Shirt',
 '4 enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform',
 'red', 'images/product/product-8.jpg', 08);


/****** 商品图片 data ******/
INSERT INTO bs_product_pic
VALUES
(NULL, 1, './images/product/product-1.jpg', './images/product/product-big-1.jpg',
 './images/product/product-zoom-1.jpg'),
(NULL, 1, './images/product/product-2.jpg', './images/product/product-big-2.jpg',
 './images/product/product-zoom-2.jpg'),
(NULL, 1, './images/product/product-3.jpg', './images/product/product-big-3.jpg',
 './images/product/product-zoom-3.jpg'),
(NULL, 1, './images/product/product-4.jpg', './images/product/product-big-4.jpg',
 './images/product/product-zoom-4.jpg'),
(NULL, 1, './images/product/product-5.jpg', './images/product/product-big-5.jpg',
 './images/product/product-zoom-5.jpg'),
(NULL, 1, './images/product/product-1.jpg', './images/product/product-big-1.jpg',
 './images/product/product-zoom-1.jpg'),
(NULL, 1, './images/product/product-2.jpg', './images/product/product-big-2.jpg',
 './images/product/product-zoom-2.jpg'),
(NULL, 1, './images/product/product-3.jpg', './images/product/product-big-3.jpg',
 './images/product/product-zoom-3.jpg'),
(NULL, 1, './images/product/product-4.jpg', './images/product/product-big-4.jpg',
 './images/product/product-zoom-4.jpg'),
(NULL, 1, './images/product/product-5.jpg', './images/product/product-big-5.jpg',
 './images/product/product-zoom-5.jpg'),
(NULL, 2, './images/product/product-2.jpg', './images/product/product-big-2.jpg',
 './images/product/product-zoom-2.jpg'),
(NULL, 3, './images/product/product-3.jpg', './images/product/product-big-3.jpg',
 './images/product/product-zoom-3.jpg'),
(NULL, 4, './images/product/product-4.jpg', './images/product/product-big-4.jpg',
 './images/product/product-zoom-4.jpg'),
(NULL, 5, './images/product/product-5.jpg', './images/product/product-big-5.jpg',
 './images/product/product-zoom-5.jpg'),
(NULL, 6, './images/product/product-6.jpg', './images/product/product-big-6.jpg',
 './images/product/product-zoom-6.jpg'),
(NULL, 7, './images/product/product-7.jpg', './images/product/product-big-7.jpg',
 './images/product/product-zoom-7.jpg'),
(NULL, 8, './images/product/product-8.jpg', './images/product/product-big-8.jpg',
 './images/product/product-zoom-8.jpg');

/****** 用户信息 value ******/
INSERT INTO bs_user
VALUES
(NULL, 'WangY', '123456', '123456@qq.com', '15312345678', 'img/1.jpg', 'WangY', '1'),
(NULL, 'xiaom', '654321', '654321@qq.com', '15387654321', 'img/2.jpg', 'xiaom', '0');










