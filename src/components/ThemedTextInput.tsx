import { StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native'
import React from 'react'

type ThemedTextInputProps = {
  style?: StyleProp<TextStyle>
  text?: string
  placeholder?: string
  secureTextEntry?: boolean
  onChangeText?: (text: string) => void
}

const ThemedTextInput = ({ style, text, placeholder, secureTextEntry, onChangeText }: ThemedTextInputProps) => {
  return (
    <TextInput
      style={[
        {
          width: '100%',
          backgroundColor: '#F8FAFC',
          color: '#0F172A',
          borderWidth: 1,
          borderColor: '#E2E8F0',
          borderRadius: 12,
          paddingHorizontal: 14,
          paddingVertical: 12,
          fontSize: 16,
        },
        style,
      ]}
      value={text}
      placeholder={placeholder}
      placeholderTextColor="#64748B"
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})