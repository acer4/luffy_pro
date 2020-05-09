import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/Home/home";
import course from "../components/course/course";
import LightCourse from "../components/LightCourse/LightCourse";
import micro from "../components/Micro/micro";

Vue.use(Router)

export default new Router({
  linkActiveClass:'is-active',
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   redirect:'/home'
    // },
    {
      path: '/home',
      name:'Home',
      component:home
    },
    {
      path: '/course',
      name:'Course',
      component:course
    },
    {
      path: '/home/light-course',
      name:'LightCourse',
      component:LightCourse
    },
    {
      path: '/micro',
      name:'Micro',
      component:micro
    }
  ]
})
