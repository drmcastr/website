import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuex, { storeKey } from './vuex';

createApp({
  extends: App,
  beforeCreate() {
    this.$store.commit('initializeStore');
  },
}).use(vuex, storeKey)
  .use(router)
  .mount('#app');
