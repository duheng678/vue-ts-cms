<template>
  <div class="statistical">
    <header class="header">
      <span> {{ panelData.title }}</span>
      <el-tooltip effect="light" :content="panelData.tips" placement="top">
        <i class="el-icon-warning-outline"></i>
      </el-tooltip>
    </header>
    <div class="center">
      <sky-count-up
        :number="panelData.number1"
        :option="panelData.amount === 'saleroom' ? counterOption2 : counterOption1"
      ></sky-count-up>
    </div>
    <footer class="footer">
      <span>
        {{ panelData.subtitle }}
        <sky-count-up
          :number="panelData.number1"
          :option="panelData.amount === 'saleroom' ? counterOption2 : counterOption1"
        ></sky-count-up
      ></span>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkyCountUp from '@/base-ui/countup'

export default defineComponent({
  components: { SkyCountUp },
  props: { panelData: { type: Object, default: () => ({}) } },
  setup() {
    const counterOption1 = {
      decimalPlaces: 0, // 保留两位
      prefix: '' // 单位
    }
    const counterOption2 = {
      decimalPlaces: 0, // 保留两位
      prefix: '￥' // 单位
    }
    return {
      counterOption1,
      counterOption2
    }
  }
})
</script>

<style scoped lang="less">
.statistical {
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  background-color: white;
  justify-content: flex-start;
  box-shadow: 0 2px 12px 0 rgb(0 0 0, 0.1);

  height: 130px;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: left;
  .header {
    display: flex;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  .center {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    // border: 1px solid red;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .footer {
    display: flex;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    // border: 1px solid red;
    letter-spacing: 1px;
    border-top: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
