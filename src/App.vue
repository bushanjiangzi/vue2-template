<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import navHeader from '@/components/navHeader.vue'
export default {
  name: 'App',
  components: {
    navHeader
  }
}
</script>

<style>
</style>
