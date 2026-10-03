import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'
import ThemedTextInput from '../components/ThemedTextInput'

const register = () => {
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleCreateAccount = () => {
    console.log('Create Account Button pressed', { email, password })
    router.replace('/')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText style={styles.title}>Create Account</ThemedText>
        <Spacer height={100} />
        <ThemedTextInput text="Email" style={styles.input} onChangeText={setEmail} />
        <Spacer height={10} />
        <ThemedTextInput text="Password" secureTextEntry={true} style={styles.input} onChangeText={setPassword} />
        <Spacer height={10} />
        <ThemedTextInput text="Confirm Password" secureTextEntry={true} style={styles.input} onChangeText={setPassword} />
        <Spacer height={10} />

        <ThemedButton onPress={handleCreateAccount}>
          <ThemedText>Create Account</ThemedText>
        </ThemedButton>
        <Spacer height={100} />
        <Link href="/(auth)/login">
          <ThemedText>Already have an account? Login</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
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
    input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
})