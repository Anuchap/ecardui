import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import CardList from './components/CardList.vue';
import PackageList from './components/PackageList.vue';
import Preview from './components/Preview.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: CardList },
  { path: '/package', component: PackageList },
  { path: '/preview', component: Preview }
];

const router = new VueRouter({ routes })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
