import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import chinaMapData from '../data/china.json'
//注册中国地图
echarts.registerMap('china', chinaMapData)

export function useEcharts(Dom: HTMLElement, theme = 'light') {
  // 初始化echarts
  const echartsInstance = echarts.init(Dom, theme, { renderer: 'svg' })

  // 设置options
  const setOptions = (options: EChartsOption, notMerge?: boolean) => {
    echartsInstance.setOption(options, notMerge)
  }
  // 监听window尺寸的变化
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })

  return [setOptions]
}
