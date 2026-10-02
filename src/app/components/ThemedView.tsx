import { useColorScheme, View, type StyleProp, type ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

type ThemedViewProps = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const ThemedView = ({ style, children }: ThemedViewProps) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return <View style={[{ backgroundColor: theme.background }, style]}>{children}</View>
}

export default ThemedView