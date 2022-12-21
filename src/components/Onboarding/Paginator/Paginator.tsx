import React from 'react'
import { wp } from '../../../utils/dimensions'
import { Container } from './PaginatorStyles'
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  interpolateColor
} from 'react-native-reanimated'
import theme from '../../../styles/theme'

interface PaginatorProps {
  data: any
  scrollX: any
}

export function Paginator({ data, scrollX }: PaginatorProps) {
  return (
    <Container>
      {data.map((_, index: number) => {
        const inputRange = [
          (index - 1) * wp(335),
          index * wp(335),
          (index + 1) * wp(335)
        ]
        const animatedDotStyle = useAnimatedStyle(() => {
          const widthAnimation = interpolate(
            scrollX.value,
            inputRange,
            [21, 35, 21],
            Extrapolate.CLAMP
          )
          const backgroundAnimation = interpolateColor(
            scrollX.value,
            inputRange,
            [theme.colors.gray, '#F5816E', theme.colors.gray]
          )
          return {
            width: widthAnimation,
            backgroundColor: backgroundAnimation
          }
        })

        return (
          <Animated.View
            style={[
              {
                marginHorizontal: wp(10),
                borderRadius: 5,
                height: 9
              },
              animatedDotStyle
            ]}
            key={index.toString()}
          ></Animated.View>
        )
      })}
    </Container>
  )
}
