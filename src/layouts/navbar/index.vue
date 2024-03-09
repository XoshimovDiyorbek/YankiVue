<template>
  <DesktopNavbar v-if="GET_WINDOW_WIDTH > md" />
  <MobileNavbar v-else />
</template>

<script>
import MobileNavbar from "./components/mobile-navbar.vue";
import DesktopNavbar from "./components/desktop-navbar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MobileNavbar,
    DesktopNavbar,
  },
  data() {
    return {
      md: 768
    }
  },
  computed: {
    ...mapGetters('ui', ['GET_WINDOW_WIDTH'])
  }
};
</script>
