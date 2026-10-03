import {StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useColorScheme } from 'react-native'
import ThemedView from './components/ThemedView'
import { colors } from '../constants/colors'
import ThemedText from './components/ThemedText'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={[styles.title, { color: theme.text }]}>About Page</ThemedText>
      <Link href="/" style={[styles.link, { color: theme.primary }]}>
        <ThemedText>Home Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About

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
})

