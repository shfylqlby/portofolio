import { createApp } from 'vue'
import App from './App.vue'
import router from './components/route/index.js'
import './style.css'

import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const userLang = navigator.language.startsWith('id') ? 'id' : 'en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: userLang,
  fallbackLocale: 'en',
  messages: {
    en,
    id
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
