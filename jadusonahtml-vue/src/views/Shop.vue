<template>
    <div id="shop">
        <div class="container">
            <div class="row">
                <div class="col-md-3" v-for="d in result.data" :key="result.data.id">
                    <!--<img src="/images/product/product-1.jpg" alt="">-->
                    <img :src="d.sm" alt="">
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
            <div class="row">
                <ul>
                    <li><input type="text" v-model="page"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Shop",

        data: function () {
            return {
                // page: '',
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
                'http://localhost:3003/shop',
                {params: {kword: this.kw, pno: this.page}}
            ).then(res => {
                this.result = res.data;
                console.log('page >>>',this.page)
                console.log('shop >>>', res.data)
            })
        }
/*
        methods:{
            subm(){

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