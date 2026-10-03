import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'
import ThemedTextInput from '../components/ThemedTextInput'

const login = () => {
  const router = useRouter()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [user, setUser] = useState(null)

  const handleLogin = () => {
    console.log('Logined User:', user)
    console.log('Login Button pressed', { email, password })
    router.replace('/')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.title}>Login</ThemedText>
      <Spacer height={100} />
      <ThemedTextInput text="Email" style={styles.input} onChangeText={setEmail} />
      <Spacer height={10} />
      <ThemedTextInput text="Password" secureTextEntry={true} style={styles.input} onChangeText={setPassword} />
      <ThemedButton onPress={handleLogin}>
        <ThemedText>Login</ThemedText>
      </ThemedButton>
      <Spacer height={10} />
      <Link href="/(auth)/register">
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
    input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
})