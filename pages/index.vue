<template>
  <div>
    <Hero/>
    <AboutBrand/>
    <UiLoader v-if="loading"/>
    <Products4Column :products="popularProducts" v-else/>
    <Ideas/>
    <Subscribe/>
  </div>
</template>

<script setup>
import api from '@/api';

const popularProducts = ref([]);
const loading = ref(true)

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  loading.value = false;
});

</script>



 