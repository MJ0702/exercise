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
             :default-active="activeTab" 
             router mode="horizontal"
              class="el-menu-vertical-demo"
             >
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                  {{ item.navItem }}
              </el-menu-item>
            </el-menu>
            </div>
          </el-col>
          <el-col :span="4" style="text-align:left">
            <div class="grid-content bg-purple-light">
              <a class="git" href="https://github.com/MJ0702" target="_blank" title="访问我的GitHub">
                <i class="git_icon"></i>
              </a>
            </div>
          </el-col>
        </el-row>
     </nav>
     <transition name="slide-fade" mode="out-in">
       <router-view></router-view>
     </transition>
  </div>
</template>

<script>
export default {
  created() {
    let path = this.$route.path;
    if(path == '/product/secondChild'){
      this.activeTab = '/product'
    }else{
      this.activeTab = path;
    }
    // console.log(path);
  },
  name: 'App',
  data() {
    return {
      activeTab:"/HelloWorld",
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
    .el-row{
          width: 1200px;
          margin: 0 auto;
    }
  }
  .grid-content {
    height:61px;
    line-height: 61px;
  }
  .el-menu--horizontal>.el-menu-item{
    height:61px;
  }
  .slide-fade-enter-active {
      transition: all .3s ease;
  }
  .slide-fade-leave-active {
      transition: all .83 cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
      // transform: translateX(10px);
      opacity: 0;
  }
  .git{
    display:inline-block;
    text-decoration:none;
    color:#909399;
    .git_icon{
      display:inline-block;
      background-image:url(assets/GitHub.png);
      width:24px;
      height:24px;
      vertical-align:-6px;
      margin-right:3px;
    }
  }
}
</style>
