import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE} from '../config/responsive';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import DatePickerComponent from '../elements/buttons/DatePickerComponent';
import OnMenuButton from '../elements/buttons/OnMenuButton';

export default function TotalIncomeScreen() {
  const { theme, colorText } = useStore();
  const navigation = useNavigation<any>();


  const [incomeValue, setIncomeValue] = useState<string>('');
  const [lossesValue, setLossesValue] = useState<string>('');
  const [incomeDate, setIncomeDate] = useState<string>('');
  const [lossesDate, setLossesDate] = useState<string>('');
  const [isIncomeFocused, setIncomeFocused] = useState(false);
  const [isLossesFocused, setLossesFocused] = useState(false);

  const handleIncomeDateChange = (date: string) => {
    setIncomeDate(date);
  };

  const handleLossesDateChange = (date: string) => {
    setLossesDate(date);
  };

  return (
    <BackgroundWrapper>
      <Text style={styles.description}>Общий доход</Text>

      <TouchableOpacity style={styles.closeContainer} onPress={() => navigation.navigate('PotentialLosses')}>
        <ImageBackground
          source={require('../images/icons/closeIcon.png')}
          resizeMode="cover"
          style={styles.closeIcon}
        />
      </TouchableOpacity>

      <View style={styles.allIncomeBox}>
        <Text style={styles.allIncomeText}>100000</Text>
      </View>

      <View style={[styles.dateBox, {backgroundColor: theme}]}/>
      <View style={styles.firstdate}><DatePickerComponent onDateChange={handleIncomeDateChange} /></View>
      <View style={styles.lastdate}><DatePickerComponent onDateChange={handleLossesDateChange}  /></View>



      <Text style={styles.incomeText}>Доход</Text>
      <Text style={styles.incomeDate}>{incomeDate}</Text>
      <View style={[styles.incomeBox, { backgroundColor: theme }]}>
        <TextInput
          value={incomeValue}
          style={[styles.input, { color: colorText }]}
          placeholder={isIncomeFocused ? '' : 'Бюджет'}
          placeholderTextColor={colorText}
          keyboardType="numeric"
          onFocus={() => setIncomeFocused(true)}
          onBlur={() => setIncomeFocused(false)}
          onChangeText={setIncomeValue}
        />
      </View>
      <TouchableOpacity style={[styles.changeIncomeBox, { backgroundColor: theme }]}>
        <Image style={styles.image} source={require('../images/icons/changeIcon.png')} />
      </TouchableOpacity>

      <Text style={styles.lossesText}>Потери</Text>
      <Text style={styles.lossesDate}>{lossesDate}</Text>
      <View style={styles.lossesBox}>
        <TextInput
          value={lossesValue}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.input, {color: '#FFFFFF'}]}
          placeholder={isLossesFocused ? '' : 'Потери'}
          placeholderTextColor="#FFFFFF"
          keyboardType="numeric"
          onFocus={() => setLossesFocused(true)}
          onBlur={() => setLossesFocused(false)}
          onChangeText={setLossesValue}
        />
      </View>
      <TouchableOpacity style={[styles.changeLossesBox, { backgroundColor: theme }]}>
        <Image style={styles.image} source={require('../images/icons/changeIcon.png')} />
      </TouchableOpacity>

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
    fontFamily: 'KulimPark-SemiBold',
    color: '#FFFFFF',
  },
  allIncomeBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(81),
    top: scaleHeight(146),
    left: scale(70),
    borderRadius: scale(13),
    backgroundColor: '#449682',
  },
  allIncomeText: {
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(50),
    textAlign: 'center',
    color: '#FFFFFF',
  },
  dateBox: {
    position: 'absolute',
    width: scale(289),
    height: scaleHeight(48),
    top: scaleHeight(245),
    left: scale(70),
    borderRadius: scale(13),
  },
  firstdate: {
    position: 'absolute',
    top: scaleHeight(263),
    left: scale(77),
  },
  lastdate: {
    position: 'absolute',
    top: scaleHeight(263),
    left: scale(245),
  },
  incomeText: {
    position: 'absolute',
    top: scaleHeight(311),
    left: scale(46),
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(16),
    color: '#FFFFFF',
  },
  lossesText: {
    position: 'absolute',
    top: scaleHeight(498),
    left: scale(46),
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(16),
    color: '#FFFFFF',
  },
  incomeDate: {
    position: 'absolute',
    top: scaleHeight(311),
    left: scale(298),
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(16),
    color: '#FFFFFF',
  },
  lossesDate: {
    position: 'absolute',
    top: scaleHeight(498),
    left: scale(298),
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(16),
    color: '#FFFFFF',
  },
  input: {
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(50),
    textAlign: 'center',
  },
  incomeBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(81),
    top: scaleHeight(352),
    left: scale(70),
    borderRadius: scale(13),
  },
  changeIncomeBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(36),
    top: scaleHeight(446),
    left: scale(70),
    borderRadius: scale(7),
  },
  lossesBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(81),
    top: scaleHeight(549),
    left: scale(70),
    borderRadius: scale(13),
    backgroundColor: '#FF2A00',
  },
  changeLossesBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(36),
    top: scaleHeight(643),
    left: scale(70),
    borderRadius: scale(7),
  },
  image: {
    width: scale(28),
    height: scaleHeight(28),
  },
  onMenu: {
    position: 'absolute',
    top: scale(815),
  },
});
