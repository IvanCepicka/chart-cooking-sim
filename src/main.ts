import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useGlobal } from './store.ts'
import App from './App.vue'
import './style.css'
import { db } from './db.ts'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const global = useGlobal()

await global.init()
global.load()

setInterval(() => global.save(), 60000)
window.addEventListener('beforeunload', () => global.save())

setInterval(() => global.tick(), 1000)

let kPresses = 0
window.addEventListener('keydown', async (e) => {
  if (e.key === 'k' && e.altKey && !e.repeat) {
    kPresses++
    if (kPresses >= 7) {
      global.$reset()
      await global.init()
      await db.recipes.clear()
      localStorage.removeItem('lastRecipeId')
      kPresses = 0
    }
  }
})

setInterval(() => {
  if (kPresses > 0) kPresses--
}, 500)

app.mount('#app')
