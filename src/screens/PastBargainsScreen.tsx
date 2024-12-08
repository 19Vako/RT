import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight } from '../config/responsive';
import { useStore } from '../context/Context';
import OnMenuButton from '../elements/buttons/OnMenuButton';


export default function PastBargainsScreen() {
  const { theme, colorText } = useStore();

  return (
   <BackgroundWrapper>
    <Text style={styles.description}>Прошлые торги</Text>
    <Text style={styles.date}>05.01.2023</Text>


    <Image style={styles.image} source={require('../images/pastTolerantion.png')}/>

    <Text style={styles.incomeText}>Доход</Text>
    <View style={[styles.incomeContainer, {backgroundColor: theme}]}>
      <Text style={[styles.incomeSum, {color: colorText}]}>8.200</Text>
    </View>

    <Text style={styles.lossesText}>Потери</Text>
    <View style={styles.lossesContainer}>
      <Text style={styles.lossesSum}>5.650</Text>
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
  date: {
    position: 'absolute',
    top: scaleHeight(98),
    left: scale(314),
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(16),
    color: '#FFFFFF',
  },
  image: {
    position: 'absolute',
    width: scale(382),
    height: scaleHeight(294),
    top: scaleHeight(175),
    left: scale(24),
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
    top: scaleHeight(815),
  },
});
