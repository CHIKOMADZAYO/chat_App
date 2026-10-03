import {StyleSheet } from 'react-native'
import ThemedView from '../components/ThemedView'
import { Link } from 'expo-router'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import profile from './profile'



const create=() => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>Create Page</ThemedText>
      <Spacer height={20} />
      <Link href="/" style={{ fontSize: 18 }}>
        <ThemedText>Home Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})