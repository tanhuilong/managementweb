<template>
    <div class="zhu">
        <div class="mid">
            <el-row :gutter="10">
               
             <el-col :span="7" :offset="1"><div class="grid-content bg-purple">角色类型:<el-input
                    placeholder="请选择"
                     style="width:60% !important"
                    suffix-icon="el-icon-d-caret"
                    v-model="input1">
                    </el-input>
                 </div></el-col>
             <el-col :span="7"><div class="grid-content bg-purple">用户姓名:<el-input
                    placeholder="请输入"
                     style="width:70% !important"
                    suffix-icon="el-icon-d-caret"
                    v-model="input2">
                    </el-input>
                 </div></el-col>
             <el-col :span="2"><div class="grid-content bg-purple"><el-button
    type="danger"
    size="mini"
    @click="open1">
    查询
  </el-button>
  </div></el-col>
             <el-col :span="2"><div class="grid-content bg-purple"><el-button
    plain
    size="mini"
    @click="open2">
    导出
  </el-button></div></el-col>
              <el-col :span="2" :offset="2"><div class="grid-content bg-purple">
                  <el-button
    type="danger"
    size="mini"
    @click="open3">
    新增角色
  </el-button>
                  </div></el-col>
           </el-row>
          </div>
        
        <div class="z-main"><lie></lie></div>
    </div>
</template>
<script>
import lie from './Rolelie.vue'
export default {
    components:{
        lie
    },
    data(){
        return{
            input1:'',
            input2:''           
        }
    },
    methods : {
        open1() {
        this.$notify({
          title: '查询结果',
          message: '无结果'
        });
      },
      open2() {
        this.$notify({
          title: '导出',
          message: '文件'
        });
      },
      open3() {
        this.$notify({
          title: '新增',
          message: '欢迎，添加'
        });
      }
    }
}
</script>
<style lang="less">
.zhu{
.el-col{
    margin-top: 30px;
}
.mid{
    background:#f5efef;
}
.el-col div{
    color:gray;
    
}
.grid-contnet{
    display: flex !important;
    overflow: hidden;
}}
</style>