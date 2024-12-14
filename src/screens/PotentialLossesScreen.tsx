import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight } from '../config/responsive';
import Switch from '../elements/buttons/Switch';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../constants/GlobalStyles';
import { imgs } from '../constants/Images';
export default function PotentialLossesScreen() {
  const { theme, colorText, bargainsHistory } = useStore();
  const navigation = useNavigation<any>();

  return (
    <BackgroundWrapper>
      <Text style={styles.description}>Potential Losses</Text>
      <Image style={styles.image} source={imgs.lossesimg} />

      <View style={[styles.notifications, { backgroundColor: theme }]}>
        <Text style={[styles.notificationsText, { color: colorText }]}>Loss Notification</Text>
        <Switch />
      </View>

      <TouchableOpacity style={styles.allIncome} onPress={() => navigation.navigate('TotalIncome')}>
        <Text style={styles.allIncomeText}>Total Income</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.income, { backgroundColor: theme }]}>
        <Text style={[styles.allIncomeText, { color: colorText }]}>Income</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.losses}>
        <Text style={styles.allIncomeText}>Losses</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
        {bargainsHistory.map((item, index) => (
          <TouchableOpacity
            onPress={() => { navigation.navigate('TradeHistory', { item }); }}
            key={index}
            style={[styles.history, { backgroundColor: theme }]}
          >
            <Text style={[styles.historyText, { color: colorText }]}>Trade History</Text>
            <Text style={[styles.date, { color: colorText }]}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  description: {
    width: scale(261),
    height: scaleHeight(25),
    top: scaleHeight(98),
    left: scale(46),
    fontSize: scale(16),
    fontFamily: GlobalStyles.boldText.fontFamily,
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
  notifications: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: scale(291),
    height: scaleHeight(48),
    top: scaleHeight(480),
    left: scale(67),
    borderRadius: scale(13),
  },
  notificationsText: {
    fontSize: scale(13),
    fontFamily: GlobalStyles.text.fontFamily,
    marginRight: scale(60),
  },
  allIncome: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(292),
    height: scaleHeight(48),
    top: scaleHeight(544),
    left: scale(69),
    backgroundColor: '#449682',
    borderRadius: scale(13),
  },

  income: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(103),
    height: scaleHeight(48),
    top: scaleHeight(610),
    left: scale(69),
    borderRadius: scale(13),
  },

  losses: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(103),
    height: scaleHeight(48),
    top: scaleHeight(610),
    left: scale(258),
    borderRadius: scale(13),
    backgroundColor: '#E63A00',
  },


  allIncomeText: {
    color: '#FFFFFF',
    fontFamily: GlobalStyles.text.fontFamily,
  },
  update: {
    position: 'absolute',
    width: scale(170),
    height: scaleHeight(48),
    top: scaleHeight(610),
    left: scale(130),
    borderRadius: scale(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateText: {
    fontFamily: GlobalStyles.text.fontFamily,
  },
  list: {
    width: scale(292),
    height: scaleHeight(120),
    top: scaleHeight(733),
    left: scale(69),
  },
  history: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(292),
    height: scaleHeight(48),
    borderRadius: scale(13),
    marginBottom: scaleHeight(20),
    fontFamily: GlobalStyles.text.fontFamily,
  },
  historyText: {
    width: scale(125),
    fontSize: scale(16),
    fontFamily: GlobalStyles.text.fontFamily,
    marginRight: scale(25),
  },
  date: {
    fontSize: scale(16),
    fontFamily: GlobalStyles.text.fontFamily,
  },
});
