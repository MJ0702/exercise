<template>  
  <!-- 按钮显隐-->
  <div>
    <el-button @click="show2 = !show2">Click Me</el-button>

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
    <div>
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="250px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.url">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <div class="block">
        <span class="demonstration">Click 指示器触发</span>
        <el-carousel trigger="click" height="250px">
          <el-carousel-item v-for="item2 in imgList2" :key="item2.id">
            <img :src="item2.url">
          </el-carousel-item>
        </el-carousel>
      </div> -->
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
</template>


<script>
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
          {id:0,url:'../assets/01.jpg'},
          {id:1,url:'../assets/02.jpg'},
          {id:2,url:'../assets/03.jpg'}
        ],
      };
    },
    methods: {
      //改变时间
      timeChange(val) {
          console.log(val)
        },
      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      //表单重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
  .lunbo{
    height: 400px;
  }
</style>