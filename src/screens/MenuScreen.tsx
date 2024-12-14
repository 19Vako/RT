import { Image, StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import OnMenuButton from '../elements/buttons/OnMenuButton';

import { useNavigation } from '@react-navigation/native';
import { useStore } from '../context/Context';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import GlobalStyles from '../constants/GlobalStyles';
import { icons, imgs } from '../constants/Images';

export default function MenuScreen() {
  const { theme, colorText } = useStore();
  const navigation = useNavigation<any>();

  return (
    <BackgroundWrapper>

      <View style={[styles.reminders, { backgroundColor: theme }]}>
        <Text style={styles.remindersText}>Reminder</Text>
        <Text style={[styles.remindersRegulaerText, { color: colorText }]}>Section for setting up reminders about important trading principles and preparation before a trading session.</Text>
      </View>

      <TouchableOpacity style={styles.afimations} onPress={() => navigation.navigate('Affirmations')}>
        <ImageBackground
          source={imgs.afimations}
          resizeMode="cover"
          imageStyle={styles.background}
        >
          <Text style={styles.afimationText}>Positive Affirmations:</Text>
          <Text style={styles.text}>A section with the ability to set and edit positive affirmations before trading sessions. (Randomization option)</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.box, styles.budget, { backgroundColor: theme }]} onPress={() => navigation.navigate('Budget')}>
        <Image style={styles.imageBudget} source={icons.budget} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.box, styles.forecastUp, { backgroundColor: theme }]} onPress={() => navigation.navigate('RiskTolerance')}>
        <Image style={styles.imageForecastUp} source={icons.uplcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.box, styles.forecastDown, { backgroundColor: theme }]} onPress={() => navigation.navigate('PotentialLosses')}>
        <Image style={styles.imageForecastDown} source={icons.downicon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.box, styles.settings, { backgroundColor: theme }]} onPress={() => navigation.navigate('Settings')}>
        <Image style={styles.imageSettings} source={icons.setting} />
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
    top: isIPhoneSE ? scaleHeight(5) : scaleHeight(12),
    left: scale(23),
    color: '#449882',
    fontFamily: GlobalStyles.boldText.fontFamily,
    fontSize: scale(18),
  },
  remindersRegulaerText: {
    position: 'absolute',
    width: scale(322),
    height: scaleHeight(103),
    top: isIPhoneSE ? scaleHeight(30) : scaleHeight(40),
    left: scale(23),
    fontFamily: GlobalStyles.text.fontFamily,
    fontSize: scale(16),
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
    top: isIPhoneSE ? scaleHeight(5) : scaleHeight(10),
    left: scale(22),
    fontSize: scale(18),
    color: '#FFFFFF',
    fontFamily: GlobalStyles.boldText.fontFamily,
  },
  text: {
    position: 'absolute',
    top: scaleHeight(35),
    left: scale(22),
    width: scale(260),
    height: scaleHeight(68),
    fontSize: scale(16),
    fontFamily: GlobalStyles.text.fontFamily,
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
