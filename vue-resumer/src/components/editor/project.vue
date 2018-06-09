<template>
    <div>
        <h2>{{option.title}}</h2>
        <el-form :label-position="'left'" label-width="80px" >
            <div v-for="(item,index) in items" :key="index">
                <el-form-item v-for="key in keys" v-bind:label="option.keys[key] || key" :key="key">
                    <el-input v-model="item[key]"></el-input>
                </el-form-item>
                <el-button type="danger" @click="removeProject(index)" v-if="option.addAndDel" v-bind:disabled="active">删除</el-button>
            </div>
            <el-button type="primary" @click="addProject" v-if="option.addAndDel">添加</el-button>
            <el-button type="primary">提交</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
  props: ["items",'option'],
  data(){
      return{
          
      }
  },
  computed:{
      keys(){
          return Object.keys(this.items[0])
      },
      active(){
          if(this.items.length<=1){
              return true
          }else{
              return false
          }
      }
  },
  methods: {
      addProject(){
          const empty = {}
          this.keys.map((e)=>{
              empty[e] = ''
          })
          this.items.push(empty)

      },
      removeProject(index){
            this.items.splice(index,1)
      }
  }
};
</script>
