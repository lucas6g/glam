import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { wp, hp } from '../../utils/dimensions'

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_semi_bold};
  margin-bottom: ${hp(12)}px;
`
export const TitleContrast = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_semi_bold};
`
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_semi_bold};
  text-align: center;
  margin-bottom: ${hp(20)}px;
  opacity: 0.8;
`
export const DescriptionBold = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.nunito_extra_bold};
`

export function SlideOneTitleAndDescription() {
  return (
    <>
      <Title>
        Bem-vindo ao <TitleContrast>Glam</TitleContrast>
      </Title>
      <Description>
        Pra você, <DescriptionBold>Cliente</DescriptionBold>, o Glam é o
        aplicativo que leva a beleza e bem-estar até você ou, se preferir, você
        pode ir até um espaço de beleza parceiro Glam com qualidade e comodidade
        que você merece.
      </Description>
      <Description>
        Para você, <DescriptionBold>Profissional</DescriptionBold>, o Glam é o
        aplicativo que irá te ajudar a alavancar seus atendimentos e organizar a
        sua gestão, podendo você escolher ir até o cliente, recebêlo no seu
        espaço ou se preferir, as duas opções são possíveis.
      </Description>
    </>
  )
}
export function SlideTwoTitleAndDescription() {
  return (
    <>
      <Title>Facilidade</Title>
      <Description>
        O <DescriptionBold>Cliente</DescriptionBold> escolhe o serviço, o
        profissional e local de sua preferência. Reserva dia, o horário e por
        quem deseja ser atendido.
      </Description>
      <Description>
        O <DescriptionBold>Profissional</DescriptionBold> tem na palma da mão
        uma agenda inteligente, com métricas dos seus atendimentos e podendo ser
        controlada quando e onde quiser.
      </Description>
    </>
  )
}
export function SlideTreeTitleAndDescription() {
  return (
    <>
      <Title>Finalize</Title>
      <Description>
        O <DescriptionBold>Cliente</DescriptionBold> pagará de forma rápida e
        segura com seu cartão de crédito ou pix.
      </Description>
    </>
  )
}
export function SlideFourTitleAndDescription() {
  return (
    <>
      <Title>Receba</Title>
      <Description>
        Pronto! Agora só aguardar a confirmação do{' '}
        <DescriptionBold>Profissional</DescriptionBold> e se preparar para
        receber a sua melhor versão.
      </Description>
    </>
  )
}
export function SlideFiveTitleAndDescription() {
  return (
    <>
      <Title>Segurança</Title>
      <Description>
        O <DescriptionBold>Cliente</DescriptionBold> tem a garantia de segurança
        dos seus dados e realização dos serviços onde desejar. O Profissional
        tem a garantia de receber conforme acordo da parceria Glam
      </Description>
    </>
  )
}
