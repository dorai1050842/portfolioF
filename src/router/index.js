import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Portfolio from "../views/Portfolio.vue";
import Skills from "../views/Skills/Skills.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/About.vue")
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
