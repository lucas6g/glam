import styled from 'styled-components/native'
import { wp, hp } from '../../utils/dimensions'

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const LogoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 32px;
`
