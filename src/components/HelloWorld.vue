<template>  
  <!-- 按钮显隐-->
  <div>
    <!-- Tab标签 -->
    <div style="margin-top:61px;padding:10px;">
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
                    <a :href="item.href">
                      <img :src="item.url" class="lunbo">
                    </a>
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
                <el-form-item label="手机号码" prop="phone">
                  <el-input v-model.number="ruleForm2.phone" ></el-input>
                </el-form-item>
                <el-form-item label="证件号码" prop="card">
                  <el-input v-model="ruleForm2.card" ></el-input>
                </el-form-item>
                <el-form-item label="所在地区" prop="address">
                  <el-cascader
                    size="large"
                    style="width: 100%"
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleCityChange">
                  </el-cascader>
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
            <h1>照片墙</h1>
            <div>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
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
                  <el-input v-model="name" placeholder="请输入姓名" @keyup.native.13="add"></el-input>
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
                <el-button type="text" size="small" @click="confirm_alert(scope.$index, scope.row)">删除</el-button>
                <!-- <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
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
            <p>{{filter_msg | filter_msg_format('**','+1') | test_format }}</p>
          </div>
          <div class="analyzeSystem">
            <div :class="className" :style="{height:height,width:width}" ref="myEchart"></div>
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
  import {isvalidPhone} from '../common/common.js';
  import {isIDCard} from '../common/common.js'
  import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'  //中国省市区级联动
  ////Echart图表
    //----全部引入
    //import echarts from "echarts"; 
  let echarts = require('echarts/lib/echarts')
    //----按需引入
    // 引入柱状图组件
    require('echarts/lib/chart/pie')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
  //provinceAndCityData是省市二级联动数据（不带“全部”选项）
  //regionData是省市区三级联动数据（不带“全部”选项）
  //provinceAndCityDataPlus是省市区三级联动数据（带“全部”选项）
  //regionDataPlus是省市区三级联动数据（带“全部”选项）
  //"全部"选项绑定的value是空字符串""
  //CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
  //TextToCode是个大对象，属性是汉字，属性值是区域码 用法例如：TextToCode['北京市'].code输出110000,TextToCode['北京市']['市辖区'].code输出110100,TextToCode['北京市']['市辖区']['朝阳区'].code输出110105
  export default {
    props: {
      className: {
        type: String,
        default: "mj_echarts"
      },
      width: {
        type: String,
        default: "800px"
      },
      height: {
        type: String,
        default: "600px"
      }
    },
    data() {
      //年龄验证
      const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空！'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值！'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁！'));
            } else if(value > 70){
              callback(new Error('年龄太大了！'));
            }else {
              callback();
            }
          }
        }, 1000);
      };
      //密码验证
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码！'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      //验证两次输入密码是否相同
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码！'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      //验证手机号
      const validPhone=(rule, value,callback)=>{
        if (!value){
          callback(new Error('请输入手机号码！'))
        } else if (!isvalidPhone(value)){
          callback(new Error('您输入的手机号码或格式错误！'))
        } else {
          callback();
        }
      };
      //验证身份证
      const validIDCard=(rule, value,callback)=>{
        if (!value){
          callback(new Error('请输入证件号码！'))
        } else if (!isIDCard(value)){
          callback(new Error('您输入的身份证号码格式有误！'))
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
          age: '',
          phone:'',
          card:'',
          address:''
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
          ],
          phone:[
            { validator: validPhone, trigger: 'blur' }
          ],
          card:[
            { validator: validIDCard, trigger: 'blur' }
          ],
          address:[
            { required: true, message: '请选择所在地区', trigger: 'blur' }
          ]
        },
        imgList:[
          {id:0,url:require('../assets/1.jpg'),href:"/#/product"},
          {id:1,url:require('../assets/3.jpg'),href:"/#/news"},
          {id:2,url:require('../assets/4.jpg'),href:"/#/about"},
          {id:3,url:require('../assets/5.jpg'),href:"/#/product"},
          {id:4,url:require('../assets/6.jpg'),href:"/#/news"},
          {id:5,url:require('../assets/7.jpg'),href:"/#/about"}
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
        //照片墙
        dialogImageUrl: '',
        dialogVisible: false,
        options: regionData,
        selectedOptions: [],
        chart: null
      };
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      // img_click(){
      //   console.log(this.item);
      // },
      lang(){
          if(this.intervalId!=null) return;
          this.intervalId = setInterval( ()=>{
          let start = this.msg.substring(0,1)
          let end = this.msg.substring(1)
          this.msg = end + start;
        },200) 
      },
      stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
      },
      //事件修饰符
      btn(){
        // console.log("btn按钮点击事件被触发");
        this.$message({
            message: 'btn按钮点击事件被触发',
            type: 'warning',
            center: true
        });
      },
      innerDiv(){
        //  console.log("innerDiv点击事件被触发");
        this.$message({
            message: 'innerDiv点击事件被触发',
            type: 'warning',
            center: true
        });
      },
      outerDiv(){
        //  console.log("outerDiv点击事件被触发");
        this.$message({
            message: 'outerDiv点击事件被触发',
            type: 'warning',
            center: true
        });
      },
      linkclick(){
        this.$message({
            message: '默认跳转行为',
            type: 'warning',
            center: true
        });
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
            alert(valid);
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
      //表格添加
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
        let name = {id:this.id,name:this.name,date:formatDate(new Date(),"yyyy-MM-dd")};
        this.tableData.push(name);
        this.id = this.name = '';
      },
      handleDelete(index, row) {
        this.tableData.splice(index,1);
      },
      //二次确认弹窗
      confirm_alert(index,row) {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.handleDelete(index, row); //删除
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });     
        });
      },
      //照片墙
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //中国地区省市联动
      handleCityChange (value) {
        // console.log(value)
        const val = CodeToText[value];
        const arr = [];
        for(let i =0; i<value.length;i++){
          arr.push(CodeToText[value[i]]);
        } 
        console.log(arr);
        return arr;     
      },
      //Echart图表
      initChart() { 
        this.chart = echarts.init(this.$refs.myEchart)
        // 把配置和数据放这里
        this.chart.setOption({
            backgroundColor: '#2c343c',

            title: {
                text: 'My first Echart',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:274, name:'联盟广告'},
                        {value:235, name:'视频广告'},
                        {value:400, name:'搜索引擎'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
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
    },
    directives: {
      focus: {
        // 自定义指令
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
   @width: 600px;
   @height:@width - 550px;
   @margin:0 auto;
  .transition-box {
    margin-bottom: 10px;
    width: @width;
    height: @height;
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
    width: @width - 100px;
  }
  /* 轮播 */
  .el-carousel__item {
    h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
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
    width: 2*@width;
    margin-bottom: 50px;
    .el-input {
      width: 230px;
    }
  }
  .mj_echarts{
    margin:@margin;
  }
</style>