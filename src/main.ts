import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useGlobal } from './store.ts'
import App from './App.vue'
import './style.css'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const global = useGlobal()

await global.init()
global.load()

setInterval(() => global.save(), 60000)
window.addEventListener('beforeunload', () => global.save())

setInterval(() => global.tick(), 1000)

if (import.meta.env.DEV) {
  window.addEventListener('keydown', async (e) => {
    if (e.key === 'k' && e.altKey && !e.repeat) {
      global.$reset()
      await global.init()
      localStorage.removeItem('lastRecipeId')
    }
  })
}

app.mount('#app')
