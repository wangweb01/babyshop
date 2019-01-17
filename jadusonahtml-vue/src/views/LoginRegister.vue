<template>
    <div id="login-register">
        <nav class="navbar">
            <div class="container">
                <router-link to="/index">Home</router-link>
            </div>
        </nav>
        <div class="card-plain content-center">
            <form>
                <div class="header">
                    <div class="logo-container"><img src="/images/logo1.svg" alt=""></div>
                    <h3>Log in</h3>
                </div>
                <div class="input-group">
                    <input type="text" name="uname" value="wangy" class="form-control" placeholder="Enter User Name">
                    <span class="input-group-addon"><i class="zmdi zmdi-account-circle"></i></span>
                </div>
                <div class="input-group">
                    <input type="password" name="upwd" value="123456" class="form-control" placeholder="Password">
                    <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                </div>
                <div>
                    <input type="button" value="SIGN IN" class="btn btn-primary btn-lg btn-round btn-block"
                           @click="signin()">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login-register",

        data: function () {
            return {
                uname: 'WangY',
                upwd: '123456'
            }
        },
        methods: {
            signin() {
                this.axios.post(
                    'http://localhost:3003/user/signin',
                    Qs.stringify({uname: this.uname, upwd: this.upwd})
                ).then(res => {
                    if (res.data.ok == 1) {
                        console.log('res.data >>>',res.data)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    /*
        body {
            background-color: #30373E;
        }
    */
    /*
        .ab:before {
            background-color: rgba(0,0,0,0.4);
        }
    */
    input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #FFF;
    }

    input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #FFF;
    }

    input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #FFF;
    }

    input::-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #FFF;
    }

    #login-register {
        position: absolute;
        background-image: url('../../public/images/login.jpg');
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        background-color: #30373E;
        color: #FFF;
    }

    .card-plain {
        width: 320px;
        max-width: 320px;
        margin: 0 auto;
        text-align: center;
        /*display: flex;*/
    }

    .form-control {
        background-color: transparent;
        color: #FFF;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        border-right: none;
        padding: 14px 18px;
        font-size: .8571em;
        line-height: normal;
    }

    .form-control:focus {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    .input-group-addon {
        padding: 14px 18px 14px 0;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-left: none;
        border-radius: 30px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .input-group {
        /*width: 100%;*/
        /*flex: 1 1 auto;*/
        margin-bottom: 10px;
    }

    .card-plain .header {
        margin-bottom: 20px;
    }

    .card-plain .logo-container {
        margin-bottom: 20px;
    }

    .content-center {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .logo-container {
        width: 65px;
        margin: 0 auto;
    }

    .btn.btn-primary {
        background-color: #6572B8;
        border-color: #6572B8;
    }

    .btn-round {
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        border-radius: 30px;
    }
</style>