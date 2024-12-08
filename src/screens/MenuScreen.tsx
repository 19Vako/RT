import { Image, StyleSheet, TouchableOpacity, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import OnMenuButton from '../elements/buttons/OnMenuButton';

import { useNavigation } from '@react-navigation/native';
import { useStore } from '../context/Context';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';



export default function MenuScreen() {
  const { theme, colorText } = useStore();
  const navigation = useNavigation<any>();

  return (
   <BackgroundWrapper>

    <View style={[styles.reminders, {backgroundColor: theme}]}>
      <Text style={styles.remindersText}>Напоминание</Text>
      <Text style={[styles.remindersRegulaerText, {color: colorText}]}>Раздел для настройки напоминаний о важных принципах трейдинга и подготовке перед торговой сессией.</Text>
    </View>

    <TouchableOpacity style={styles.afimations} onPress={() => navigation.navigate('Affirmations')}>
      <ImageBackground
        source={require('../images/afimations.png')}
        resizeMode="cover"
        imageStyle={styles.background}
      >
        <Text style={styles.afimationText}>Позитивные аффирмации:</Text>
        <Text style={styles.text}>Раздел с возможностью установки и редактирования позитивных утверждений перед торговыми сессиями. (Возможность рандома)</Text>
      </ImageBackground>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.box, styles.budget, {backgroundColor: theme}]} onPress={() => navigation.navigate('Budget')}>
      <Image style={styles.imageBudget} source={require('../images/icons/budget.png')}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.box, styles.forecastUp, {backgroundColor: theme}]} onPress={() => navigation.navigate('RiskTolerance')}>
      <Image style={styles.imageForecastUp} source={require('../images/icons/upIcon.png')}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.box, styles.forecastDown, {backgroundColor: theme}]} onPress={() => navigation.navigate('PotentialLosses')}>
      <Image style={styles.imageForecastDown} source={require('../images/icons/downIcon.png')}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.box, styles.settings, {backgroundColor: theme}]} onPress={() => navigation.navigate('Settings')}>
      <Image style={styles.imageSettings} source={require('../images/icons/settingIcon.png')}/>
    </TouchableOpacity>

    <View style={styles.onMenu}>
      <OnMenuButton />
    </View>

   </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: scale(331),
    height: scaleHeight(109),
    borderRadius: scale(10),
  },
  reminders: {
    position: 'absolute',
    top: scaleHeight(53),
    left: scale(1),
    width: scale(426),
    height: scaleHeight(103),
  },
  remindersText: {
    width: scale(112),
    height: scaleHeight(50),
    top: isIPhoneSE ? scaleHeight(15) : scaleHeight(23),
    left: scale(23),
    color: '#449882',
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(15),
  },
  remindersRegulaerText: {
    position: 'absolute',
    width: scale(322),
    height: scaleHeight(103),
    top: isIPhoneSE ? scaleHeight(40) : scaleHeight(45),
    left: scale(23),
    fontFamily: 'KulimPark-Regular',
    fontSize: scale(13),
  },
  afimations: {
    width: scale(331),
    height: scaleHeight(109),
    top: scaleHeight(277),
    left: scale(49),
  },
  afimationText: {
    position: 'absolute',
    width: scale(202),
    height: scaleHeight(25),
    top: scaleHeight(16),
    left: scale(22),
    fontSize: scale(14),
    color: '#FFFFFF',
    fontFamily: 'KulimPark-SemiBold',
  },
  text: {
    position: 'absolute',
    top: scaleHeight(47),
    left: scale(22),
    width: scale(251),
    height: scaleHeight(68),
    fontSize: scale(10),
    fontFamily: 'KulimPark-Regular',
    color: '#FFFFFF',

  },
  box: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(112),
    height: isIPhoneSE ? scaleHeight(120) : scaleHeight(110),
    borderRadius: scale(13),
  },
  imageBudget: {
    width: scale(51),
    height: isIPhoneSE ? scaleHeight(60) : scaleHeight(48),
  },
  imageForecastUp: {
    width: scale(49),
    height: isIPhoneSE ? scaleHeight(55) : scaleHeight(44),
  },
  imageForecastDown: {
    width: scale(50),
    height: isIPhoneSE ? scaleHeight(50) : scaleHeight(45),
  },
  imageSettings: {
    width: scale(40),
    height: isIPhoneSE ? scaleHeight(50) : scaleHeight(43),
  },
  budget: {
    top: scaleHeight(436),
    left: scale(64),
  },
  forecastUp: {
    top: scaleHeight(436),
    left: scale(255),
  },
  forecastDown: {
    top: scaleHeight(596),
    left: scale(64),
  },
  settings: {
    top: scaleHeight(596),
    left: scale(255),
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(815),
  },

});
