<template>
    <div id="listInfoWrap">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" :inline="true" :label-position="'left'">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="商品名称">
                        <el-input v-model="sizeForm.name" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="库存">
                        <el-input v-model="sizeForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="已销售">
                        <el-input v-model="sizeForm.name"></el-input>
                    </el-form-item>
                </el-col>

            </el-row>

            <el-row :gutter="20">
                <el-col :span="16">
                    <el-radio-group v-model="sizeForm.resource">
                        <el-form-item>
                            <el-radio label="全部积分抵扣"></el-radio>
                            <el-radio label="部分积分抵扣"></el-radio>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="折扣比例" style="width: 100px;margin: 0 16px;"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-radio label="无法积分抵扣"></el-radio>
                        </el-form-item>
                    </el-radio-group>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商品类型">
                        <el-input placeholder="预留商品类型字段" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="封面">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button>上传</el-button>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="产品大图">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button>上传</el-button>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="内容描述">
                        <el-input type="textarea"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="上架时间">
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="下架时间">
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20" justify="center">
                <el-form-item size="large">
                    <el-button type="primary">设置规格</el-button>
                    <el-button>设置价格</el-button>
                    <el-button>保存</el-button>
                </el-form-item>
            </el-row>

        </el-form>
    </div>
</template>


<script>
export default {
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
#listInfoWrap {
  padding: 16px;
  width: 960px;
}
</style>
