<template>
    <div class="product">
        <div>
            <img :src="product.image" :alt="product.name">
        </div>
        <div>
            <h2 class="pr0duct-name">{{ product.name }}</h2>
            <span class="product-price">£{{ product.price }}</span>
            <div class="product-description__title">Product description</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        default: () => {},
        required: true,
    },
});
</script>

<style lang="scss" scoped>
.product {
    background: #f9f9f9;
    padding: 50px 80px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 500px;
    column-gap: 65px;
    &-name {
        margin: 0 0 16px 0;
        font-family: var(--satoshi);
        font-size: 36px;
    }
    &-price {
        display: block;
        font-size: 24px;
        margin-bottom: 28px;
    }
    &-description {
        border-top: 1px solid rgba(0, 0, 0, .3);
        padding-top: 24px;
        &__title {
            display: block;
            margin-bottom: 14px;
        }
    }
}
</style>