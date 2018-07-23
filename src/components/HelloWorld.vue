<template>
  <div>
    <el-button @click="show2 = !show2">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">中</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">上</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">下</div>
      </transition>
    </div>
    <div class="date_picker">
      <el-date-picker
        v-model="date"
        @change="timeChange"
        type="daterange"
        size="medium"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['00:00:00', '23:59:59']">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true,
      date: []
    }),
     methods:{
        timeChange(val) {
          console.log(val)
        }
     }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 600px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .date_picker{
    margin-top: 20px;
  }
</style>