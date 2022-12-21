import { ReactNode } from 'react'
import { SvgProps } from 'react-native-svg'
import styled from 'styled-components/native'
import { wp, hp } from '../../../utils/dimensions'

export const Container = styled.View`
  align-items: center;
  width: ${wp(335)}px;
`
export const SlideImageContainer = styled.View`
  margin-bottom: ${hp(34)}px;
`

interface OnboardingItemProps {
  children?: ReactNode
  svg: React.FC<SvgProps>
}

export function OnboardingItem({ svg: Svg, children }: OnboardingItemProps) {
  return (
    <Container>
      <SlideImageContainer>
        <Svg width={wp(248)} height={hp(273)} />
      </SlideImageContainer>
      {children}
    </Container>
  )
}
