<template>
  <div id="home">
    <el-button @click="dialogVisible = true">新增</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center>
      <span class="btns">
        <el-button type="primary" @click="toListInfo">预售</el-button>
        <el-button type="primary" @click="dialogVisible = false">直采</el-button>
      </span>
    </el-dialog>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="type" label="商品来源" width="180">
      </el-table-column>
      <el-table-column prop="stock" label="库存">
      </el-table-column>
      <el-table-column prop="sold" label="已售">
      </el-table-column>
      <el-table-column prop="publishTime" label="上架时间">
      </el-table-column>
      <el-table-column prop="lowerTime" label="下架时间">
      </el-table-column>
      <el-table-column prop="status" label="当前状态">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
          <el-button type="text" size="small">发布</el-button>
          <el-button type="text" size="small">隐藏</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      tableData: [
        {
          id: "",
          status: "",
          type: "",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          stock: "",
          sold: "",
          publishTime: "",
          lowerTime: "",
          isShow: ""
        }
      ],
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    toListInfo(){
      this.dialogVisible =  false
      this.$router.push({ path: "/listinfo" });
    }
  }
};
</script>

<style lang="scss">
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  // display: flex;
  // flex-direction: column;
}
.btns{
  margin: 0 auto;
}
</style>
