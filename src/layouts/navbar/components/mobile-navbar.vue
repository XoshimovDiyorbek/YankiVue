<template>
  <header 
    class="header fixed top-0 left-0 w-full z-10 flex justify-between items-center py-5 flex-wrap" 
    :class="[
      { 'h-full': is_open },
      { 'bg-white': !isMain }
    ]"
  >
    <!-- left -->
    <div class="pl-5">
      <div class="burger flex">
        <img 
          :src="is_open ? close_icon_brand : bars_icon_brand" 
          alt="burger" 
          class="w-8 h-7 mr-5"
          @click="is_open = !is_open"
        >
        <Dropdown />
      </div>
    </div>
    <!-- center -->
    <div class="">
      <img :src="isMain ? logo : logo_brand" alt="logo" class="max-w-[97px]">
    </div>
    <!-- right -->
    <div class="flex pr-5">
      <div>
        <img :src="heart_brand" alt="icon" class="w-5">
      </div>
      <div class="ml-5">
        <img :src="cart_brand" alt="icon" class="w-5">
      </div>
    </div>
    
    <!-- MENU -->
    <transition name="navbar">
      <MobileMenu v-if="is_open" /> 
    </transition>
  </header>
</template>

<script>
import Dropdown from "./dropdown.vue";
import MobileMenu from "./mobile-menu.vue";

export default {
  components: {
    Dropdown,
    MobileMenu
  },
  data() {
    return {
      bars_icon_brand: require('@/assets/icons/bars_brand.svg'),
      close_icon_brand: require('@/assets/icons/close-brand.svg'),
      logo_brand: require('@/assets/icons/logo_brand.svg'),
      logo: require('@/assets/icons/logo.svg'),
      heart_brand: require('@/assets/icons/heart_brand.svg'),
      cart_brand: require('@/assets/icons/cart_brand.svg'),
      is_open: false,
      current_route: this.$router.currentRoute
    }
  },
  computed: {
    isMain() {
      if(this.current_route.name === 'main') return true
      return false
    }
  }
};
</script>

<style>
</style>
