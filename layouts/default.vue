<template>
  <div class="default">
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<script>

import { getClientHeight } from '@/util/tool'
export default {
  name: 'default',
  components: {
  },
  computed: {
    height () {
      var height = 500
      if (process.client) {
        height = getClientHeight() - 120
      }
      return height + 'px'
    }
  },
  mounted () {
  },
  methods: {
    getLogin () {
      var params = {
        username: 'admin',
        password: '123456'
      }
      this.$store.dispatch('user/Login', params).then(res => {
        console.log(res)
      })
    },
    setProgress () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 5000)
      })
    }
  }
}
</script>
<style lang="scss">
</style>
