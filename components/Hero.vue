<template>
    <div class="hero">
        <div class="container dop">
        
            <HeroInformation
            title="Luxury homeware for people who love timeless design quality"
            description="Shop the new Spring 2022 collection today"
            link="#"
            colorLink="lightgray"/>   
            <img class="hero-image" src="/img/Hero.jpg" alt="hero">
        </div>
    </div>
</template>

<script setup>
import HeroInformation from '@/components/HeroInformation.vue';
</script>

<style lang="scss" scoped>
.dop {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 704px;
    @media screen and (max-width: 767px) {
        flex-direction: column
    }
}
.hero {
    background: url('/img/Hero.jpg');
    height: 704px;
    background-size: cover;
    padding-right: 80px;
    @media screen and (max-width: 767px) {
        height: auto;
        background: transparent;
        padding-right: 0;
        display: block;    
    }
    &-image {
        max-width: 100%;
        margin-top: 32px;
        display: none;
        @media screen and (max-width: 767px) {
            display: block;
        }
    }
    // &-info {
    //     background: #fff;
    //     max-width: 630px;
    //     padding: 50px 55px;
    //     height: 444px;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-between;
    //     &-link {
    //         color: var(--primary);
    //         text-decoration: none;
    //         &:hover {
    //             text-decoration: underline;
    //         }
    //     }
    
    // }
}
</style>