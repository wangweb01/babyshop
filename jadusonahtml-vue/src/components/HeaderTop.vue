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
                    <router-link to="/login-register">Login</router-link>
                </p>
                <p v-else>welcome {{uname}} |
                    <button @click="signout()">注销</button>
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
                uname: ''
            }
        },
        methods: {
            signout() {
                this.axios.get('http://localhost:3003/user/signout')
            }
        },
        mounted() {
            this.axios.get('http://localhost:3003/user/islogin').then(res => {
                if (res.data.ok === 1) {
                    this.islogin = true;
                    this.uname = res.data.uname;
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