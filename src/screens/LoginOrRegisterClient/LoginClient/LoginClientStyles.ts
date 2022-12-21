import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { hp } from '../../../utils/dimensions'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 20px 0px 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_bold};
  margin-bottom: ${hp(3)}px;
`
export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
  opacity: 0.5;
  font-family: ${({ theme }) => theme.fonts.nunito_semi_bold};
  margin-bottom: ${hp(22)}px;
`

export const LinKContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px;
`
