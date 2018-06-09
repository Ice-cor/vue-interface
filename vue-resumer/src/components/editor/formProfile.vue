<template>
    <div>
        <h2>个人信息</h2>
        <el-form :label-position="'left'" label-width="80px" :model="profile">
            <el-form-item label="姓名">
                <el-input v-model="profile.name"></el-input>
            </el-form-item>
            <el-form-item label="求职意向">
                <el-input v-model="profile.jop"></el-input>
            </el-form-item>
            <el-button type="primary">提交</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
  props: ["profile"]
};
</script>
