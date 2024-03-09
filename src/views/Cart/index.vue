<template>
  <div class="cart mt-32 container">
    <h2 class="">Ваш заказ</h2>
    <div class="products-wrapper py-3 border-b border-border-color">
      <CartItem
        v-for="item in cart_items"
        :key="item.id"
        :productInfo="item"
        @removeFromCart="removeFromCart"
      />
    </div>
    <div>
      <button
        class="py-5 px-8 text-white bg-brand rounded-xl mt-5"
        @click="orderProducts"
        v-if="cart_items.length"
      >
        Order Now
      </button>
    </div>
  </div>
</template>

<script>
import productsList from "@/products_list.js";
import CartItem from "./CartItem.vue";

export default {
  data() {
    return {
      cart_items_id: [],
      cart_items: [],
      bot_token: '5289296568:AAEP2T_Wa6GD-ai53wD7UtRHbgXoNaC7pns',
      chat_id: '-696048636'
    }
  },
  components: {
    CartItem
  },
  methods: {
    setCartsId() {
      this.cart_items = []
      const localeId = JSON.parse(localStorage.getItem('yanki_cart'))
      if(!localeId) return
      localeId.sort()
      localeId.forEach((id, idx) => {
        productsList.forEach(item => {
          if(item.id === id) {
            this.cart_items.push(item)
          }
        })
      })
    },
    removeFromCart(id) {
      const newCart = this.cart_items.filter(item => item.id !== id)
      const newCartId = newCart.map(item => item.id)
      localStorage.setItem('yanki_cart', JSON.stringify(newCartId))
      this.setCartsId()
    },
    async orderProducts() {
      if(!this.cart_items) {
        this.$toast.warning('Cart is Empty')
        return
      }
      let price = 0
      let msg = ``
      this.cart_items.forEach(item => {
        msg += `Product: ${item.name} %0A`
        msg += `Price: ${item.price} %0A %0A`
        price += item.price
      })
      msg += `Общая сумма: ${price}`
      
      const url = 'https://api.telegram.org/bot'+ this.bot_token +'/sendMessage?chat_id=' + this.chat_id + '&parse_mode=html&text=' + msg
      
      await fetch(url)
      this.$toast.success('Ordered!')
    }
  },
  watch: {
    count(val) {
      if(val <= 1) this.count = 1
      if(val >= 100) this.count = 100
    }
  },
  mounted() {
    this.setCartsId()
  },
}
</script>

<style>
</style>