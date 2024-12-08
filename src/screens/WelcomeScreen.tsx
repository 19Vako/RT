import React, { useRef, useState } from 'react';
import { StyleSheet, ImageBackground, Image, View, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';



const WelcomeScreen = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigation = useNavigation<any>();

  const slides = [
    {
      image: require('../images/slideImg1.png'),
      text: 'Приветствуем вас в захватывающем мире  — вашего надежного напарника для успешного трейдинга! Наше приложение предоставляет уникальную возможность измерить ваш уровень стресса и толерантности к риску, что поможет вам принимать более обоснованные и эффективные решения в мире финансов.',
    },
    {
      image: require('../images/slideImg2.png'),
      text: 'Наше приложение предлагает инновационные инструменты и метрики, которые помогут вам эффективно управлять вашими инвестициями и снизить финансовые риски.',
    },
    {
      image: require('../images/slideImg3.png'),
      text: 'Давайте вместе создадим успех в мире трейдинга! Наше приложение поможет вам развивать вашу финансовую стратегию, улучшать вашу торговую дисциплину и достигать ваших финансовых целей.',
    },
  ];

  const handleNextSlide = () => {
    if (swiperRef.current) {
      if (currentSlideIndex === slides.length - 1) {
        navigation.navigate('Menu'); // Перейти на другую страницу
      } else {
        swiperRef.current.scrollBy(1); // Переключаемся на следующий слайд
      }
    }
  };

  const handleIndexChanged = (index: number) => {
    setCurrentSlideIndex(index); // Обновляем индекс текущего слайда
  };

  return (
    <ImageBackground
      source={require('../images/welcomeBackground.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        onIndexChanged={handleIndexChanged} // Обновляем индекс при смене слайда
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.text}>{slide.text}</Text>
          </View>
        ))}
      </Swiper>

      <TouchableOpacity style={styles.button} onPress={handleNextSlide}>
        <Text style={styles.buttonText}>
        Приступить
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  slide: {
    marginTop:scaleHeight(174),
  },
  image: {
    width: scale(331),
    height: scaleHeight(386),
    borderRadius: scale(26),
    marginLeft: scale(50),
  },
  text: {
    width: scale(365),
    height: scaleHeight(126),
    marginTop: scaleHeight(50),
    color: '#fff',
    fontSize: scale(14),
    fontFamily: 'KulimPark-Regular',
    marginHorizontal: scale(33),
    padding: 1,
  },

  button: {
    position: 'absolute',
    width: scale(287),
    height: scaleHeight(48),
    top: scaleHeight(815),
    left: scale(72),
    backgroundColor: '#449682',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(7),
  },

  buttonText: {
    color: '#fff',
    fontSize: scale(18),
    fontFamily: 'KulimPark-Regular',
  },

  dot: {
    backgroundColor: '#44968280',
    width: scale(40),
    height: scaleHeight(6),
    borderRadius: 0,
    marginLeft: scale(10),
    marginRight: scale(10),
    bottom: isIPhoneSE ? scaleHeight(300) : scaleHeight(320),
  },

  activeDot: {
    backgroundColor: '#449682',
    width: scale(40),
    height: scaleHeight(6),
    borderRadius: 0,
    marginLeft: scale(10),
    marginRight: scale(10),
    bottom: isIPhoneSE ? scaleHeight(300) : scaleHeight(320),
  },

});

export default WelcomeScreen;
