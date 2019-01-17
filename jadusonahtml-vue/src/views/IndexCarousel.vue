<template>
    <!-- Header carousel -->
    <div id="index-carousel" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
            <li data-target="#index-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#index-carousel" data-slide-to="1"></li>
        </ul>
        <div class="carousel-inner">
            <!--
                        <div class="carousel-content">
                            <h1>Get 35% off <br>Latest Baby Product</h1>
                            <a href="#">SHOP NOW</a>
                        </div>
            -->
            <!--
                        <div class="carousel-item active" v-for="item in ress " :key="item.id">
                            <img :src="item.img">
                        </div>
            -->
            <div class="carousel-item active">
                <img :src="carousel[0].img">
            </div>
            <div class="carousel-item">
                <img :src="carousel[1].img">
            </div>
            <a class="carousel-control-prev" href="#index-carousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#index-carousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index-carousel",

        props: ['carousel']

        /*
                data() {
                    return {
                        res: {
                            carousel: [{}, {}],
                            banner: [{}, {}, {}]
                        }
                    }
                },
                mounted() {
                    (async () => {
                        var res = await axios.get('http://localhost:3003/index');
                        // console.log('res.data >>>', res.data);
                        this.res = res.data;
                    })();
                    // console.log('this.res >>>', this.res)
                }
        */

    }
    /*
        new Vue({
            el: '#app',
            data: {
                res: {}
            },
            mounted() {
                /!*
                            (async () => {
                                await axios.get('http://localhost:3003/index').then(function (res) {
                                    console.log('>>>', res.data)
                                })
                                console.log('this >>>', this);
                            })();
                *!/
                (async () => {
                    var res = await axios.get('http://localhost:3003/index');
                    this.res = res.data;
                })();

                // console.log('>>> ', ress)
            }
        });
    */
    // console.log(vm)

</script>

<style scoped>
    /*********** Header carousel ***********/
    a {
        font-weight: 700;
    }

    div.carousel-inner {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.carousel-inner div.carousel-content {
        position: absolute;
        text-align: center;
        background: #94C7EB73;
        padding: 77px 140px 87px;
        z-index: 9;
    }

    div.carousel-inner div.carousel-content h1 {
        font-size: 60px;
        line-height: 66px;
        margin-bottom: 26px;
        font-weight: bold;
    }

    div.carousel-inner div.carousel-content a {
        font-size: 18px;
        border-radius: 50px;
        background-color: #94C7EB;
        padding: 13px 30px;
        box-shadow: 0 2px 1px #000;
    }

    div.carousel-inner div.carousel-content a:hover {
        text-decoration: none;
        background-color: #FF708A;
        color: #FFF;
    }

</style>
