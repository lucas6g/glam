import React, { ReactNode } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from 'styled-components'
import { Container, ButtonText } from './ButtonStyles'
import { hp } from '../../utils/dimensions'

interface ButtonProps extends RectButtonProperties {
  children: ReactNode
  color?: string
  onPress?: () => void
  enabled?: boolean
  loading?: boolean
  textColor?: string
}

export function Button({
  children,
  onPress,
  enabled = true,
  loading = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme()

  const boxShadow = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }

  return (
    <View style={[boxShadow, { width: '100%' }]}>
      <LinearGradient
        style={{
          width: '100%',
          height: hp(48),
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: enabled === false || loading === true ? 0.7 : 1,
          ...boxShadow
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0.1 }}
        locations={[0, 1]}
        colors={[
          theme.colors.gradient.primary,
          theme.colors.gradient.secundary
        ]}
      >
        <Container enabled={enabled} onPress={onPress} {...rest}>
          {loading ? (
            <ActivityIndicator color={theme.colors.white} />
          ) : (
            <ButtonText>{children} </ButtonText>
          )}
        </Container>
      </LinearGradient>
    </View>
  )
}
