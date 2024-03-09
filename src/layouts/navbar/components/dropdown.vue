<template>
  <div
    class="dropdown inline-flex items-center cursor-pointer uppercase relative"
    @click="is_open = !is_open"
  >
    <span class="text-lg mr-2 text-md">{{ selected }}</span>
    <img :src="chevron_down" alt="icon" :class="{ active: is_open }" />
    <transition name="dropdown-menu">
      <ul class="absolute top-full w-full text-center" v-show="is_open">
        <li
          class="border-t border-brand"
          v-for="item in items"
          :key="item"
          @click="selected = item"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: ['ru', 'en', 'uz']
    }
  },
  data() {
    return {
      is_open: false,
      selected: this.items[0],
      chevron_down: require("@/assets/icons/chevron-down_black.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  img{
    transition: 0.5s;
    &.active{
      transform: rotate(180deg);
    }
  }
  
  .dropdown-menu-enter-active,
  .dropdown-menu-leave-active {
    transition: 0.5s ease;
  }

  .dropdown-menu-enter-from,
  .dropdown-menu-leave-to {
    transform: translateY(5px);
    opacity: 0;
  }
}
</style>
