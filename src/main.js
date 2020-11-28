import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
window.translation = {
  en: {
    header: {

    },
    message: {
      header_phrase: 'Social network for doctors',
    }
  },
  ru: {
    message: {
      header_phrase: 'Социальная сеть для докторов'
    }
  }
}
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ru',
  messages: window.translation,
  fallbackLocale: 'en'
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
