import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import responsive from '../../config/responsive';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../context/Context';

const { scale, scaleHeight } = responsive;

export default function OnMenuButton() {
  const navigation = useNavigation<any>();
  const { theme, colorText } = useStore();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme }]}
      onPress={() => navigation.navigate('Menu')}
    >
      <Text style={[styles.text, { color: colorText }]}>To the Main</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    left: scale(72),
    width: scale(287),
    height: scaleHeight(36),
    borderRadius: scale(7),
  },
  text: {
    fontSize: scale(16),
    fontFamily: 'KulimPark-Regular',
  },
});
