<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: '主页面'
    }
  }
}
</script>
<style lang="scss" scoped>
.hello {
  background: #f3f2f2;
  h1{
    text-align: center;
  }
}
</style>
