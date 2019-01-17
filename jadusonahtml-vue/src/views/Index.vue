<template>
    <div>
        <!--<p>{{res.carousel[0].img}}</p>-->
        <!--<input type="text" v-model="res.carousel[0].img">-->
        <!--<IndexCarousel :carousel="res.carousel[0].img"></IndexCarousel>-->
        <IndexCarousel :carousel="res.carousel"></IndexCarousel>
        <Banner :banner="res.banner"></Banner>
    </div>
</template>

<script>
    import IndexCarousel from './IndexCarousel';
    import Banner from './Banner';

    export default {
        name: "Index",

        components: {
            IndexCarousel,
            Banner
        },
        data() {
            return {
                res: {
                    // carousel: [{img:"123"}, {}],
                    carousel: [{}, {}],
                    banner: [{img: '', href: ''}, {img: '', href: ''}, {img: '', href: ''}]
                }
            }
        },
        mounted() {
            (async () => {
                var res = await this.axios.get('http://localhost:3003/index');
                this.res = res.data;
                // Vue.set(this.res, 'carousel', res.data.carousel);
                // console.log('res.data >>>',res.data.carousel)
                // console.log('this.res >>>', this.res)
            })();
        }
    }
</script>

<style scoped>

</style>