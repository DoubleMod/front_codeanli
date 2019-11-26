<template>
  <div class="divcss5">
    586788542939
    <el-form ref="form" :model="form" label-width="100px" v-loading="loading">
      <el-form-item label="淘口令或链接">
        <el-input type="textarea" v-model="tables.content" @change="getDecodeData"></el-input>
      </el-form-item>
      <el-form-item label="优惠券信息">
        <el-input v-model="tables.coupon_info" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="剩余数量">
        <el-input v-model="tables.coupon_remain_count" :disabled="true"></el-input>
      </el-form-item>
      <!-- <el-form-item label="生效时间">
      <el-input v-model="tables.coupon_start_time" :disabled="true"></el-input>
      </el-form-item>-->
      <el-form-item label="失效时间">
        <el-input v-model="tables.coupon_end_time" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="佣金率">
        <el-input v-model="tables.max_commission_rate" :disabled="true"></el-input>
      </el-form-item>

      <div>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-form-item label="淘口令">
                <el-button round @click="doCopy">复制</el-button>
              </el-form-item>
            </div>
          </el-col>
          <span></span>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-input v-model="tables.scan" :disabled="true" style="width:80%"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>

      <el-row>
        <el-col :span="12">
          <div>
            <el-button type="primary" @click="openPage(tables.coupon_click_url)">去领券</el-button>
            <!-- <el-link :href="tables.coupon_click_url" target="_blank">去领券</el-link> -->
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-button type="primary" @click="openPage(tables.item_url)">去下单</el-button>
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
        content: "",
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
    trim(value) {
      /**去除首尾空白 */
      return value.replace(/(^\s*)|(\s*$)/g, "");
    },
    doCopy() {
      this.$copyText(this.tables.scan).then(
        e => {
          // success
          alert("复制成功,去打开手淘吧");
        },
        e => {
          // fail
          alert("抱歉,该浏览器不支持复制");
        }
      );
    },
    openPage(url) {
      if ((url == undefined) | (url == "")) {
        alert("请先输入淘链接或淘口令");
      } else {
        window.open(url, "_blank");
      }
    },
    getDecodeData() {
      this.loading = true;
      console.log("getDecodeData!");
      this.$axios
        .post("http://192.168.0.33:8900/Convert/generalConvert", {
          // params: { text: "$mjThYwpz2t8$", id: "575123397938" },
          // id: "575123397938",
          content: this.tables.content
          // headers: { "X-Requested-With": "XMLHttpRequest" }
        })
        .then(resp => {
          console.log(resp);
          this.loading = false;
          var resultData = resp.data;
          if (resultData.state != 200) {
            alert(resultData.msg);
          } else {
            this.tables = resultData.data;
            console.log(this.tables.coupon_info);
            if (this.tables.coupon_info == undefined) {
              this.tables.coupon_info = "来晚了,优惠券已领完啦!";
              this.tables.coupon_end_time = "-";
              this.tables.coupon_remain_count = "-";
            }

            console.log(this.tables);
          }
        })
        .catch(err => {
          this.loading = false;
          alert("服务繁忙,请稍后再试!");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divcss5 {
  width: 100%;
  height: 100%;
}
/* css 注释：这样设置了对象divcss5宽度为300px样式 */
</style>
