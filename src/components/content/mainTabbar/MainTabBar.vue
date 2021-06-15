<template>
  <tab-bar>
    <tab-bar-item path="/elephant" activeColor="red">
      <img slot="item-icon" src="~assets/images/btn.png">
      <img slot="item-icon-active" src="~assets/images/btn1.png">
      <div slot="item-text">elephant</div>
    </tab-bar-item>
    <tab-bar-item path="/bird" activeColor="blue">
      <img slot="item-icon" src="~assets/images/btn.png">
      <img slot="item-icon-active" src="~assets/images/btn1.png">
      <div slot="item-text">bird</div>
    </tab-bar-item>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/images/btn.png">
      <img slot="item-icon-active" src="~assets/images/btn1.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/owl" activeColor="blue">
      <img slot="item-icon" src="~assets/images/btn.png">
      <img slot="item-icon-active" src="~assets/images/btn1.png">
      <div slot="item-text">owl</div>
    </tab-bar-item>
    <tab-bar-item path="/dolphin" activeColor="blue">
      <img slot="item-icon" src="~assets/images/btn.png">
      <img slot="item-icon-active" src="~assets/images/btn1.png">
      <div slot="item-text">dolphin</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style scoped>

</style>