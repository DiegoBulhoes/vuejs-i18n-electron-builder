import Vue from 'vue';
import './plugins/vuetify';
import VueI18n from 'vue-i18n';
import messages from '../i18n/mensages';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const lang = window.navigator.userLanguage || window.navigator.language || 'en';

const i18n = new VueI18n({
  locale: lang.substr(0, 2),
  messages,
  fallbackLocale: 'en',
  silentTranslationWarn: false,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
