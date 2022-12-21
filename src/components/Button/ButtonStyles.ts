import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { hp } from '../../utils/dimensions'

export const Container = styled(RectButton)`
  width: 100%;
  height: ${hp(48)}px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

interface ButtonTextProps {
  color?: string
}

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_bold};
`
