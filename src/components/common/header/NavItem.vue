<template>
  <div class="nav-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavItem"
}
</script>

<style scoped>
.nav-item *{
  display: block;
  height: 42px;
  padding: 0 5px;
  text-decoration: none;
}

.nav-item *:hover {
  border-bottom: 2px solid dodgerblue;
  color: dodgerblue;
}
</style>