<template>
    <!-- Banner -->
    <div class="banner margin-t-40">
        <div class="container-flu">
            <div class="row">
                <div class="col-md-4">
                    <div class="card-img">
                        <div class="content">
                            <!--<h1>New Arrival <br>Baby's Shoe <br>GET 30% OFF</h1>-->
                            <h1 v-html="banner[0].title"></h1>
                            <!--<a href="#" data-hover="SHOP NOW">SHOP NOW</a>-->
                            <router-link :to="banner[0].href|getPid" data-hover="SHOP NOW">SHOP NOW</router-link>
                        </div>
                        <!--<a href="#"><img class="img-fluid" src="/images/banner/banner-1.jpg" alt=""></a>-->
                        <a href="#"><img class="img-fluid" :src="banner[0].img" alt=""></a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-img" style="position: relative;">
                        <div class="content-c">
                            <!--<h1>New Toy’s for your Baby</h1>-->
                            <h1 v-html="banner[1].title"></h1>
                        </div>
                        <!--<a href="#"><img class="img-fluid" src="/images/banner/banner-2.jpg" alt=""></a>-->
                        <a href="#"><img class="img-fluid" :src="banner[1].img" alt=""></a>
                        <span class="banner-offer">25% off</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-img">
                        <div class="content">
                            <h1 v-html="banner[2].title"></h1>
                            <router-link :to="banner[2].href|getPid" data-hover="SHOP NOW">SHOP NOW</router-link>
                        </div>
                        <!--<a href="#"><img class="img-fluid" src="/images/banner/banner-3.jpg" alt=""></a>-->
                        <a href="#"><img class="img-fluid" :src="banner[2].img" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    Vue.filter("getPid", function (val) {
        var pid = val.split("=")[1];
        return "/single-product/" + pid;
    });

    export default {
        name: "banner",

        props: ['banner'],
        // data() {
        //     return {
        //         banner: [{img: '', href: ''}, {img: '', href: ''}, {img: '', href: ''}]
        //     }
        //
        //
        // },
/*
        watch: {
            banner(val) {
                console.log('banner >>>', val)
            }
        }
*/
    }
</script>

<style scoped>
    a {
        font-weight: 700;
    }

    .banner .card-img {
        overflow: hidden;
    }

    .banner img {
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -ms-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    .banner img:hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }

    .banner .content {
        position: absolute;
        z-index: 9;
        top: 25%;
        left: 5%;
    }

    .banner .content h1 {
        font-size: 36px;
        line-height: 44px;
        font-weight: bold;
    }

    .banner .content a {
        display: inline-block;
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #000;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -ms-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    .banner .content a:before {
        position: absolute;
        content: attr(data-hover);
        color: #FF708A;
        border-bottom: 1px solid #FF708A;
        white-space: nowrap;
        overflow: hidden;
        width: 0;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -ms-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    .banner .content a:hover:before {
        width: 100%;
    }

    .banner .content-c {
        position: absolute;
        z-index: 9;
        padding: 40px 50px;
        max-width: 205px;
        background-color: #FF708A;
    }

    .banner .content-c h1 {
        color: #FFF;
        font-size: 36px;
        line-height: 44px;
        font-weight: 700;
    }

    .banner .banner-offer {
        position: absolute;
        right: -40px;
        top: -50px;
        color: #ff708a;
        background-color: #E6F5FF;
        font-size: 36px;
        font-weight: 700;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        padding: 70px 50px;
        font-family: "Dosis", sans-serif;
    }
</style>
