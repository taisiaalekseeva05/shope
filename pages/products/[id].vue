<template>
    <ProductDetail :product="currentProduct"/>
</template>

<script setup>
import api from "@/api.js";

const route = useRoute()
const currentProduct = await api.getProduct(route.params.id)

</script>