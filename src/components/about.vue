<template>
  <div>
    <h1>about</h1>
    <p>{{aboutMsg}}</p>
    <ul id="container">
        <li v-for="(item,i) in imgList" :key="i">
            <img v-lazy="item.url">
        </li>
    </ul>
  </div>   
</template>
<script>
    export default {
        data() {
            return {
                aboutMsg: 'vue-lazyload插件图片懒加载',
                imgList:[
                    {id:0,url:require('../assets/1.jpg')},
                    {id:1,url:require('../assets/3.jpg')},
                    {id:2,url:require('../assets/4.jpg')},
                    {id:3,url:require('../assets/5.jpg')},
                    {id:4,url:require('../assets/6.jpg')},
                    {id:5,url:require('../assets/7.jpg')},
                    {id:6,url:require('../assets/1.jpg')},
                    {id:7,url:require('../assets/3.jpg')},
                    {id:8,url:require('../assets/4.jpg')},
                    {id:9,url:require('../assets/5.jpg')},
                    {id:10,url:require('../assets/6.jpg')},
                    {id:11,url:require('../assets/7.jpg')},
                    {id:12,url:require('../assets/1.jpg')},
                    {id:13,url:require('../assets/3.jpg')},
                    {id:14,url:require('../assets/4.jpg')},
                    {id:15,url:require('../assets/5.jpg')},
                    {id:16,url:require('../assets/6.jpg')},
                    {id:17,url:require('../assets/7.jpg')},
                    {id:18,url:require('../assets/1.jpg')},
                    {id:19,url:require('../assets/3.jpg')},
                    {id:20,url:require('../assets/4.jpg')},
                    {id:21,url:require('../assets/5.jpg')},
                    {id:22,url:require('../assets/6.jpg')},
                    {id:23,url:require('../assets/7.jpg')},
                    {id:24,url:require('../assets/1.jpg')},
                    {id:25,url:require('../assets/3.jpg')},
                    {id:26,url:require('../assets/4.jpg')},
                    {id:27,url:require('../assets/5.jpg')},
                    {id:28,url:require('../assets/6.jpg')},
                    {id:29,url:require('../assets/7.jpg')},
                    {id:30,url:require('../assets/1.jpg')},
                    {id:31,url:require('../assets/3.jpg')},
                    {id:32,url:require('../assets/4.jpg')},
                    {id:33,url:require('../assets/5.jpg')},
                    {id:34,url:require('../assets/6.jpg')},
                    {id:35,url:require('../assets/7.jpg')},
                    {id:36,url:require('../assets/1.jpg')},
                    {id:37,url:require('../assets/3.jpg')},
                    {id:38,url:require('../assets/4.jpg')},
                    {id:39,url:require('../assets/5.jpg')},
                    {id:40,url:require('../assets/6.jpg')},
                    {id:41,url:require('../assets/7.jpg')},
                    {id:42,url:require('../assets/1.jpg')},
                    {id:43,url:require('../assets/3.jpg')},
                    {id:44,url:require('../assets/4.jpg')},
                    {id:45,url:require('../assets/5.jpg')},
                    {id:46,url:require('../assets/6.jpg')},
                    {id:47,url:require('../assets/7.jpg')},
                    {id:48,url:require('../assets/1.jpg')},
                    {id:49,url:require('../assets/3.jpg')},
                    {id:50,url:require('../assets/4.jpg')},
                    {id:51,url:require('../assets/5.jpg')},
                    {id:52,url:require('../assets/6.jpg')},
                    {id:53,url:require('../assets/7.jpg')}
                ],
            }
        }
    }
</script>
<style lang="less">
@width:200px;
@height:120px;
    #container{
        li{
            list-style: none;
            img{
                width: @width;
                height: @height;
                margin-bottom: 20px;
                moz-user-select: -moz-none;
                -moz-user-select: none;
                -o-user-select:none;
                -khtml-user-select:none;
                -webkit-user-select:none;
                -ms-user-select:none;
                user-select:none;
            }
            img[lazy=loading]{
                width: 30px;
                height: 30px;
                margin-top: 50px;
            }
        }
    }
</style>