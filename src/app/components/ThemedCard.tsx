import { StyleSheet, type StyleProp, type ViewStyle, View, useColorScheme } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

type ThemedCardProps = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const ThemedCard = ({ style, children }: ThemedCardProps) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <View style={[styles.cardText, { backgroundColor: theme.card }, style]}>
      {children}
    </View>
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  cardText: {
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
})

