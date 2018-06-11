<template>
  <div style="width:100%;height:100%">
    <object type="application/x-webplayercontrol"></object>
    {{name}}{{index}}
  </div>
</template>
<script>
export default {
  name: 'video-plugin',
  props: ['name', 'index'],
  methods: {
    aaa() {
      console.log('aaa')
    }
  },
  mounted() {
    const plugin = this.$el.querySelector('object')
    setTimeout(() => {
      plugin.SetMouseStatusCallback(() => {
        this.$el.click()
      })
    }, 2000)
  }
}
</script>
