<template>
    <div id="shop">
        <div class="container">
            <div class="row">
                <div class="product-item col-md-3" v-for="d in result.data" :key="result.data.id">
                    <div class="image">
                        <!--<img src="/images/product/product-1.jpg" alt="">-->
                        <img :src="d.sm" alt="">
                        <div class="img-overlay">
                            <div class="action-bottons">
                                <button>add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="content-left">
                            <!--<h5><a href="#">Tmart Baby Dress</a></h5>-->
                            <h5><a href="#">{{d.title}}</a></h5>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <div class="content-right">
                            <span class="price">$25</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--
                        <div class="row">
                            <ul>
                                <li><input type="text" v-model="page"></li>
                            </ul>
                        </div>
            -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Shop",

        data: function () {
            return {
                result: {
                    data: [{pid: '', title: '', sm: ''}]
                }
            }
        },
        watch: {
            result(val) {
                console.log('ress >>>', val.data)
            }
        },
        props: ['kw', 'page'],
        mounted() {
            this.axios.get(
                'http://babyshop.applinzi.com/shop',
                {params: {kword: this.kw, pno: this.page}}
            ).then(res => {
                this.result = res.data;
                console.log('page >>>', this.page)
                console.log('shop >>>', res.data)
            })
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }

    .product-item .image {
        position: relative;
    }

    .img-overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    .img-overlay:hover {
        opacity: 1;
        background-color: rgba(148, 199, 235, 0.7);
        -webkit-transition: all 500ms ease-in 0s;
        -moz-transition: all 500ms ease-in 0s;
        -ms-transition: all 500ms ease-in 0s;
        -o-transition: all 500ms ease-in 0s;
        transition: all 500ms ease-in 0s;
    }

    .img-overlay:hover .action-bottons {
        -webkit-transition: all 500ms ease-in 0s;
        -moz-transition: all 500ms ease-in 0s;
        -ms-transition: all 500ms ease-in 0s;
        -o-transition: all 500ms ease-in 0s;
        transition: all 500ms ease-in 0s;
        -webkit-transform: translateY(-30px);
        -moz-transform: translateY(-30px);
        -ms-transform: translateY(-30px);
        -o-transform: translateY(-30px);
        transform: translateY(-30px);
    }

    .img-overlay .action-bottons button {
        font-family: "Dosis", sans-serif;
        width: 160px;
        height: 45px;
        font-size: 14px;
        font-weight: 700;
        /*line-height: 23px; */
        background-color: #ffffff;
        color: #323132;
    }
    .img-overlay .action-bottons button:hover {
        background-color: #ff708a;
        /*border-color: #ff708a;*/
        color: #ffffff;
    }

    .content {
        padding: 20px 0;
    }

    .content-left {
        float: left;
    }

    .content-right {
        float: right;
    }

    .price {
        font-size: 24px;
        font-weight: 600;
        color: #FF708A;
    }
</style>