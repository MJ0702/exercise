<template>
  <div>
    <div>接受父组件的值</div>
    <p>{{params}}</p>
    <div>接受父组件的方法</div>
    <div>
    <el-row>
        <el-button type="primary" plain @click="child_show">父组件方法(子组件)</el-button>
    </el-row>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        props:['params'],
        methods:{
            child_show(){
                this.$emit('fun','666');
            },
            sonFun(){
                console.log('这是子组件的方法！');
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