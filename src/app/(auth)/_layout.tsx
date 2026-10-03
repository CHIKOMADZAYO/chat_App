import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Stack >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})