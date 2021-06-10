<template>
    <div>
        <div class="header w">
            <div class="logo">盒子</div>
            <div class="nav">
                <ul>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">课程</a></li>
                    <li><a href="#">职业规划</a></li>
                </ul>
            </div>
            <div class="search">
                <!--输入框默认值-->
                <input type="text" value="输入关键词">
                <button>暗流</button>
            </div>
            <div class="user">
                <!--这个元素是挂载到public下的html中的,路径必须从那里写-->
                <img src="../src/assets/images/btn1.png" alt="AA">
                xiaojian
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style>
    @import "assets/css/base.css";
</style>
