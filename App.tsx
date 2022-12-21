import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import 'react-native-gesture-handler'
import { Routes } from './src/routes'
import * as SplashScreen from 'expo-splash-screen'
import theme from './src/styles/theme'
import * as Font from 'expo-font'
import {
  NunitoSans_700Bold,
  NunitoSans_600SemiBold,
  NunitoSans_800ExtraBold,
  NunitoSans_400Regular
} from '@expo-google-fonts/nunito-sans'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { Onboarding } from './src/components/Onboarding/Onboarding'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

SplashScreen.preventAutoHideAsync()
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [userViewedOnboarding, setUserViewdOnBoarding] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          NunitoSans_700Bold,
          NunitoSans_600SemiBold,
          NunitoSans_800ExtraBold,
          NunitoSans_400Regular
        })
        const viewedOnboarding = await AsyncStorage.getItem(
          '@glam:viewedOnboarding'
        )

        if (viewedOnboarding) {
          setUserViewdOnBoarding(true)
        }
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {userViewedOnboarding ? (
            <Routes />
          ) : (
            <Onboarding setViewOnboarding={setUserViewdOnBoarding} />
          )}
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
