<template>  
  <!-- 按钮显隐-->
  <div>
    <!-- Tab标签 -->
    <div>
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="first">
          <div>
            <el-button @click="show2 = !show2">Click Me</el-button>
          <!-- 动画过渡效果 -->
            <div style="display: flex; margin-top: 20px; height: 100px;">
              <transition name="el-zoom-in-center">
                <div v-show="show2" class="transition-box">1</div>
              </transition>

              <transition name="el-zoom-in-top">
                <div v-show="show2" class="transition-box">2</div>
              </transition>

              <transition name="el-zoom-in-bottom">
                <div v-show="show2" class="transition-box">3</div>
              </transition>
            </div>
            <!--轮播 -->
            <div class="lunbo_content">
              <div class="block">
                <span class="demonstration">默认 Hover 指示器触发</span>
                <el-carousel height="250px">
                  <el-carousel-item v-for="item in imgList" :key="item.id">
                    <img :src="item.url" class="lunbo">
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="block">
                <span class="demonstration">Click 指示器触发</span>
                <el-carousel trigger="click" height="250px">
                  <el-carousel-item v-for="item in imgList" :key="item.id">
                    <img :src="item.url" class="lunbo">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <!-- 日期选择 -->
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
            <!--表单验证-->
            <div class="form_rules">
              <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                  <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
              </el-form>
              <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                <el-form-item
                  label="年龄"
                  prop="age"
                  :rules="[
                    { required: true, message: '年龄不能为空'},
                    { type: 'number', message: '年龄必须为数字值'}
                  ]"
                >
                  <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                  <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="second">
          <div>
            <el-steps direction="vertical" :active="3" process-status="success">
              <el-step title="第1天" description="aa"></el-step>
              <el-step title="第2天" description="bb"></el-step>
              <el-step title="第3天" description="cc"></el-step>
              <el-step title="第4天" description="dd"></el-step>
              <el-step title="第5天" description="ee"></el-step>
              <el-step title="第6天" description="ff"></el-step>
            </el-steps>
          </div>
          <h3>for循环添加</h3>
          <div id="for_add">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <label>ID:</label>
                  <el-input v-model="id" placeholder="请输入ID"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  姓名:
                  <el-input v-model="name" placeholder="请输入姓名"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <el-button style="margin-left:-180px;" type="primary" plain @click="add">添加</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="id"
              label="编号"
              width="120"
              align="left">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
              align="left">
            </el-table-column>
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150"
              align="left">
            </el-table-column>
            <el-table-column 
              fixed="right"
              label="操作"
              align="left">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="third">
          <el-button
            type="primary"
            element-loading-text="拼了老命在加载"
            @click="openFullScreen"
            v-loading.fullscreen.lock="fullscreenLoading">
            指令方式
          </el-button>
          <el-button
            type="primary"
            @click="openFullScreen2">
            服务方式
          </el-button>
          <h3>过滤器的使用</h3>
          <div>
            <p>{{filter_msg | filter_msg_format('哈哈','+1') | test_format }}</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="fourth">
          <el-row>
            <el-button type="primary" round @click="lang">浪起来</el-button>
            <el-button type="danger" round @click="stop">停止</el-button>
            <div style="width:500px;margin:20px auto;">{{msg}}</div>
          </el-row>
          <!-- 事件修饰符 -->
          <h4>事件修饰符-阻止冒泡</h4>
          <div @click="outerDiv" style="width:500px;height:300px;background:#B3C0D1;padding:40px;margin:0 auto">
            <div @click="innerDiv" style="width:500px;height:300px;background:#D3DCE6;margin:0 auto">
              <el-button type="primary" plain @click="btn">主要按钮</el-button>
            </div>
          </div>
          <h4>事件修饰符-阻止默认行为</h4>
          <a href="http://www.baidu.com" @click.prevent="linkclick">有问题去百度</a>
          <h4>事件修饰符-阻止自己身上的冒泡，不影响子元素、父元素的冒泡</h4>
          <div @click="outerDiv" style="width:500px;height:300px;background:#B3C0D1;padding:40px;margin:0 auto">
            <div @click.self="innerDiv" style="width:500px;height:300px;background:#D3DCE6;margin:0 auto">
              <el-button type="primary" plain @click="btn">主要按钮</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
  import {formatDate} from '../common/date.js';
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        show2: true,
        date: [],
        tabPosition: 'top',
        msg:"深圳是中国四大一线城市之一，广东省省辖市",
        intervalId:null,
        numberValidateForm: {
          age: ''
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        imgList:[
          {id:0,url:require('../assets/1.jpg')},
          {id:1,url:require('../assets/3.jpg')},
          {id:2,url:require('../assets/4.jpg')},
          {id:3,url:require('../assets/5.jpg')},
          {id:4,url:require('../assets/6.jpg')},
          {id:5,url:require('../assets/7.jpg')}
        ],
        fullscreenLoading: false,
        id:'',
        name:'',
        tableData: [{
          id: '1001',
          date: '2016-05-03',
          name: '库里'
        }, {
          id: '1002',
          date: '2016-06-03',
          name: '詹姆斯'
        }, {
          id: '1003',
          date: '2016-07-03',
          name: '科比'
        }],
        filter_msg:'我就是我,是颜色不一样的烟火',
      };
    },
    methods: {
      lang(){
          if(this.intervalId!=null) return;
          this.intervalId = setInterval( ()=>{
          var start = this.msg.substring(0,1)
          var end = this.msg.substring(1)
          this.msg = end + start;
        },200) 
      },
      stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
      },
      //事件修饰符
      btn(){
        console.log("btn按钮点击事件被触发");
      },
      innerDiv(){
         console.log("innerDiv点击事件被触发");
      },
      outerDiv(){
         console.log("outerDiv点击事件被触发");
      },
      linkclick(){
         console.log("默认跳转行为");
      },
      //改变时间
      timeChange(val) {
          console.log(val)
        },
      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      //表单重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //加载中方式一
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      //加载中方式二
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: '拼了老命在加载',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
      add(){
        if(this.id==''){
          this.$message({
            message: '请输入ID',
            type: 'warning',
            center: true
          });
          return false;
        }
        if(this.name==''){
          this.$message({
            message: '请输入姓名',
            type: 'warning',
            center: true
          });
          return false;
        }
        let car = {id:this.id,name:this.name,date:formatDate(new Date(),"yyyy-MM-dd")};
        this.tableData.push(car);
        this.id = this.name = '';
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.tableData.splice(index,1);
        this.$message({
          message: '删除成功',
          type: 'success',
          center: true
        });
      }
    },
    //过滤器
    filters:{
      filter_msg_format:function(value,arg,arg2){
        return value.replace(/我/g,arg+arg2)
      },
      test_format:function(value){
        return value+'======='
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
  .date_picker,.form_rules{
    margin-top: 20px;
  }
  .form_rules{
    width: 500px;
  }
  /* 轮播 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .lunbo_content{
    width: 50%;
  }
  .lunbo{
    height: 100%;
    width: 100%;
  }
  #for_add{
    width: 1200px;
    margin-bottom: 50px;
  }
  .el-input {
    width: 230px;
  }
</style>