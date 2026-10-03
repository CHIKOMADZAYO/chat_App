import { View, useColorScheme, type StyleProp, type ViewStyle } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../../constants/colors'

type ThemedViewProps = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  safeArea?: boolean
}

const ThemedView = ({ style, children, safeArea = false }: ThemedViewProps) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  if (!safeArea) {
    return (
      <View style={[{ backgroundColor: theme.background }, style]}>
        {children}
      </View>
    )
  }

  const insets = useSafeAreaInsets()

  return (
    <View style={[{ backgroundColor: theme.background,
  paddingTop: insets.top, paddingBottom: insets.bottom

     }, style]}>
          {children}
    </View>
  )
}

export default ThemedView