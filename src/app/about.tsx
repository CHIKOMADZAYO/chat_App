import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>
        Home Page
      </Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,     


  },
    link: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
})

