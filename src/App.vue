<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- router-link 定义点击后导航到哪个路径下
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
     -->
      <nav>
        <el-row>
          <el-col :span="4"><div class="grid-content bg-purple">MJ'Home</div></el-col>
          <el-col :span="10"><div class="grid-content bg-purple-light">8888</div></el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
            <el-menu
             :default-active="this.$route.path" 
             router mode="horizontal"
              class="el-menu-vertical-demo"
             >
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                  {{ item.navItem }}
              </el-menu-item>
            </el-menu>
            </div>
          </el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
     </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navList:[
            {name:'/HelloWorld',navItem:'首页'},
            {name:'/about',navItem:'关于'},
            {name:'/news',navItem:'新闻'},
            {name:'/product',navItem:'产品'},
        ]
    };
  },
  methods: {
  }
}
</script>

<style lang="less">
body{
  margin:0px;
  padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  nav {
    min-height: 61px;
    margin-bottom: 0;
    position: fixed;
    z-index: 1000;
    width: 100%;
    background-color: #FFF;
    color:#000;
    position:fixed;
    top:0;
    box-shadow:0 1px 1px rgba(0,0,0,.08);
  }
  .grid-content {
    height:61px;
    line-height: 61px;
  }
}
</style>
