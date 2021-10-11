<template>
  <span ref="countUpRef"></span>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'

const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ',', // 千位分割
  decimal: '.', // 小数分割
  prefix: '￥' // 单位
}
export default defineComponent({
  props: { number: { type: Number, default: 0 }, option: { type: Object, default: () => ({}) } },
  setup(props) {
    const countUpRef = ref<HTMLDivElement | null>(null)
    const instance = ref<CountUp | null>(null)
    watch(
      () => props.number,
      () => {
        update(props.number)
      }
    )

    onMounted(() => {
      createCounter()
    })
    const createCounter = () => {
      if (!countUpRef.value) return
      const options: CountUpOptions = Object.assign(defaultOptions, props.option)
      instance.value = new CountUp(countUpRef?.value, props.number, options)
      start()
    }
    const start = () => {
      if (!instance.value) return
      instance?.value.start()
    }
    const update = (number: number) => {
      if (!instance.value) return
      instance?.value.update(number)
    }
    return { countUpRef }
  }
})
</script>

<style scoped></style>
