<template>
  <div>
    <MainHeader></MainHeader>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';
import MainHeader from "components/content/mainTabbar/MainHeader";

export default {
  name: "Home",
  components: {
    MainTabBar,
    MainHeader
  }
}
</script>

<style scoped>

</style>