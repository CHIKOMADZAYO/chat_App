import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useColorScheme } from 'react-native'
import ThemedView from './components/ThemedView'
import ThemedCard from './components/ThemedCard'
import { colors } from '../constants/colors'

const Contact = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <ThemedView style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>Contact Page</Text>
      <Link href="/" style={[styles.link, { color: theme.primary }]}>Home Page</Link>
      <ThemedCard>
        <Text style={[styles.cardText, { color: theme.text }]}>This is a themed card.</Text>
      </ThemedCard>
    </ThemedView>
  )
}

export default Contact

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
  link: {
    fontSize: 18,
    marginTop: 20,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
  },
})