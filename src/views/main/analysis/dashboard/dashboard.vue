<template>
  <div class="dashboard">
    <!-- 最上层 数据展示 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelDatas" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statiscal-panel :panelData="item"></statiscal-panel>
        </el-col>
      </template>
    </el-row>
    <!-- 中层图标 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <sky-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </sky-card>
      </el-col>
      <el-col :span="10">
        <sky-card title="不同城市商品销量">
          <map-echart :mapData="goodsAddressSale"></map-echart> </sky-card
      ></el-col>
      <el-col :span="7">
        <sky-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart></sky-card
      ></el-col>
    </el-row>
    <!-- 下层图表 -->
    <el-row :gutter="10" class="row">
      <el-col :span="12">
        <sky-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </sky-card>
      </el-col>
      <el-col :span="12">
        <sky-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </sky-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import StatiscalPanel from '@/components/statistical-panel'
import SkyCard from '@/base-ui/card'
import { PieEchart, MapEchart, RoseEchart, LineEchart, BarEchart } from '@/components/page-charts'

import { useStore } from '@/store'
export default defineComponent({
  name: 'dashboard',
  components: { StatiscalPanel, SkyCard, PieEchart, MapEchart, RoseEchart, LineEchart, BarEchart },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getAnalysisDataAction')
    const topPanelDatas = computed(() => store.state.analysis.topPanelDatas)
    const categoryGoodsCount = computed(() => {
      return store.state.analysis.categoryGoodsCount.map((item: any) => {
        return { value: item.goodsCount, name: item.name }
      })
    })
    const goodsAddressSale = computed(() => {
      return store.state.analysis.goodsAddressSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    const categoryGoodsSale = computed(() => {
      const goodsSale = store.state.analysis.categoryGoodsSale
      const labels: string[] = []
      const values: number[] = []
      for (const item of goodsSale) {
        labels.push(item.name)
        values.push(item.goodsCount)
      }
      return { labels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const goodsFavor = store.state.analysis.categoryGoodsFavor
      const labels: string[] = []
      const values: number[] = []
      for (const item of goodsFavor) {
        labels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { labels, values }
    })
    return {
      topPanelDatas,
      categoryGoodsCount,
      goodsAddressSale,
      categoryGoodsSale,
      categoryGoodsFavor
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;

  .row {
    margin-top: 20px;
  }
}
</style>
