<template>
  <div id="preview">
      <h2> {{resume.profile.name || '请填写名字'}}</h2>
        <div>{{resume.profile.jop || '填写岗位'}}</div>

        <h3 style="margin-top: 20px;">联系方式</h3>
        <ol v-for="info in resume.contactInfo">
            <li>{{info.phone}}</li>
            <li>{{info.email}}</li>
            <li>{{info.github}}</li>
            <li>{{info.homePage}}</li>
        </ol>
    
        <h3 style="margin-top: 20px;">个人项目</h3>
        <ol v-for="info in resume.projectInfo" style="margin-top: 16px;">
            <li>{{info.name}}</li>
            <li>{{info.link}}</li>
            <li>{{info.content}}</li>
        </ol>
  </div>
</template>

<script>
export default {
  props: ['resume'],
  name: 'preview'
}
</script>

<style scoped>
    #preview{
        height: 100%;
        flex: 1;
        border: 1px solid gray;
        padding: 16px;
    }
</style>
