<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
    <!-- router-link 定义点击后导航到哪个路径下
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
     -->
    <h1>666</h1>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="home" name="first"></el-tab-pane>
        <el-tab-pane label="about" name="second"></el-tab-pane>
        <el-tab-pane label="news" name="third"></el-tab-pane>
        <el-tab-pane label="product" name="fourth"></el-tab-pane>
      </el-tabs>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeName: 'first'
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
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
