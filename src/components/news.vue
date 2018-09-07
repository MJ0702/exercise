<template>
  <div>
    <h1>news</h1>
    <p>{{newsMsg}}</p>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                newsMsg: '我是news组件'
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