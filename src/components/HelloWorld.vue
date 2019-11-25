<template>
<div   class="divcss5">
  <el-form ref="form" :model="form" label-width="80px" v-loading="loading" :data="tableData">
    <el-form-item label="淘口令或链接" >
      <el-input type="textarea" v-model="tables.content" @change="getDecodeData"></el-input>
    </el-form-item>
    <el-form-item label="优惠券信息:">
      <el-input v-model="tables.coupon_info" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="优惠券数量">
      <el-input v-model="tables.coupon_remain_count" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="生效时间">
      <el-input v-model="tables.coupon_start_time" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="失效时间">
      <el-input v-model="tables.coupon_end_time" :disabled="true"></el-input>
    </el-form-item>

    <el-form-item label="佣金率">
      <el-input v-model="tables.max_commission_rate" :disabled="true"></el-input>
    </el-form-item>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-form-item label="淘口令" style="width:50px">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-input v-model="tables.scan" :disabled="true" style="width:250px"></el-input>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <div>
          <el-button type="primary" @click="openPage(this.coupon_click_url)">去领券</el-button>
          <!-- <el-link :href="tables.coupon_click_url" target="_blank">去领券</el-link> -->
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <el-button type="primary" @click="openPage(this.item_url)">去下单</el-button>
          <!-- <el-link :href="tables.item_url" target="_blank">去下单</el-link> -->
        </div>
      </el-col>
    </el-row>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      tables: {
        content: "586788542939",
        scan: "",
        category_id: "",
        coupon_click_url: "",
        coupon_end_time: "",
        coupon_info: "",
        coupon_remain_count: "",
        coupon_start_time: "",
        coupon_total_count: "",
        coupon_type: "",
        category_id: "",
        item_id: "",
        item_url: "",
        max_commission_rate: "",
        activety_time: ""
      },
      loading: false
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    openPage(url) {
      console.log(url);
      window.open(url, "_blank");
    },
    getDecodeData() {
      this.loading = true;
      console.log("getDecodeData!");
      this.$axios
        .post("http://localhost:8900/Convert/generalConvert", {
          // params: { text: "$mjThYwpz2t8$", id: "575123397938" },
          // id: "575123397938",
          content: this.tables.content
          // headers: { "X-Requested-With": "XMLHttpRequest" }
        })
        .then(resp => {
          this.tables = resp.data.data.result.data;
          this.tables.scan = resp.data.data.scan;
          console.log(resp);
          console.log(this.tables);
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.divcss5{
  width: 100%;
  height: 100%;
} 
/* css 注释：这样设置了对象divcss5宽度为300px样式 */ 

 
</style>
