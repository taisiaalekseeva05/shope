<template>
    <div class="product">
        <NuxtLink :to="`products/${id}`">
           <img :src="img" :alt="title" class="product-image">
        </NuxtLink>
        <NuxtLink :to="`products/${id}`" class="product-name">{{title}}</NuxtLink>
        <span class="product-price">£{{price}}</span>
    </div>
</template>

<script setup>
const props = defineProps ({

    id: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
.product {
    &-image {
        display: block;
        margin-bottom: 24px;
        object-fit: cover;
    }
    &-name {
        display: block;
        color: var(--primary);
        font-size: 20px;
        line-height: 28px;
        font-family: var(--satoshi);
        margin-bottom: 8px;
        text-decoration: none;
        @media screen and (max-width: 767) {
            font-size: 16px;
        }
        &:hover {
            text-decoration: underline;
        }
    }
    &-price {
        display: block;
        font-size: 18px;
        color: var(--primary);
        @media screen and (max-width: 767) {
            font-size: 15px;
        }
    }
}
</style>