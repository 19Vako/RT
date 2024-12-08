import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight } from '../config/responsive';
import { useStore } from '../context/Context';
import OnMenuButton from '../elements/buttons/OnMenuButton';



const TradeHistory: React.FC<any> = ({ route }) => {
  const { item } = route.params;
  const { theme } = useStore();

  return (
    <BackgroundWrapper>
      <Text style={styles.description}>Иcтория торгов</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Image style={styles.image} source={require('../images/tradeHistoryImage.png')} />
      <View style={[styles.box, {backgroundColor: theme}]} />

      <Text style={styles.incomeText}>Доход</Text>

      <View style={styles.incomeBox} >
        <Text style={styles.Text}>{item.income}</Text>
      </View>

      <Text style={styles.lossesText}>Потери</Text>

      <View style={styles.lossesBox} >
        <Text style={styles.Text}>{item.losses}</Text>
      </View>

      <View style={styles.onMenu}>
        <OnMenuButton />
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  description: {
    top: scaleHeight(98),
    left: scale(46),
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
    color: '#FFFFFF',
  },
  date: {
    width: scale(261),
    height: scaleHeight(25),
    top: scaleHeight(79),
    left: scale(310),
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
    color: '#FFFFFF',
  },
  image: {
    position: 'absolute',
    top: scaleHeight(197),
    left: scale(69),
    width: scale(292),
    height: scaleHeight(225),
    borderRadius: scale(13),
  },
  box: {
    position: 'absolute',
    width: scale(292),
    height: scaleHeight(278),
    top: scaleHeight(451),
    left: scale(69),
    borderRadius: scale(13),
  },
  incomeBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(252),
    height: scaleHeight(71),
    top: scaleHeight(497),
    left: scale(89),
    borderRadius: scale(13),
    backgroundColor: '#449682',
  },
  lossesBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(252),
    height: scaleHeight(71),
    top: scaleHeight(623),
    left: scale(89),
    borderRadius: scale(13),
    backgroundColor: '#FF2A00',
  },
  Text: {
    color: '#FFFFFF',
    fontSize: scale(50),
    fontFamily: 'KulimPark-SemiBold',
  },
  incomeText: {
    position: 'absolute',
    top: scaleHeight(466),
    left: scale(91),
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
  },
  lossesText: {
    position: 'absolute',
    top: scaleHeight(586),
    left: scale(91),

    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(815),
  },
});

export default TradeHistory;