<template>
  <div class="nav">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Nav",
}
</script>

<style scoped>
.nav * {
  float: left;
  /*块级元素*/
  padding: 0 10px;
  height: 42px;
}
</style>