import Vue from "vue"
import VueRouter from "vue-router"
//某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，而是希望导入者自己来来命名
//这时候使用的是export default，导入时用下面这种语法
import Home from "views/Home"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/welcome"
    },
    {
        //如果设置两个上面的起作用
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
              path: "welcome",
              name: "Welcome",
              component: ()=>import("views/Welcome")
            },
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router