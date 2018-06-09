<template>
    <div>
        <h2>联系方式</h2>
        <el-form :label-position="'left'" label-width="80px" :model="contactInfo">
            <el-form-item label="电话">
                <el-input v-model="contactInfo.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="contactInfo.email"></el-input>
            </el-form-item>
            <el-form-item label="github">
                <el-input v-model="contactInfo.github"></el-input>
            </el-form-item>
            <el-form-item label="个人主页">
                <el-input v-model="contactInfo.homePage"></el-input>
            </el-form-item>
            <el-button type="primary">提交</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
  props: ['contactInfo']
}
</script>

