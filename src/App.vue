<template>
  <Navbar />
  <router-view/>
</template>

<script>
import { mapActions } from "vuex"
import Navbar from "@/layouts/navbar/index.vue"

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions('ui', ['CHANGE_WINDOW_WIDTH']),
    changeWindowWidth() {
      this.CHANGE_WINDOW_WIDTH(window.innerWidth)
    }
  },
  mounted() {
    this.changeWindowWidth()
    window.addEventListener('resize', this.changeWindowWidth)
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss'
</style>
