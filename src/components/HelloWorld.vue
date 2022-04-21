<script setup lang="ts">
import { useFlag, useFlagsStatus, useVariant } from '@unleash/proxy-client-vue'

const enabled = useFlag('test-feature')
const variant = useVariant('test-feature')
const { flagsReady } = useFlagsStatus()
</script>

<template>
  <h1>proxy-client-vue</h1>

  <div v-if="!flagsReady">Loading...</div>
  <div v-else :style="`font-size:24px; color: ${enabled ? 'green' : 'red'}`">
    {{ enabled ? 'Feature is enabled!' : 'Feature is disabled!' }}
    <div v-if="variant.enabled">
      {{ variant.name }}
    </div>
  </div>

  <p style="max-width: 400px; margin: auto; padding: 20px">
    Check out <a href="https://www.getunleash.io/">Unleash</a> - An open-source
    Feature Management Service that allows you to manage your feature roll-out
    like a pro.
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
