import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const login = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer/>
      <ThemedText style={styles.title}>Login</ThemedText>
      <Spacer height={100} />
      <Link href="/register">
        <ThemedText>Don't have an account? Register</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})