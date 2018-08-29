<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- router-link 定义点击后导航到哪个路径下
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
     -->
      <nav>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple">MJ'Home</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
            <el-menu
             :default-active="this.$router.path" 
             router mode="horizontal"
              @click="handleClick"
              background-color="#000"
              text-color="#fff"
              active-text-color="#ffd04b"
             >
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                  {{ item.navItem }}
              </el-menu-item>
            </el-menu>
            </div>
          </el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
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
      activeName: 'first',
      navList:[
            {name:'/HelloWorld',navItem:'HelloWorld'},
            {name:'/about',navItem:'about'},
            {name:'/news',navItem:'news'},
            {name:'/product',navItem:'product'},
        ]
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
      let path = this.activeName;
      // console.log(path);
      // 根据当前的选项卡的选择指向相应的页面
      if (this.activeName === 'first') {
          path = '/HelloWorld';
      }else if(this.activeName === 'second'){
          path = '/about';
      }else if(this.activeName === 'third'){
          path = '/news';
      }else if(this.activeName === 'fourth'){
          path = '/product';
      } 
      this.$router.push({path: path});
    },
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
    min-height: 68px;
    margin-bottom: 0;
    position: fixed;
    z-index: 1000;
    width: 100%;
    background-color: #303848;
    color:#FFF;
  }
  // nav.navbar.nav-bg {
  //   transition: all linear .8s;
  //   background-color: #303848;
  // }
}
</style>
