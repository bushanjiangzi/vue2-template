<template>
  <div class="hello">
    <h1>{{ msg }}000</h1>
    <a href="https://www.baidu.com">gggg</a>
    <ul><li>111</li></ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String
  },
  data () {
    return {
      name: 'jingag'
    }
  }
}
</script>
<style lang="scss" scoped>
.hello {
  background: #f3f2f2;
  h1{
    color: #ffffff;
  }
}
</style>
