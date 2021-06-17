<template>
  <div class="my-button">
    <div class="button-icon">
      <slot></slot>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.my-button {
  position: relative;
  /*width: 89px;*/
  height: 42px;
}

.my-button:hover .mask {
  display: block;
}

.mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  background: red;
}
</style>