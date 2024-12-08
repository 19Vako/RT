/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import BrightnessSlider from '../elements/buttons/CustomSlider';

export default function ScreenSettingsScreen() {
  const { white, dark, red, green} = useStore();
  const navigation = useNavigation<any>();

  // Состояние для хранения выбранного цвета
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handlePress = (color: string) => {
    setSelectedColor(color); // Устанавливаем цвет как выбранный
  };

  return (
    <BackgroundWrapper>
      <Text style={styles.description}>Сменить цвет кнопок</Text>
      <TouchableOpacity style={styles.closeContainer} onPress={() => navigation.navigate('Settings')}>
        <ImageBackground
          source={require('../images/icons/closeIcon.png')}
          resizeMode="cover"
          style={styles.closeIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.whiteBox,
          selectedColor === 'white' && styles.selectedBox, // Добавляем стиль, если выбран
        ]}
        onPress={() => {handlePress('white'); white();}}
      >
        {selectedColor === 'white' && <View style={styles.innerSquare} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.grayBox,
          selectedColor === 'gray' && styles.selectedBox,
        ]}
        onPress={() => {handlePress('gray'); dark();}}
      >
        {selectedColor === 'gray' && <View style={[styles.innerSquare, { backgroundColor: '#262626' }]} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.redBox,
          selectedColor === 'red' && styles.selectedBox,
        ]}
        onPress={() => {handlePress('red'); red();}}
      >

        {selectedColor === 'red' && <View style={[styles.innerSquare, { backgroundColor: '#FF0A0A' }]} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.greenBox,
          selectedColor === 'green' && styles.selectedBox,
        ]}
        onPress={() => {handlePress('green'); green();}}
      >
        {selectedColor === 'green' && <View style={[styles.innerSquare, { backgroundColor: '#12FF54' }]} />}
      </TouchableOpacity>
      <Text style={{position: 'absolute', top: scaleHeight(246), left: scale(37), color: '#FFFFFF'}}>Установить яркость</Text>

      <View style={{position: 'absolute', left: scale(25), top: scaleHeight(295)}}>
        <BrightnessSlider />
      </View>


    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  closeContainer: {
    position: 'absolute',
    width: scale(24.83),
    height: scaleHeight(24.83),
    top: scaleHeight(95),
    left: scale(369),
  },
  closeIcon: {
    flex: 1,
    width: scale(20.69),
    height: isIPhoneSE ? scaleHeight(25) : scaleHeight(20.69),
  },
  description: {
    width: scale(261),
    height: scaleHeight(25),
    top: scaleHeight(98),
    left: scale(46),
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
    color: '#FFFFFF',
  },
  whiteBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: scaleHeight(149),
    left: scale(40),
    width: scale(37),
    height: scaleHeight(37),
    borderWidth: scale(2),
    borderColor: '#FFFFFF',
    borderRadius: scale(4),
  },
  grayBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: scaleHeight(149),
    left: scale(112),
    width: scale(37),
    height: scaleHeight(37),
    borderWidth: scale(2),
    borderColor: '#262626',
    borderRadius: scale(4),
  },
  redBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: scaleHeight(149),
    left: scale(184),
    width: scale(37),
    height: scaleHeight(37),
    borderWidth: scale(2),
    borderColor: '#FF0A0A',
    borderRadius: scale(4),
  },
  greenBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: scaleHeight(149),
    left: scale(256),
    width: scale(37),
    height: scaleHeight(37),
    borderWidth: scale(2),
    borderColor: '#12FF54',
    borderRadius: scale(4),
  },
  selectedBox: {
    borderWidth: scale(3),
  },
  innerSquare: {
    width: scale(17),
    height: scaleHeight(17),
    backgroundColor: '#FFFFFF', // Белый по умолчанию
    alignSelf: 'center',
    borderRadius: scale(4),
  },
});
