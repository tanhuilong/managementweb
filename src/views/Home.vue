<template>
  <div class="app">
      <el-container>
  <el-header>
    <div class="top-l clearfloat">
              <img src="../../public/img/menu_top_logo.png" >
              <span>中央会员管理系统</span>
            </div>
            <div class="top-r right clearfloat">
              <ul>
               <li><el-avatar icon="el-icon-user-solid"></el-avatar></li>
               <li><a href="#">你好！ xxx</a></li>
               <li>|</li>
               <li><a href="#">退出登录</a></li>
               </ul>
            </div>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
  <el-col :span="24">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff">
      <el-submenu index="1" >
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span @click="onclick1">{{message1}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="onclick11">{{message11}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-orange"></i>
        <span slot="title"  @click="onclick2">{{message2}}</span>
      </el-menu-item>
      <el-submenu index="3" >
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span  @click="onclick3">{{message3}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1"  @click="onclick31">{{message31}}</el-menu-item>
          <el-menu-item index="3-2"  @click="onclick32">{{message32}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
    </el-aside>
    <el-main>
        <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{caidan1}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{caidan2}}</el-breadcrumb-item>
</el-breadcrumb>
     <router-view/>
    </el-main>
  </el-container>
</el-container>

  </div>
</template>
<script>

export default {
  data () {
   return{
     message1:'业绩管理',
     message2:'运营管理',
     message3:'系统管理',
     message11:'业绩报销',
     message31:'用户管理',
     message32:'角色权限管理',
     caidan1:'',
     caidan2:''
   }
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      
       onclick1 () {
        this.$router.push('/management');
        this.caidan1=this.message1
      },
      onclick11 () {
        this.$router.push('/zhu');
        this.caidan1=this.message1
         this.caidan2=this.message11;
      },
       onclick2 () {
        this.$router.push('/operation');
        this.caidan1=this.message2
      },
       onclick3 () {
        this.$router.push('/system');
        this.caidan1=this.message3
      },
      onclick31 () {
        this.$router.push('/userzhu');
        this.caidan1=this.message3
         this.caidan2=this.message31;
      },
      onclick32 () {
        this.$router.push('/role');
        this.caidan1=this.message3
         this.caidan2=this.message32;
      },
    }
}
</script>
<style lang="less">
.app{
.el-header{
  width:100%;
  height:50px;
  background:gray;
}
.content{
  display: flex;
}
.el-aside{
  width: 170px;
  background: #545c64;
  position: relative;
}
.el-main{
  flex:1;
  height:500px;
}
.top-l img{
  margin: 10px;
}
.top-l{
  display: flex;
}
.top-l span{
  color:white;
  height: 50px;
  line-height: 50px;
}
.top-r{
  margin-top:-45px ;
}
.top-r ul{
list-style: none;
}
.top-r li{
 float:left;
 padding-right:5px ;
 line-height: 40px;
 color:#fff;
}
.top-r li a{
  color:#fff;
}
.z-top{
    height :30px;
    background :white;
    color:gray;
}
}
</style>