import { onMounted, Ref, ref } from '@vue/runtime-core'

export type Theme = 'light' | 'dark'

const LOCAL_STORAGE_THEME_KEY = 'theme'

export const useTheme = () => {
  const theme: Ref<Theme> = ref('dark')

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    theme.value = newTheme
  }

  onMounted(() => {
    const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches

    const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

    if (themeFromLocalStorage) {
      theme.value = themeFromLocalStorage
    } else {
      setTheme(isDarkModePreferred ? 'dark' : 'light')
    }
  })

  return { theme, setTheme }
}
