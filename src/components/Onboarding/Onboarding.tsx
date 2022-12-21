import React, { useState, useRef } from 'react'
import * as S from './OnboardingStyles'
import { Logo } from '../Logo/Logo'
import SlideOneSvg from '../../assets/slide-1.svg'
import SlideTwoSvg from '../../assets/slide-2.svg'
import SlideTreeSvg from '../../assets/slide-3.svg'
import SlideFourSvg from '../../assets/slide-4.svg'
import SlideFiveSvg from '../../assets/slide-5.svg'
import { onboardingData } from './onboardingData'
import { OnboardingItem } from './OnboardingItem/OnboardItem'
import * as slidesContent from './OnboardItemsTitleAndDescriptions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef
} from 'react-native-reanimated'
import { Paginator } from './Paginator/Paginator'
import { Button } from '../Button/Button'

interface OnboardingProps {
  setViewOnboarding: (state: boolean) => void
}

export function Onboarding({ setViewOnboarding }: OnboardingProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const renderItem = ({ item }) => {
    return (
      <OnboardingItem svg={slideImages[item.svgName]}>
        {onBoardingItemsContent[item.slideTitleAndDescription]}
      </OnboardingItem>
    )
  }

  const scrollX = useSharedValue(0)

  const slideRef = useAnimatedRef<any>()

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x
    }
  })

  async function nextSlide() {
    if (currentIndex < onboardingData.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 })
    } else {
      try {
        await AsyncStorage.setItem('@glam:viewedOnboarding', 'true')
        setViewOnboarding(true)
      } catch (err) {
        console.warn(err)
      }
    }
  }

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({ itemVisiblePercentThreshold: 50 }).current

  const slideImages = {
    slideOneSvg: SlideOneSvg,
    slideTwoSvg: SlideTwoSvg,
    slideTreeSvg: SlideTreeSvg,
    slideFourSvg: SlideFourSvg,
    slideFiveSvg: SlideFiveSvg
  }

  const onBoardingItemsContent = {
    slideOneTitleAndDescription: <slidesContent.SlideOneTitleAndDescription />,
    slideTwoTitleAndDescription: <slidesContent.SlideTwoTitleAndDescription />,
    slideTreeTitleAndDescription: (
      <slidesContent.SlideTreeTitleAndDescription />
    ),
    SlideFourTitleAndDescription: (
      <slidesContent.SlideFourTitleAndDescription />
    ),
    slideFiveTitleAndDescription: <slidesContent.SlideFiveTitleAndDescription />
  }

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Logo width={55} height={32} />
        </S.Header>

        <Animated.FlatList
          data={onboardingData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfig}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          onScroll={onScroll}
          scrollEventThrottle={16}
          onViewableItemsChanged={onViewableItemsChanged}
          decelerationRate="normal"
          ref={slideRef}
        />

        <S.ButtonAndPaginatorContainer>
          <Paginator scrollX={scrollX} data={onboardingData} />
          <Button onPress={() => nextSlide()}>
            {onboardingData[currentIndex].buttonText}
          </Button>
        </S.ButtonAndPaginatorContainer>
      </S.Content>
    </S.Container>
  )
}
