<template>
  <div class="product-card w-[320px] relative">
    <div class="image-block w-full h-[360px]">
        <img class="w-full h-full object-cover" :src="product.image" alt="product-image">
    </div>
    <div class="save-btn absolute top-0 right-0 w-10 h-10 flex items-center justify-center bg-brand rounded-bl-2xl cursor-pointer" @click="$emit('action', product.id)">
        <img class="w-4" :src="heart_icon" alt="">
    </div>
    <div class="product-info w-full text-center mt-4">
        <h3 class="title">{{ product.name }} <span v-if="product.is_new" class="text-brand">new</span></h3>
        <p class="price font-bold">{{ product.price }} грн</p>
    </div>
    <div class="sizes flex justify-center gap-1.5 my-1">
        <p v-for="size in product.sizes" :key="size">
            {{size}}
        </p>
    </div>
    <div class="types flex justify-center gap-1.5">
        <div 
            class="w-4 aspect-square rounded-full border"
            v-for="type in product.types"
            :key="type"
            :class="`bg-${type}`"
        ></div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            require: true,
        }
    },
    data() {
        return {
            heart_icon: require('@/assets/icons/heart.svg')
        }
    },
}
</script>

<style>

</style>