import {StyleSheet } from 'react-native'
import ThemedView from '../components/ThemedView'
import { Link } from 'expo-router'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import profile from './profile'



const list=() => {
  return (
    <ThemedView style={styles.container } safeArea={true}>
      <ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>List Page</ThemedText>
      <Spacer height={20} />
      <Link href="/" style={{ fontSize: 18 }}>
        <ThemedText>Home Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default list

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})