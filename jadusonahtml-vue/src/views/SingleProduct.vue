<template>
    <div class="single-product">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <a href="#">
                        <!--<img class="img-fluid" src="/images/product/product-zoom-1.jpg"></a>-->
                        <img class="img-fluid" :src="res.product.pic"></a>
                    <div class="thumbnail">
                        <button type="button" class="slick-prev">
                            <span class="carousel-control-prev-icon"></span></button>
                        <ul class="thumb row list-unstyled">
                            <!--<li><a href="#"><img class="img-fluid" src="/images/product/product-zoom-1.jpg"-->
                            <li><a href="#"><img class="img-fluid" :src="res.pics[0].lg"
                                                 data-md="./images/product/product-zoom-2.jpg"
                                                 data-lg="./images/product/product-zoom-3.jpg"></a></li>
                            <!--<li><a href="#"><img class="img-fluid" src="/images/product/product-zoom-2.jpg"-->
                            <li><a href="#"><img class="img-fluid" :src="res.pics[1].lg"
                                                 alt=""></a></li>
                            <!--<li><a href="#"><img class="img-fluid" src="/images/product/product-zoom-3.jpg"-->
                            <li><a href="#"><img class="img-fluid" :src="res.pics[2].lg"
                                                 alt=""></a></li>
                            <!--<li><a href="#"><img class="img-fluid" src="/images/product/product-zoom-4.jpg"-->
                            <li><a href="#"><img class="img-fluid" :src="res.pics[3].lg"
                                                 alt=""></a></li>
                        </ul>
                        <button type="button" class="slick-next">
                            <span class="carousel-control-next-icon"></span></button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="head">
                        <h3 class="title float-left">Tmart Baby Dress</h3>
                        <span class="price float-right">$25</span></div>
                    <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui
                        ratione
                        voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora inform</p>
                    <div class="row">
                        <div class="col quantity">
                            <span>Quantity:</span>
                            <div class="pro-qty">
                                <span class="minus">-</span>
                                <input type="text" value="1">
                                <span class="plus">+</span></div>
                        </div>
                        <div class="col color d-inline-block">
                            <span>Color:</span>
                            <!--<div class="d-inline-block">-->
                            <a v-for="s in res.specs" :style="'background-color: '+s.spec" href="#"></a>
                            <!--<a style="background-color: #FF502E"></a>-->
                            <!--<a style="background-color: #FF502E"></a>-->
                            <!--</div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "single-product",

        props: ['pid'],
        data() {
            return {
                res: {
                    pics: [{lg: ''}, {lg: ''}, {lg: ''}, {lg: ''}],
                    product: {},
                    specs: [{spec: ''}, {spec: ''}, {spec: ''}]
                }
            }
        },
        mounted() {
            /*
                        new Promise(function () {
                            return new Promise(function (open) {
                                axios.get('http://localhost:3003/single-product', {
                                    params: {pid: 1}
                                });
                                open();
                            });

                        }).then(function (result) {
                            console.log(result);
                        })
            */

            (async () => {
                var result = await this.axios.get('http://localhost:3003/single-product', {
                    params: {pid: this.pid}
                });
                this.res = result.data;
                // console.log('this.res >>>', this.res)
            })();
        }
    }
</script>

<style scoped>
    .single-product .thumbnail {
        position: relative;
    }

    .single-product .thumbnail button {
        position: absolute;
        border: none;
    }

    .single-product .thumbnail .slick-prev {
        left: 0;
        top: 50%;
        margin-top: -15px;
    }

    .single-product .thumbnail .slick-next {
        right: 0;
        top: 50%;
        margin-top: -15px;
    }

    .single-product ul.thumb {
        margin-top: 20px;
    }

    .single-product ul.thumb li {
        width: 126px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .single-product .head {
        overflow: hidden;
        margin-bottom: 30px;
    }

    .single-product .head .title {
        font-size: 24px;
        font-weight: 600;
    }

    .single-product .head .price {
        font-size: 24px;
        font-weight: 600;
        color: #ff708a;
        font-family: "Dosis", sans-serif;
    }

    .single-product p {
        font-size: 16px;
        line-height: 28px;
    }

    .single-product .pro-qty {
        position: relative;
        width: 100px;
        padding: 0 30px;
        display: inline-block;
        border: 1px solid #CCCCCC;
        border-radius: 50px;
    }

    .single-product .pro-qty .minus, .single-product .pro-qty .plus {
        position: absolute;
    }

    .single-product .pro-qty .minus {
        width: 30px;
        height: 100%;
        text-align: center;
        top: 0;
        left: 0;
    }

    .single-product .pro-qty .plus {
        width: 30px;
        height: 100%;
        text-align: center;
        top: 0;
        right: 0;
    }

    .single-product .pro-qty input {
        width: 100%;
        border: none;
        text-align: center;
    }

    .single-product .color a {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        border: none;
        cursor: pointer;
    }
</style>
