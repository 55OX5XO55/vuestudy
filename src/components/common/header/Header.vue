<template>
  <div class="header clearfix">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <!--给slot套一个标签主要是为了给标签家样式，但是-->
    <div class="header-nav">
      <slot name="nav"></slot>
    </div>
    <div class="test">
      <slot name="test"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data() {
    return {
      isExpand: true
    }
  },
}
</script>

<style scoped>
/*清除浮动代码,买没有理解*/
.clearfix:before, .clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

.nav {
  float: left;
}

.test{
  float: left;
}
</style>