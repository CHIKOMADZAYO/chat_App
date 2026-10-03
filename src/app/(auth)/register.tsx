import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'

const register = () => {
// Function to handle create account logic
  const handleCreateAccount = () => {
    // Handle create account logic here
    console.log('Create Account Button pressed')
  }
  return (
    <ThemedView style={styles.container}>
        <Spacer/>
      <ThemedText style={styles.title}>Create Account</ThemedText>
     
      <ThemedButton  onPress={handleCreateAccount} >
        <ThemedText>Create Account</ThemedText>
      </ThemedButton>
      <Spacer height={100} />
      <Link href="/login">
        <ThemedText>Already have an account? Login</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default register

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
    button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
})