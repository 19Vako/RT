import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const { theme, colorText} = useStore();
  const navigation = useNavigation<any>();

  return (
    <BackgroundWrapper >
      <Text style={styles.description}>Настройки</Text>

      <TouchableOpacity style={[styles.soundSetting, {backgroundColor: theme}]} onPress={() => navigation.navigate('SoundSettings')}>
        <Text style={[styles.text, {color: colorText}]}>Настройки звука</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.settingScreen, {backgroundColor: theme}]} onPress={() => navigation.navigate('ScreenSettings')}>
        <Text style={[styles.text, {color: colorText}]}>Настройки екрана</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.supportScreen, {backgroundColor: theme}]} onPress={() => navigation.navigate('Support')}>
        <Text style={[styles.text, {color: colorText}]}>Поддержка</Text>
      </TouchableOpacity>

    </BackgroundWrapper>

  );
}

const styles = StyleSheet.create({
  description: {
    top: scaleHeight(98),
    left: scale(46),
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
    color: '#FFFFFF',
  },


  soundSetting: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: scaleHeight(157),
    left: scale(69),
    width: scale(292),
    height: isIPhoneSE ? scaleHeight(60) : scaleHeight(48),
    borderRadius: scale(13),
  },
  settingScreen: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: scaleHeight(226),
    left: scale(69),
    width: scale(292),
    height: isIPhoneSE ? scaleHeight(60) : scaleHeight(48),
    borderRadius: scale(13),
  },
  supportScreen: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: scaleHeight(295),
    left: scale(69),
    width: scale(292),
    height: isIPhoneSE ? scaleHeight(60) : scaleHeight(48),
    borderRadius: scale(13),
  },

  text: {
    fontSize: scale(16),
    fontFamily: 'KulimPark-Regular',
  },

});
