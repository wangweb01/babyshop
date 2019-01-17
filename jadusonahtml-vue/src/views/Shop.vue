<template>
    <div id="shop">
        <div class="container">
            <div class="row">
                <div v-for="s in res.shop" class="col-md-3">
                    <!--<img src="/images/product/product-1.jpg" alt="">-->
                    <img :src="s.sm" alt="">
                    <div class="content">
                        <div class="content-left">
                            <!--<h5><a href="#">Tmart Baby Dress</a></h5>-->
                            <h5><a href="#">{{s.title}}</a></h5>
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
                <!--
                                <div class="col-md-3">
                                    <img src="/images/product/product-2.jpg" alt="">
                                </div>
                                <div class="col-md-3">
                                    <img src="/images/product/product-3.jpg" alt="">
                                </div>
                                <div class="col-md-3">
                                    <img src="/images/product/product-4.jpg" alt="">
                                </div>
                -->
                <!--TODO-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Shop",

        data: function () {
            return {
                res: {
                    shop: [{sm: '', title: ''}]
                }
            }
        },
        props: ['kw'],
        mounted() {
            this.axios.get(
                'http://localhost:3003/shop',
                {params: {kwords: this.kw, pno: 0}}
            ).then(res => {
                this.res = res.data;
            })
        },
        /*
                watch: {
                    res(val) {
                        console.log('res >>>', val);
                    }
                }
        */
    }
</script>

<style scoped>
    img {
        width: 100%;
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