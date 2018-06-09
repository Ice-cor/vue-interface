<template>
  <div id="topbar">
      <div>vue-resurmer</div>
      <div class="operation">
          <div class="row row2">
            <div class="userHead">
                <img src="../assets/user.jpg" alt="用户头像">
            </div>
           
            <el-badge is-dot class="item">
                 <i class="el-icon-caret-bottom"></i>
            </el-badge>
          </div>
          <div class="row">
            <el-button type="primary" @click="preview">预览</el-button>
            <el-button type="success">下载</el-button>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'topbar',
  methods:{
      preview(){
          
      }
  }
}
</script>

<style lang="scss">
    #topbar{
        padding: 16px;
        border: 1px solid blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
            & .operation{
                display: flex;
                & .userHead{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    margin-right: 8px;
                    overflow: hidden;
                    & img{
                        width: 100%;
                        }
                }
                & .row{
                    display: flex;
                    align-items: center;
                }
                & .row.row2{
                    margin-right: 24px;
                    cursor: pointer;
                }
            }
    }
</style>
