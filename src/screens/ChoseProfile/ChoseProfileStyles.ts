import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { wp, hp } from '../../utils/dimensions'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  width: 100%;
  padding: 0 ${wp(20)}px;
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_bold};
  margin-top: ${hp(34)}px;
  margin-bottom: ${hp(50)}px;
`
export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_bold};
  text-align: center;
  margin-bottom: ${hp(32)}px;
`
