import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    name: 'helloworld',
    path: '/hello',
    component: () => import('./components/HelloWorld.vue')
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router