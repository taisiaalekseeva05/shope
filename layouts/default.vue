<template>
  <div class="container">
  <LayoutHeader/>
  </div>
    <slot/>
  <LayoutFooter/>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.NuxtLink-exact-active {
  color: #12b488;
}</style>