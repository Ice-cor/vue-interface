<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-bind:class="{active: currentTarget === index}" v-for="(icon,index) in icons" v-on:click="currentTarget=index">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="icon"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol>
      <li v-show="currentTarget ===0">
        <form-profile v-bind:profile="resume.profile" />
      </li>
      <li v-show="currentTarget ===1">
        <project v-bind:items="resume.contactInfo" v-bind:option="{
                        title: '联系方式',
                        addAndDel: false,
                        keys:{phone: '电话号码',email: '邮箱',github: 'github',homePage:'个人主页'}
                        }" />
      </li>
      <li v-show="currentTarget ===2">
        <project v-bind:items="resume.projectInfo" v-bind:option="{
                        title: '个人项目',
                        addAndDel: true,
                        keys:{name: '项目名称',link: '链接',content: '项目内容'}
                        }" />
      </li>
      <li v-show="currentTarget ===3">4</li>
      <li v-show="currentTarget ===4">5</li>
      <li v-show="currentTarget ===5">6</li>
    </ol>
  </div>
</template>

<script>
import FormProfile from "./editor/formProfile";
import FormContactInfo from "./editor/formContactInfo";
import Project from "./editor/project";

export default {
  props: ['resume'],
  name: "editor",
  components: { FormProfile, FormContactInfo, Project },
  data() {
    return {
      icons: [
        "#icon-wxbzhanghu",
        "#icon-phone",
        "#icon-project",
        "#icon-work0",
        "#icon-lights",
        "#icon-info"
      ],
      currentTarget: 0,
      
    };
  }
};
</script>

<style  lang="scss">
#editor {
  height: 100%;
  width: 40em;
  margin-right: 40px;
  display: flex;
  & nav {
    background: rgb(0, 61, 100);
    width: 100px;
    height: 100%;
    & li {
      padding: 16px;
      text-align: center;
      cursor: pointer;
    }
    & li.active {
      background: rgb(34, 87, 121);
    }
  }
  & > ol {
    padding: 16px;
  }
}

.icon {
  width: 32px;
  height: 32px;
  vertical-align: -0.15em;
  fill: rgb(200, 200, 200);
  overflow: hidden;
}

/*图片上传样式*/
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
