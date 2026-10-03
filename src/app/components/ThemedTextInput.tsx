import { StyleSheet, Text, View, ViewStyle, StyleProp, TextInput} from 'react-native'
import React from 'react'

type ThemedTextInputProps = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  text?: string
  secureTextEntry?: boolean
  onChangeText?: (text: string) => void
  
}

const ThemedTextInput = ({style, children, text, secureTextEntry, onChangeText}: ThemedTextInputProps) => {
  return (
    <TextInput style={[{backgroundColor: 'white', color: 'black'}, style]} value={text} secureTextEntry={secureTextEntry} onChangeText={onChangeText}>
      {children}
    </TextInput>
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})