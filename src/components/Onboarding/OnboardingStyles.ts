import styled from 'styled-components/native'
import { wp, hp } from '../../utils/dimensions'

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${hp(50)}px;
`

export const Content = styled.View`
  padding: 0 ${wp(20)}px;
  align-items: center;
  width: 100%;
  flex: 1;
  padding-bottom: ${hp(20)}px;
  position: relative;
`
export const Header = styled.View`
  width: 100%;
  margin-bottom: ${hp(51)}px;
`

export const ButtonAndPaginatorContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-self: flex-end;
  position: absolute;
  bottom: 20px;
`
