import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const designWidth = 430;
const designHeight = 932;

// Функція для масштабування розмірів по ширині
export const scale = (size: number) => (width / designWidth) * size;

// Функція для масштабування розмірів по висоті
export const scaleHeight = (size: number) => (height / designHeight) * size;

// Перевірка на iPhone SE (для старіших моделей)
export const isIPhoneSE = (width === 320 && height === 568) || (width === 375 && height === 667);

// Повертати об'єкт з усіма параметрами
export default {
  scale,
  scaleHeight,
  isIPhoneSE,
};
