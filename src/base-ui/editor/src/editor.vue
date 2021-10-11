<template>
  <div class="sky-editor" ref="editorRef"></div>
  <div class="btn"><el-button type="primary" right @click="syncHTML">上传内容</el-button></div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import Editor from 'wangeditor'

export default defineComponent({
  setup() {
    const editorRef = ref<HTMLDivElement | null>(null)
    const content = reactive({
      html: '',
      text: ''
    })
    const instance = ref<Editor | null>(null)

    onMounted(() => {
      instance.value = new Editor(editorRef.value)
      instance.value.config.height = 460
      Object.assign(instance.value.config, {
        onchange() {
          // console.log('')  实时监听content的变化
        }
      })
      instance.value.create()
    })

    onBeforeUnmount(() => {
      if (!instance.value) return
      instance.value.destroy()
      instance.value = null
    })
    const syncHTML = () => {
      if (!instance.value) return
      content.text = instance.value.txt.text()
    }

    return { editorRef, syncHTML, content }
  }
})
</script>

<style scoped lang="less">
.sky-editor {
  text-align: left;
}
.btn {
  display: flex;
  flex-direction: row-reverse;
  padding: 0 50px;
}
</style>
