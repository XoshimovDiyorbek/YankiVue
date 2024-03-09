<template>
  <div class="w-full h-full border-t border-brand mt-5 px-5 flex flex-col justify-between">
    <!-- search -->
    <div>
    <div class="flex justify-between items-center my-5">
        <div class="w-full border border-border-color mr-5 rounded-full flex justify-between py-2 px-5">
            <input type="text" placeholder="Введите ваш запрос" class="outline-none">
            <img :src="search_icon" alt="search" class="w-5">
        </div>
        <Dropdown :items="option" />
    </div>
    <!-- navigation -->
    <ul>
        <li class="uppercase p-5 flex justify-center items-center border-y border-border-color">
            <img :src="user_icon" alt="user" class="mr-2">
            <span class="text-[16px]">ЛИЧНЫЙ КАБИНЕТ</span>
        </li>
        <li 
            class="uppercase p-5 text-center border-b border-border-color"
            v-for="item in menu_items"
            :key="item.title"
        >
            <span class="text-[16px]">{{ item.title }}</span>
        </li>
    </ul>
    </div>
    
    <!-- info -->
    <div>
        <div class="social flex justify-center">
            <a href="">
                <img :src="instagram" alt="sci">
            </a>
            <a href="">
                <img :src="telegram" alt="sci">
            </a>
        </div>
        <div>
            <a href="" class="text-sm font-extralight block text-center">+38(073) 096 36 44</a>
            <a href="" class="text-sm font-extralight block text-center">info@yanki.com</a>
        </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "./dropdown.vue";

export default {
    components: {
        Dropdown
    },
    data() {
        return {
            option: ['uah', 'usd', 'eur'],
            search_icon: require('@/assets/icons/search_black.svg'),
            user_icon: require('@/assets/icons/user_brand.svg'),
            instagram: require('@/assets/icons/instagram.svg'),
            telegram: require('@/assets/icons/telegram.svg'),
            menu_items: [
                { title: 'NEW', link: '' },
                { title: 'КАТАЛОГ', link: '' },
                { title: 'О НАС', link: '' },
                { title: 'УСЛОВИЯ ВОЗВРАТА', link: '' },
                { title: 'КОНТАКТЫ', link: '' },
            ]
        }
    },
};
</script>

<style>
body{
    color: #25252580;
}
</style>
