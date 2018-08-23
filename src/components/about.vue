<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: '我是about组件'
            }
        }
    }
</script>
<style lang="less">
@width:200px;
@height:100px;
    // p{
    //     width:@width;
    //     height:@height;
    // }
</style>