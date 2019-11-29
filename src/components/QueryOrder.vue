<template>
  <div class="divcss5">
    <div></div>
    <!-- <el-time-select
      placeholder="起始时间"
      v-model="tables.startTime"
      :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
    ></el-time-select>
    <el-time-select
      placeholder="结束时间"
      v-model="tables.endTime"
      :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: tables.startTime
    }"
    ></el-time-select>-->
    <el-col :span="24">
      <div class="grid-content-25 bg-purple-dark"></div>
    </el-col>
    <div>
      <el-button type="primary" @click="queryOrder()">查询3小时内订单</el-button>
      <!-- <el-link :href="tables.item_url" target="_blank">去下单</el-link> -->
    </div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content-15 bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column fixed prop="tb_paid_time" label="支付时间" width="150"></el-table-column>
      <el-table-column prop="item_title" label="商品标题" width="250"></el-table-column>
      <el-table-column prop="alipay_total_price" label="付款金额" width="80"></el-table-column>
      <el-table-column prop="tk_total_rate" label="佣金率" width="70"></el-table-column>
      <el-table-column prop="pub_share_pre_fee" label="佣金金额" width="80"></el-table-column>
      <el-table-column prop="subsidy_type" label="下单平台" width="80"></el-table-column>
      <el-table-column fixed="item_link" label="商品链接" width="80">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          tb_paid_time: "",
          item_title: "",
          pub_share_pre_fee: "",
          tk_total_rate: "",
          alipay_total_price: "",
          subsidy_type: "",
          item_link: ""
        },
        {
          tb_paid_time: "",
          name: "",
          province: "",
          tk_total_rate: "",
          alipay_total_price: "",
          subsidy_type: "",
          item_link: ""
        },
        {
          tb_paid_time: "",
          name: "",
          province: "",
          tk_total_rate: "",
          alipay_total_price: "",
          subsidy_type: "",
          item_link: ""
        },
        {
          tb_paid_time: "",
          name: "",
          province: "",
          tk_total_rate: "",
          alipay_total_price: "",
          subsidy_type: "",
          item_link: ""
        }
      ],
      tables: {
        startTime: "",
        endTime: ""
      },
      loading: false
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    queryOrder() {
      this.loading = true;
      console.log("queryOrder!");

      console.log(this.tables.startTime);
      console.log(this.tables.endTime);
      this.$axios
        .post("https://01eo.com/taoke/Query/queryOrder", {
          // params: { text: "$mjThYwpz2t8$", id: "575123397938" },
          // id: "575123397938",
          content: "gdfggs",
          headers: { "Content-Type": "application/json" }
        })
        .then(resp => {
          console.log(resp);
          this.loading = false;
          var resultData = resp.data.data;
          this.tableData = resultData;
          if (resultData == "") {
            alert(resultData.msg);
          } else {
            console.log(resultData);
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
/* css 注释：这样设置了对象divcss5宽度为300px样式 */
.divcss5 {
  width: 100%;
  height: 100%;
}
.grid-content-15 {
  border-radius: 2px;
  min-height: 5px;
}

.grid-content-25 {
  border-radius: 4px;
  min-height: 35px;
}
</style>
