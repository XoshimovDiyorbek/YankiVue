<template>
  <div class="product-item flex justify-between items-center gap-3 mb-4">
    <!--  -->
    <div class="name flex">
      <div class="image h-full mr-5">
        <img :src="productInfo.image" alt="image" class="h-32 w-24 object-cover" />
      </div>
      <div class="flex flex-col justify-between">
        <span class="text-sm text-brand">art: {{ productInfo.id }}</span>
        <span>{{ productInfo.name }}</span>
        <span class="h-5"></span>
      </div>
    </div>

    <!--  -->
    <div class="types flex gap-3">
      <div
        class="type-item w-8 aspect-square p-1 rounded-full cursor-pointer"
        v-for="(type, idx) in productInfo.types"
        :key="idx"
        :class="{ border: selected_type === idx }"
        @click="selected_type = idx"
      >
        <div class="w-full h-full rounded-full" :class="`bg-${type}`">
          {{ type }}
        </div>
      </div>
    </div>

    <!--  -->
    <div>
      <v-select
        :options="productInfo.sizes"
        v-model="selected_size"
        :clearable="false"
      />
    </div>

    <!--  -->
    <div>
      <div class="counter border p-1">
        <button class="p-2 text-xl text-brand" @click="countDecrement">
          -
        </button>
        <input type="number" v-model="count" class="w-11 outline-none mx-3" />
        <button class="p-2 text-xl text-brand" @click="countIncrement">
          +
        </button>
      </div>
    </div>

    <!--  -->
    <div class="flex items-center gap-5">
      <div class="price">
        <span class="font-bold">{{ productInfo.price }} som</span>
      </div>
      <div class="trash-btn cursor-pointer" @click="removeFromCart(productInfo.id)">
        <img :src="trash_icon" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
    components: {
        vSelect
    },
    props: {
        productInfo: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            selected_type: 0,
            selected_size: this.productInfo.sizes[0],
            trash_icon: require('@/assets/icons/trash-icon.svg'),
            count: 1,
        }
    },
    methods: {
        countDecrement() {
            if (this.count <= 1) return this.count = 1
            this.count--
        },
        countIncrement() {
            if (this.count >= 100) return this.count = 100
            this.count++
        },
        removeFromCart(id) {
            this.$emit('removeFromCart', id)
        }
    },
};
</script>

<style></style>
