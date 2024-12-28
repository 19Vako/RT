import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../constants/GlobalStyles';
import OnMenuButton from '../elements/buttons/OnMenuButton';

interface SettingButtonProps {
  title: string;
  onPress: () => void;
  theme: string;
  colorText: string;
  top: number;
}

const SettingButton: React.FC<SettingButtonProps> = ({ title, onPress, theme, colorText, top }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: theme, top: scaleHeight(top) }]}
    onPress={onPress}
  >
    <Text style={[styles.text, { color: colorText }]}>{title}</Text>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const { theme, colorText } = useStore();
  const navigation = useNavigation<any>();

  return (
    <BackgroundWrapper>
      <Text style={styles.description}>Settings</Text>

      <SettingButton
        title="Sound Settings"
        onPress={() => navigation.navigate('SoundSettings')}
        theme={theme}
        colorText={colorText}
        top={157}
      />

      <SettingButton
        title="Screen Settings"
        onPress={() => navigation.navigate('ScreenSettings')}
        theme={theme}
        colorText={colorText}
        top={226}
      />

      <SettingButton
        title="Support"
        onPress={() => navigation.navigate('Support')}
        theme={theme}
        colorText={colorText}
        top={295}
      />

      <View style={styles.onMenu}>
        <OnMenuButton />
      </View>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  description: {
    top: scaleHeight(98),
    left: scale(46),
    fontSize: scale(16),
    fontFamily: GlobalStyles.boldText.fontFamily,
    color: '#FFFFFF',
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: scale(69),
    width: scale(292),
    height: isIPhoneSE ? scaleHeight(60) : scaleHeight(48),
    borderRadius: scale(13),
  },
  text: {
    fontSize: scale(16),
    fontFamily: GlobalStyles.text.fontFamily,
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(815),
  },
});
