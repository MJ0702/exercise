<template>
  <div>
    <h1>product</h1>
    <p>{{productMsg}}</p>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                productMsg: '我是product组件'
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