import { StyleProp, StyleSheet, Text, TextStyle, useColorScheme } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

type ThemedTextProps = {
  children?: React.ReactNode
  style?: StyleProp<TextStyle>
}

const ThemedText = ({ children, style }: ThemedTextProps) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  const textStyle = style ? [style, { color: theme.text }] : { color: theme.text }

  return <Text style={textStyle}>{children}</Text>
}

export default ThemedText

const styles = StyleSheet.create({})