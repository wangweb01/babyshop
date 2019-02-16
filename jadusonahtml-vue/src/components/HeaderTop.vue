<template>
    <div class="header-top">
        <div class="container-flu row" style="align-items: center;">
            <!--<div class="row" style="align-items: center;">-->
            <div class="col">
                <p>Welcome to Jadusona</p>
                <p>Hotline: <a href="#">0123 456 789</a></p>
            </div>
            <div class="col" style="display: flex;justify-content: center;">ENG</div>
            <div class="col" style="display: flex;justify-content: flex-end;">
                <p>My Account</p>
                <p v-if="!islogin">
                    <!--<router-link to="/login">Login</router-link>-->
                    <a href="#" @click.prevent="toSignin">Signin</a>
                </p>
                <p v-else>welcome {{name}}
                    <a href="#" @click="signout()"> | 注销</a>
                </p>
            </div>
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-top",

        data: function () {
            return {
                islogin: false,
                name: ''
            }
        },
        methods: {
            toSignin() {
                var path = this.$route.path;
                this.$router.push("/login/" + encodeURIComponent(path.slice(1)));
            },
            signout() {
                this.axios.get('http://babyshop.applinzi.com/user/signout').then(res => {
                    if (res.data.ok == 2) {
                        this.islogin = false;
                    }
                })
            }
        },
        mounted() {
            this.axios.get('http://babyshop.applinzi.com/user/issignin').then(res => {
                if (res.data.ok == 1) {
                    this.islogin = true;
                    this.name = res.data.name;
                }
            })
        }
    }
</script>

<style scoped>
    .header-top {
        background-color: #94C7EB;
        line-height: 45px;
    }
</style>