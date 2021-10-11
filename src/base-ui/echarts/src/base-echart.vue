<template>
  <div class="base-echart">
    <div class="echart" ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, defineProps, withDefaults } from 'vue'
import { useEcharts } from '../hooks/useEcharts'
import { EChartsOption } from 'echarts'
const props = withDefaults(
  defineProps<{
    options?: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    options: () => ({}),
    width: '100%',
    height: '350px'
  }
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const [setOptions] = useEcharts(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options, true)
  })
})
// const [setOptions] = useEcharts(echartDivRef.value!)
// watchEffect(() => {
//   setOptions(props.options)
// })
</script>

<style scoped lang="less"></style>
