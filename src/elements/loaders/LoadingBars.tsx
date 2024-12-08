import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Импортируем useNavigation
import responsive from '../../config/responsive';

const { scale, scaleHeight } = responsive;

const LoadingBars = () => {
  const navigation = useNavigation<any>();
  const columns = [39, 57, 23, 12, 39, 51, 28, 17, 9, 39, 17, 36, 39, 57]; // Высота столбцов
  const animations = useRef(columns.map(() => new Animated.Value(0))).current;
  const [activeIndex, setActiveIndex] = useState(-1); // Индекс текущего окрашенного столбца

  useEffect(() => {
    const animateBars = () => {
      animations.forEach((animation, index) => {
        Animated.timing(animation, {
          toValue: 1,
          delay: index * 400,
          useNativeDriver: false,
        }).start(() => {
          setActiveIndex(index);
        });
      });
    };

    animateBars();
  }, [animations]);

  // Функция для проверки, если процент 100
  const checkAndNavigate = () => {
    if (activeIndex === columns.length - 1) {
      navigation.navigate('WelcomeScreen'); // Переход на следующий экран
    }
  };

  useEffect(() => {
    if (activeIndex === columns.length - 1) {
      checkAndNavigate(); // Проверка при достижении последнего столбца
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      {animations.map((animation, index) => (
        <View key={index} style={styles.column}>
          {activeIndex === index && (
            <View>
              <Text style={[styles.percentage]}>
                {Math.round(((index + 1) / columns.length) * 100)}%
              </Text>
              <View style={styles.border} />
            </View>
          )}
          <Animated.View
            style={[
              styles.bar,
              {
                height: scale(columns[index]),
                backgroundColor: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#D9D9D9', '#449682'],
                }),
              },
            ]}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 150,
  },
  column: {
    alignItems: 'center',
    marginHorizontal: 2,
    position: 'relative',
  },
  bar: {
    width: scale(18),
  },
  percentage: {
    borderBottomColor: 'while',
    width: scale(45),
    position: 'absolute',
    top: -scale(20),
    fontSize: scale(14),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  border: {
    height: scaleHeight(37),
    width: scale(18),
    borderBlockColor: 'none',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRightColor: '#449682',
    borderTopColor: '#449682',
  },
});

export default LoadingBars;
