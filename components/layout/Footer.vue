<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
            <div class="footer-top">
                <div class="footer-menu">
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Menu</span>
                        <NuxtLink to="/" class="footer-menu__link">New arrivals</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Best sellers</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Recently viewed</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Popular this week</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">All products</NuxtLink>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Categories</span>
                        <NuxtLink to="/" class="footer-menu__link">Crockery</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Furniture</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Homeware</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Plant pots</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Chairs</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Crockery</NuxtLink>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Our company</span>
                        <NuxtLink to="/" class="footer-menu__link">About us</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Vacancies</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Contact us</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Privacy</NuxtLink>
                        <NuxtLink to="/" class="footer-menu__link">Returns policy</NuxtLink>
                    </div>
                </div>
            </div>
            
            <div class="footer-subscribe">
                <SubscribeForm 
                    colorButton="white" 
                    bgInput="rgba(255, 255, 255, 0.15)"
                    colorText="primary"
                />
            </div>
            <div class="footer-bottom">
                <span class="footer-bottom__copyright">
                    Copyright 2022 Avion LTD
                </span>
                <div class="footer-bottom-socials">
                    <a href="#" class="footer-bottom-socials__link"><img src="/svg/linkedin.svg" alt=""></a>
                    <a href="#" class="footer-bottom-socials__link"><img src="/svg/facebook.svg" alt=""></a>
                    <a href="#" class="footer-bottom-socials__link"><img src="/svg/instagram.svg" alt=""></a>
                    <a href="#" class="footer-bottom-socials__link"><img src="/svg/skype.svg" alt=""></a>
                    <a href="#" class="footer-bottom-socials__link"><img src="/svg/twitter.svg" alt=""></a>
                    <a href="#" class="footer-bottom-socials__link"><img src="/svg/pinterest.svg" alt=""></a>
                </div>
            </div>
        </div>
    </div>
        
    </footer>
</template>

<script setup>
import SubscribeForm from '@/components/SubscribeForm.vue';
</script>

<style lang="scss" scoped>
.container {
    max-width: 1440px;
    margin: auto;
    padding: 0 24px;
}
.footer {
    background: var(--primary);
    color: #fff;
    @media screen and (max-width: 767px) {
        margin: 0 -24px;
    }
    &-content {
        padding: 58px 82px 25px 82px;
        @media screen and (max-width: 1024px){
            padding: 58px 30px 30px 30px;
        }
        @media screen and (max-width: 767px) {
            padding: 40px 25px;
        }
    }
    &-top {
        display: grid;
        grid-template-columns: 540px 1fr;
        column-gap: 110px;
        border-bottom: 1px solid #4e4d93;
        padding-bottom: 48px;
        @media screen and (max-width: 1150px) {
            column-gap: 10px;
            grid-template-columns: 450px 1fr;  
        }
        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
            padding-bottom: 24px;
        }
    }
    &-menu {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        @media screen and (max-width: 1024px){
            grid-template-columns: repeat(2, 1fr);

        }
        &__title {
            font-family: var(--satoshi);
            display: block;
            margin-bottom: 12px;
        }
        &__link {
            display: block;
            color: #fff;
            font-size: 14px;
            text-decoration: none;
            margin-bottom: 12px;
            &:last-child {
                margin-bottom: 0;
            }
            &:hover {
                text-decoration: underline;
            }
        }
        &-column {
            @media screen and (max-width: 767px) {
                margin-bottom: 40px;
            } 
        }
    }
    &-bottom {
        padding-top: 22px;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 767px) {
            display: block;
            text-align: center;
        }
        &__copyright {
            font-size: 14px;
            @media screen and (max-width: 767px) {
                display: block;
                margin-bottom: 20px;
            }
        }
        &-socials {
            display: flex;
            align-items: center;
            &__link {
                margin: 0 12px;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}
</style>