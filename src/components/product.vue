<template>
  <div>
    <h1>product</h1>
    <el-row>
        <el-button type="info" plain @click="show(888)">父组件方法(父组件)</el-button>
    </el-row>
    <childParams v-bind:params="msg" @fun="show" ref="son"></childParams>
    <el-row style="margin-top:10px"> 
      <el-button type="danger" plain @click="showSonFun">子组件方法(父组件)</el-button>
    </el-row>
    <router-link to="/product/secondChild">
        <el-row style="margin-top:10px">
            <el-button type="info" plain>路由嵌套</el-button>
        </el-row>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
   import childParams from '@/components/chlidComponents/childParams'
    export default {
        data () {
            return {
                msg: '我是product组件(父组件的值)'
            }
        },
        components:{
            childParams:childParams
        },
        methods:{
            show(data){
                console.log('这是父组件的方法!'+data);
            },
            showSonFun(){
                // console.log(this.$refs);
                this.$refs.son.sonFun();
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