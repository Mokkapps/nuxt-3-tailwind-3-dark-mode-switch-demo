<template>
  <div
    :class="{
      'theme-light': theme === 'light',
      'theme-dark': theme === 'dark',
    }"
    class="h-screen bg-themeBackground p-5"
  >
    <h1 class="text-themeText">Nuxt 3 Tailwind Dark Mode Demo</h1>
    <Toggle v-model="themeModel" off-label="Light" on-label="Dark" />
  </div>
</template>

<script setup lang="ts">
import Toggle from '@vueform/toggle'
import { useTheme } from '~/composables/useTheme'
import { useState } from '#app'
import { watch } from '@vue/runtime-core'

const { theme, setTheme } = useTheme()

const themeModel = useState('theme', () => theme.value === 'dark')

watch(themeModel, (selected) => {
  setTheme(selected ? 'dark' : 'light')
})
</script>

<style src="@vueform/toggle/themes/default.css"></style>
