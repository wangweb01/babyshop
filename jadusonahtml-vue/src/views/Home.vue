<template>
    <div class="home">
        <!--
                <img alt="Vue logo" src="../assets/logo.png">
                <HelloWorld msg="Welcome to Your Vue.js App"/>
        -->

        <HeaderTop></HeaderTop>
        <ContainerFlu></ContainerFlu>
        <router-view></router-view>
        
        <!--<IndexCarousel></IndexCarousel>-->
        <!--<Banner></Banner>-->
    </div>
</template>

<script>
    /*
        // @ is an alias to /src
        import HelloWorld from '@/components/HelloWorld.vue'

        export default {
            name: 'home',
            components: {
                HelloWorld
            }
        }
    */
    import HeaderTop from '../components/HeaderTop'
    import ContainerFlu from '../components/ContainerFlu'

    export default {
        components: {
            HeaderTop,
            ContainerFlu
        }
    }
</script>
