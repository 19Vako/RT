import { StyleSheet, TextInput, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import OnMenuButton from '../elements/buttons/OnMenuButton';

export default function BudgetEditScreen() {
  const { theme, setBudget, addBudget } = useStore();
  const navigation = useNavigation<any>();

  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const today = new Date();
  const day = today.getDate(); // Getting the day of the month (1-31)
  const month = today.getMonth() + 1;

  const budgetChange = () => {
    if (inputValue) {
      const numberValue = parseFloat(inputValue);
      setBudget(numberValue);
      addBudget({ date: `${day}/${month}`, sum: numberValue });
      navigation.navigate('Budget');
    }
  };

  return (
    <BackgroundWrapper>
      <TouchableOpacity style={styles.closeContainer} onPress={() => navigation.navigate('Budget')}>
        <ImageBackground
          source={require('../images/icons/closeIcon.png')}
          resizeMode="cover"
          style={styles.closeIcon}
        />
      </TouchableOpacity>
      <View style={styles.budgetBox}>
        <TextInput
          value={inputValue}
          style={styles.input}
          placeholder={placeholderVisible ? 'Budget' : ''}
          placeholderTextColor="#FFFFFF"
          onFocus={() => setPlaceholderVisible(false)}
          onBlur={() => setPlaceholderVisible(true)}
          keyboardType="numeric"
          onChangeText={setInputValue}
        />
      </View>

      <TouchableOpacity style={[styles.changeBudgetBox, { backgroundColor: theme }]} onPress={budgetChange}>
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
    top: scaleHeight(106.56),
    left: scale(369),
  },
  closeIcon: {
    flex: 1,
    width: scale(20.69),
    height: isIPhoneSE ? scaleHeight(25) : scaleHeight(20.69),
  },
  budgetBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(81),
    top: scaleHeight(193),
    left: scale(69),
    borderRadius: scale(13),
    backgroundColor: '#449682',
  },
  input: {
    fontFamily: 'KulimPark-SemiBold',
    fontSize: scale(50),
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  changeBudgetBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(289),
    height: scaleHeight(48),
    top: scaleHeight(292),
    left: scale(69),
    borderRadius: scale(13),
  },
  image: {
    width: scale(28),
    height: scaleHeight(28),
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(815),
  },
});
