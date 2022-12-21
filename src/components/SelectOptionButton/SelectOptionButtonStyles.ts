import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { hp } from '../../utils/dimensions'

interface ContainerPros {
  filedColor?: string
}

export const Container = styled(RectButton).attrs({
  borderRadios: 6
})<ContainerPros>`
  width: 100%;
  justify-content: center;
  height: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ filedColor }) => filedColor};
`

interface ButtonTextProps {
  textColor?: string
}

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ theme, textColor }) =>
    textColor ? textColor : theme.colors.white};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_bold};
`
