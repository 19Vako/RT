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
      text: 'Welcome to the exciting world — your trusted partner for successful trading! Our app provides a unique opportunity to measure your stress level and risk tolerance, helping you make more informed and effective decisions in the financial world.',
    },
    {
      image: require('../images/slideImg2.png'),
      text: 'Our app offers innovative tools and metrics to help you effectively manage your investments and reduce financial risks.',
    },
    {
      image: require('../images/slideImg3.png'),
      text: 'Let’s create success together in the world of trading! Our app will help you develop your financial strategy, improve your trading discipline, and achieve your financial goals.',
    },
  ];

  const handleNextSlide = () => {
    if (swiperRef.current) {
      if (currentSlideIndex === slides.length - 1) {
        navigation.navigate('Menu'); // Navigate to another page
      } else {
        swiperRef.current.scrollBy(1); // Move to the next slide
      }
    }
  };

  const handleIndexChanged = (index: number) => {
    setCurrentSlideIndex(index); // Update the current slide index
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
        onIndexChanged={handleIndexChanged} // Update index when slide changes
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
        Start
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
    marginTop: scaleHeight(174),
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
