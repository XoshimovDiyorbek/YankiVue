<template>
  <header
    class="header fixed top-0 left-0 w-full z-10 "
    :class="[{ 'bg-white': !isMain }]"
  >
    <div class="container flex justify-between items-center py-5 flex-wrap">
      <!-- left -->
      <div class="pl-5 flex items-center">
        <div class="burger flex">
          <img
            :src="is_open ? close_icon_brand : bars_icon_brand"
            alt="burger"
            class="w-8 h-7 mr-5"
            @click="is_open = !is_open"
          />
        </div>
        
        <ul class="menu flex">
          <li 
            class="ml-6 cursor-pointer" 
            v-for="item in menu_items" :key="item.title"
            @click="$router.push({ name: item.link })"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <!-- center -->
      <div class="absolute left-1/2 -translate-x-1/2">
        <img
          :src="isMain ? logo : logo_brand"
          alt="logo"
          class="max-w-[97px]"
        />
      </div>
      <!-- right -->
      <div class="flex items-center pr-5">
        <div>
          <Dropdown />
        </div>
        <div class="ml-6">
          <Dropdown :items="['SOM', 'EUR', 'USD']" />
        </div>
        
        <div class="ml-20">
          <img :src="search_icon" alt="icon" class="w-5" />
        </div>
        <div class="ml-5">
          <img :src="user_icon" alt="icon" class="w-5" />
        </div>
        <div class="ml-5">
          <img :src="heart_brand" alt="icon" class="w-5" />
        </div>
        <div class="ml-5 cursor-pointer" @click="$router.push({ name: 'cart' })">
          <img :src="cart_brand" alt="icon" class="w-5" />
        </div>
      </div>

      <!-- MENU -->
    </div>
  </header>
</template>

<script>
import Dropdown from "./dropdown.vue";

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      bars_icon_brand: require("@/assets/icons/bars_brand.svg"),
      close_icon_brand: require("@/assets/icons/close-brand.svg"),
      logo_brand: require("@/assets/icons/logo_brand.svg"),
      logo: require("@/assets/icons/logo.svg"),
      heart_brand: require("@/assets/icons/heart_brand.svg"),
      cart_brand: require("@/assets/icons/cart_brand.svg"),
      user_icon: require('@/assets/icons/user_brand.svg'),
      search_icon: require('@/assets/icons/search_black.svg'),
      is_open: false,
      current_route: this.$router.currentRoute,
      menu_items: [
        { title: 'NEW', link: '' },
        { title: 'КАТАЛОГ', link: 'catalog' },
        { title: 'О НАС', link: '' },
      ]
    };
  },
  computed: {
    isMain() {
      if (this.current_route.name === "main") return true;
      return false;
    },
  },
};
</script>

<style></style>
