<template>
    <div class="container-flu">
        <nav class="navbar navbar-expand-md">
            <router-link to="/index" class="col navbar-brand" href="#">
                <img src="/images/logo.png" alt="">
            </router-link>
            <!--
                        <ul class="col navbar-nav" style="font-family: 'Poppins', sans-serif;">
                            <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">SHOP</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">PAGES</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">BLOG</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
                        </ul>
            -->
            <ul class="col navbar-nav" style="display: flex;justify-content: flex-end;">
                <!--搜索-->
                <li class="nav-item">
                    <!--<button><img src="/images/icons/search.png" alt=""></button>-->
                    <div class="header-search-wrap">
                        <form action="#">
                            <input placeholder="Type and hit enter" type="text" v-model="kw" @keyup.13="search">
                            <button @click.prevent="search"><img src="/images/icons/search.png" alt=""></button>
                        </form>
                    </div>
                </li>
                <!--购物车-->
                <li class="nav-item">
                    <router-link to="/cart" class="nav-link" href="#">
                        <el-badge :value="$store.getters.optCartCount">
                            <img src="images/icons/cart.png" alt=""><span>($250)</span></el-badge>
                    </router-link>
                </li>
                <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "container-flu",

        data: function () {
            return {
                kw: '',
                page: 1
            }
        },
        methods: {
            search() {
                this.$router.push('/shop/' + this.kw + '/' + this.page);
                console.log(this.$router.push('/shop/' + this.kw + '/' + this.page))
            }
        }
    }
</script>

<style scoped>
    form {
        display: inline-block;
    }

    .container-flu button {
        background-color: inherit;
        border: none;
        height: 100%;
    }

    /*********** Navbar ***********/
    .navbar li {
        padding: 18px;
    }

    .navbar li > a {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: #000;
    }

    .header-search-wrap form {
        border: 1px solid #DDDDDD;
    }

    .header-search-wrap input {
        width: 250px;
        height: 40px;
        padding: 5px 15px;
        border: none;
    }
</style>
