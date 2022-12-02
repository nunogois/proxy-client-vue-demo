import { createApp } from 'vue'
import { plugin as unleashPlugin } from '@unleash/proxy-client-vue'

import App from './App.vue'

const config = {
  url: 'https://unleash-proxy.nunogois.com/proxy',
  clientKey: 'ng-unleash-secret',
  refreshInterval: 2,
  appName: 'unleash-test',
  environment: 'dev'
}

const app = createApp(App)
// Alternative: Using plugin
// app.use(unleashPlugin, { config })
app.mount('#app')
