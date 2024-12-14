import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE} from '../config/responsive';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import Switch from '../elements/buttons/Switch';
import OnMenuButton from '../elements/buttons/OnMenuButton';
import GlobalStyles from '../constants/GlobalStyles';
import { icons } from '../constants/Images';
export default function SoundSettingsScreen() {
  const { theme, colorText } = useStore();
  const navigation = useNavigation<any>();

  return (
    <BackgroundWrapper>
       <Text style={styles.description}>Sound Settings</Text>
       <TouchableOpacity style={styles.closeContainer} onPress={() => navigation.navigate('Settings')}>
        <ImageBackground
          source={icons.closelcon}
          resizeMode="cover"
          style={styles.closeIcon}
        />
      </TouchableOpacity>
      <View style={[styles.box1, {backgroundColor: theme}]} />
      <Text style={[styles.text1, {color: colorText}]}>Enable melody</Text>

        <View style={styles.switchConteiner1}>
          <Switch />
        </View>

      <View style={[styles.box2, {backgroundColor: theme}]} />
      <Text style={[styles.text2, {color: colorText}]}>Enable button sounds</Text>

        <View style={styles.switchConteiner2}>
          <Switch />
        </View>

      <View style={[styles.box3, {backgroundColor: theme}]} />
      <Text style={[styles.text3, {color: colorText}]}>Enable notification sounds</Text>
      <View style={styles.switchConteiner3}>
        <Switch />
      </View>
      <View style={styles.onMenu}>
        <OnMenuButton />
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
    fontFamily: GlobalStyles.boldText.fontFamily,
    color: '#FFFFFF',
  },
  box1: {
    position: 'absolute',
    top: scaleHeight(180),
    left: scale(17),
    width: scale(379),
    height: isIPhoneSE ? scaleHeight(60) : scaleHeight(48),
    borderRadius: scale(30.5),
  },
  box2: {
    position: 'absolute',
    top: scaleHeight(247),
    left: scale(17),
    width: scale(379),
    height: isIPhoneSE ? scaleHeight(60) : scaleHeight(48),
    borderRadius: scale(30.5),
  },
  box3: {
    position: 'absolute',
    top: scaleHeight(314),
    left: scale(17),
    width: scale(379),
    height: isIPhoneSE ? scaleHeight(60) : scaleHeight(48),
    borderRadius: scale(30.5),
  },
  switchConteiner1: {
    position: 'absolute',
    top: scaleHeight(186),
    left: scale(309.9),
  },
  switchConteiner2: {
    position: 'absolute',
    top: scaleHeight(253),
    left: scale(309.9),
  },
  switchConteiner3: {
    position: 'absolute',
    top: scaleHeight(320),
    left: scale(309.9),
  },

  text1: {
    position: 'absolute',
    top: scaleHeight(195),
    left: scale(37),
    fontSize: scale(16),
    fontFamily: GlobalStyles.boldText.fontFamily,
  },
  text2: {
    position: 'absolute',
    top: scaleHeight(262),
    left: scale(37),
    fontSize: scale(16),
    fontFamily: GlobalStyles.boldText.fontFamily,
  },
  text3: {
    position: 'absolute',
    top: scaleHeight(329),
    left: scale(37),
    fontSize: scale(16),
    fontFamily: GlobalStyles.boldText.fontFamily,
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(815),
  },
});
