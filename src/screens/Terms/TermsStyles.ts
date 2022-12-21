import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { hp } from '../../utils/dimensions'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  padding: 50px 20px 24px 20px;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${hp(30)}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_bold};
  margin-bottom: ${hp(24)}px;
  text-align: center;
`
export const TermsText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_semi_bold};
  text-align: justify;
  line-height: 16px;
  margin-bottom: 24px;
`
