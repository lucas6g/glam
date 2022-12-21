import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { hp } from '../../utils/dimensions'
import { BorderlessButton } from 'react-native-gesture-handler'

export const InputBlock = styled.View``

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_semi_bold};
  margin-bottom: ${hp(8)}px;
`
export const ErrorMessage = styled.Text`
  margin-top: ${hp(8)}px;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_semi_bold};
`

export const InputContainer = styled.View`
  height: 100%;
  width: 100%;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`

export const SeePasswordButton = styled(BorderlessButton)`
  position: absolute;
  right: 12px;
  height: 100%;
  justify-content: center;
`
