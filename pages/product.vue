<template>
    <ProductDetail :product="currentProduct"/>
</template>

<script setup>
import api from "@/api.js";

const route = useRoute()
const productId = ref("")
const currentProduct = ref({})

onMounted(async () => {
    productId.value = route.params.id
    currentProduct = await api.getProduct(productId.value)
});

</script>