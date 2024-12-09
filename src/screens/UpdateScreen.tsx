import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight } from '../config/responsive';
import { useStore } from '../context/Context';
import OnMenuButton from '../elements/buttons/OnMenuButton';

export default function UpdateScreen() {
  const { theme, colorText } = useStore();

  return (
    <BackgroundWrapper>
      <Text style={styles.description}>Update</Text>
      <View style={styles.image} />

      <Text style={styles.incomeText}>Income</Text>
      <View style={[styles.incomeContainer, {backgroundColor: theme}]}>
        <Text style={[styles.incomeSum, {color: colorText}]}>0</Text>
      </View>

      <Text style={styles.lossesText}>Losses</Text>
      <View style={styles.lossesContainer}>
        <Text style={styles.lossesSum}>0</Text>
      </View>
      <View style={styles.onMenu}>
        <OnMenuButton />
      </View>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  description: {
    position: 'absolute',
    width: scale(261),
    height: scaleHeight(25),
    top: scaleHeight(98),
    left: scale(46),
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
    color: '#FFFFFF',
  },
  image: {
    position: 'absolute',
    width: scale(382),
    height: scaleHeight(294),
    top: scaleHeight(175),
    left: scale(24),
    backgroundColor: '#D9D9D9',
    borderRadius: scale(13),
  },
  incomeText: {
    position: 'absolute',
    top: scaleHeight(480),
    left: scale(48),
    color: '#FFFFFF',
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
  },
  incomeContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(81),
    top: scaleHeight(526),
    left: scale(72),
    borderRadius: scale(13),
  },
  incomeSum: {
    fontSize: scale(50),
    fontFamily: 'KulimPark-SemiBold',
  },
  lossesText: {
    position: 'absolute',
    top: scaleHeight(610),
    left: scale(46),
    color: '#FFFFFF',
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
  },
  lossesContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(81),
    top: scaleHeight(638),
    left: scale(72),
    borderRadius: scale(13),
    backgroundColor: '#FF2A00',
  },
  lossesSum: {
    fontSize: scale(50),
    color: '#FFFFFF',
    fontFamily: 'KulimPark-SemiBold',
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(745),
  },
});
