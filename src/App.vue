<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import headerNav from '@/components/headerNav.vue'
export default {
  name: 'App',
  components: {
    headerNav
  }
}
</script>

<style>
</style>
