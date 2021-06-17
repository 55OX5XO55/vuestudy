<template>
  <Header class="w">
    <template #logo>
      <img src="~assets/images/btn.png">
    </template>
    <template #nav>
      <Nav>
        <!--不加href会变成I字输入符号-->
        <NavItem><a href="#">首页</a></NavItem>
        <NavItem><a href="#">课程</a></NavItem>
        <NavItem><a href="#">职业规划</a></NavItem>
      </Nav>
    </template>
    <template #test>
      <MyButton><img src="~assets/images/btn.png"></MyButton>
    </template>
<!--    <template v-slot:header-icon-shrink>-->
<!--      <img src="~assets/images/btn1.png">-->
<!--    </template>-->

<!--    <template v-slot:system-name>-->
<!--      <h1>肖建的后台管理系统</h1>-->
<!--    </template>-->
<!--    <template v-slot:information-icon>-->
<!--      <img src="~assets/images/btn1.png">-->
<!--    </template>-->
<!--    <template v-slot:user-name>-->
<!--      <h1>肖建</h1>-->
<!--    </template>-->
  </Header>
</template>

<script>
import Header from "components/common/header/Header";
import Nav from "components/common/header/Nav";
import NavItem from "components/common/header/NavItem";
import MyButton from "components/common/button/MyButton";

export default {
  name: "MainHeader",
  data() {
    return {
      items: ["首页", "课程", "职业规划"],
    }
  },
  components: {
    MyButton,
    Nav,
    Header,
    NavItem,
  },

}
</script>

<style scoped>

</style>