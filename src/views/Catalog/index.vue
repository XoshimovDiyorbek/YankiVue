<template>
  <div class="wrapper mt-20 container">
    <div class="products flex flex-wrap justify-between gap-1.5">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        @action="addToCart"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductList from "@/products_list.js"


export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: ProductList,
      cart: []
    }
  },
  methods: {
    addToCart(id) {
      const localCart = localStorage.getItem('yanki_cart')
      if(localCart) {
        this.cart = JSON.parse(localCart)
      }
      
      const item = this.cart.find(item => item === id)
      if(item) {
        this.$toast.warning('Already in the cart!')
        return
      }
      this.cart.push(id)
      this.cart.sort()
      localStorage.setItem('yanki_cart', JSON.stringify(this.cart))
    }
  },
}
</script>

<style>

</style>