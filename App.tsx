import React from 'react'
import { SignIn } from './src/Screen/SignIn'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'

export default function App () {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontLoaded) {

  }

  return (
    <SignIn />
  )
}