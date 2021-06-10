<template>
    <tab-bar>
        <tab-bar-item path="/elephant" activeColor="red">
            <img slot="item-icon" src="~assets/img/tabbar/elephant-1837462.svg">
            <img slot="item-icon-active" src="../assets/img/tabbar/angel-1298818.svg">
            <div slot="item-text">elephant</div>
        </tab-bar-item>
        <tab-bar-item path="/bird" activeColor="blue">
            <img slot="item-icon" src="../assets/img/tabbar/bird-2099057.svg">
            <img slot="item-icon-active" src="../assets/img/tabbar/deer-6061006.svg">
            <div slot="item-text">bird</div>
        </tab-bar-item>
        <tab-bar-item path="/owl" activeColor="blue">
            <img slot="item-icon" src="../assets/img/tabbar/owl-1837497.svg">
            <img slot="item-icon-active" src="../assets/img/tabbar/horse-2023216.svg">
            <div slot="item-text">owl</div>
        </tab-bar-item>
        <tab-bar-item path="/dolphin" activeColor="blue">
            <img slot="item-icon" src="../assets/img/tabbar/dolphin-6095411.svg">
            <img slot="item-icon-active" src="../assets/img/tabbar/fairy-2029421.svg">
            <div slot="item-text">dolphin</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "../components/tabbar/TabBar";
    import TabBarItem from "../components/tabbar/TabBarItem";
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