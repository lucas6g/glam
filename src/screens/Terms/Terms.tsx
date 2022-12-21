import { View } from 'react-native'
import React from 'react'
import { BackButton } from '../../components/BackButton/BackButton'
import { Container, Content, Header, TermsText, Title } from './TermsStyles'
import { Logo } from '../../components/Logo/Logo'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export function Terms() {
  const navigation = useNavigation()
  return (
    <Container>
      <Content>
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
          <Logo width={55} height={32} />

          <View />
        </Header>

        <Title>Termos de Serviço</Title>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TermsText>
              pellentesque sit amet porttitor. Et malesuada fames ac turpis
              egestas sed. Egestas tellus rutrum tellus pellentesque eu
              tincidunt tortor aliquam. Lectus urna duis convallis convallis
              tellus id interdum velit laoreet. Nulla malesuada pellentesque
              elit eget gravida. Ut morbi tincidunt augue interdum. Tellus
              integer feugiat scelerisque varius morbi. Nec dui nunc mattis enim
              ut. Pharetra magna ac placerat vestibulum. Nec nam aliquam sem et.
              Nibh praesent tristique magna sit amet purus gravida. Vitae
              ultricies leo integer malesuada nunc vel risus. Dui id ornare arcu
              odio ut sem nulla. Habitasse platea dictumst quisque sagittis
              purus sit. Lacus suspendisse faucibus interdum posuere lorem ipsum
              dolor sit. Et tortor consequat id porta nibh venenatis cras sed.
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </TermsText>
            <TermsText>
              pellentesque sit amet porttitor. Et malesuada fames ac turpis
              egestas sed. Egestas tellus rutrum tellus pellentesque eu
              tincidunt tortor aliquam. Lectus urna duis convallis convallis
              tellus id interdum velit laoreet. Nulla malesuada pellentesque
              elit eget gravida. Ut morbi tincidunt augue interdum. Tellus
              integer feugiat scelerisque varius morbi. Nec dui nunc mattis enim
              ut. Pharetra magna ac placerat vestibulum. Nec nam aliquam sem et.
              Nibh praesent tristique magna sit amet purus gravida. Vitae
              ultricies leo integer malesuada nunc vel risus. Dui id ornare arcu
              odio ut sem nulla. Habitasse platea dictumst quisque sagittis
              purus sit. Lacus suspendisse faucibus interdum posuere lorem ipsum
              dolor sit. Et tortor consequat id porta nibh venenatis cras sed.
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </TermsText>
            <TermsText>
              pellentesque sit amet porttitor. Et malesuada fames ac turpis
              egestas sed. Egestas tellus rutrum tellus pellentesque eu
              tincidunt tortor aliquam. Lectus urna duis convallis convallis
              tellus id interdum velit laoreet. Nulla malesuada pellentesque
              elit eget gravida. Ut morbi tincidunt augue interdum. Tellus
              integer feugiat scelerisque varius morbi. Nec dui nunc mattis enim
              ut. Pharetra magna ac placerat vestibulum. Nec nam aliquam sem et.
              Nibh praesent tristique magna sit amet purus gravida. Vitae
              ultricies leo integer malesuada nunc vel risus. Dui id ornare arcu
              odio ut sem nulla. Habitasse platea dictumst quisque sagittis
              purus sit. Lacus suspendisse faucibus interdum posuere lorem ipsum
              dolor sit. Et tortor consequat id porta nibh venenatis cras sed.
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </TermsText>
          </View>
        </ScrollView>
      </Content>
    </Container>
  )
}
