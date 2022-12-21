import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { hp } from '../../utils/dimensions'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
`

export const Content = styled.View`
  padding: 50px 20px 24px 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_bold};
  text-align: center;
`

export const Instruction = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_semi_bold};
  margin-bottom: ${hp(68)}px;
  line-height: 16px;
  text-align: center;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${hp(32)}px;
`

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0 20px 24px 20px;
`
