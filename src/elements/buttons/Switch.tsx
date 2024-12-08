import React, { useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native';
import { scale, scaleHeight, isIPhoneSE } from '../../config/responsive';

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const translateX = React.useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    const toValue = isEnabled ? 0 : isIPhoneSE ? scale(37) : scale(42); // Двигаем круг вправо или влево
    Animated.timing(translateX, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsEnabled(!isEnabled);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <View style={[styles.switchContainer, isEnabled ? styles.enabled : styles.disabled]}>
        <Animated.View style={[styles.circle, {transform: [{ translateX }]} ]}/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: isIPhoneSE ? scale(72) : scale(80.1),
    height: isIPhoneSE ? scaleHeight(40) : scaleHeight(36),
    borderRadius: scale(45),
    padding: scale(5),
    justifyContent: 'center',
  },
  enabled: {
    backgroundColor: '#78EE59', // Зеленый цвет для включенного состояния
  },
  disabled: {
    backgroundColor: '#d8d8d8', // Серый цвет для выключенного состояния
  },
  circle: {
    width: isIPhoneSE ? scale(25) : scale(27.9),
    height: isIPhoneSE ? scaleHeight(30) : scaleHeight(28.8),
    borderRadius: scale(15),
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Switch;
