"use client";
import { useState, useEffect, useCallback } from 'react'

type Mode = 'light' | 'dark' | 'system'

export const useDarkMode = () => {
  const [mode, setMode] = useState<Mode>('system')

  const applyTheme = useCallback((isDark: boolean) => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [])

  const changeMode = useCallback((newMode: Mode) => {
    setMode(newMode)
    localStorage.setItem('theme', newMode)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Mode | null
    if (savedTheme) {
      setMode(savedTheme)
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (mode === 'system') {
        applyTheme(event.matches)
      }
    }

    const applyCurrentTheme = () => {
      if (mode === 'system') {
        applyTheme(mediaQuery.matches)
      } else {
        applyTheme(mode === 'dark')
      }
    }

    applyCurrentTheme()

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [mode, applyTheme])

  return { mode, changeMode }
}