import React from 'react';
import { ImageBackground, StyleSheet, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import OnMenuButton from '../elements/buttons/OnMenuButton';
import { scale, scaleHeight } from '../config/responsive';


const AffirmationsScreen = () => {
  const { theme, colorText, blocks, removeBlock } = useStore();
  const navigation = useNavigation<any>();

  return (
    <BackgroundWrapper>
      <Text style={styles.header}>Позитивные аффирмации</Text>

      <ImageBackground
        source={require('../images/icons/afimationBackgroundBox.png')}
        resizeMode="cover"
        imageStyle={styles.descriptionBackground}
        style={styles.descriptionBox}
      >
        <Text style={[styles.blockText, styles.descriptionText]}>
          Раздел с возможностью установки и редактирования позитивных утверждений перед торговыми сессиями. (Возможность рандома)
        </Text>
      </ImageBackground>

      {/* Список блоков */}
      <ScrollView style={styles.list}>
        {blocks.map((block) => (
          <TouchableOpacity onPress={() => removeBlock(block.id)} key={block.id} style={[styles.afirmationBox, {backgroundColor: theme}]}>
            <Text style={[styles.blockText, {color: colorText}]}>{block.text}</Text>
          </TouchableOpacity>
        ))}

      {/* Кнопка добавления блока */}
      <TouchableOpacity style={[styles.addButton, {backgroundColor: theme}]} onPress={() => navigation.navigate('AddAffirmation')}>
        <Text style={[styles.addButtonText, {color: colorText}]}>+</Text>
      </TouchableOpacity>
      </ScrollView>

      <View style={styles.onMenu}>
        <OnMenuButton />
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: scale(227),
    height: scaleHeight(25),
    top: scaleHeight(98),
    left: scale(46),
    color: '#FFFFFF',
    fontSize: scale(16),
    fontFamily: 'KulimPark-SemiBold',
  },
  descriptionBox: {
    position: 'absolute',
    top: scaleHeight(175),
    width: scale(382),
    height: scaleHeight(109),
    borderRadius: scale(10),
    left: scale(24),
  },
  descriptionBackground: {
    flex: 1,
    borderRadius: scale(10),
  },
  descriptionText: {
    color: '#FFFFFF',
  },
  list: {
    height: scaleHeight(400),
    top: scaleHeight(336),
  },
  afirmationBox: {
    width: scale(382),
    height: scaleHeight(109),
    borderRadius: scale(10),
    left: scale(24),
    marginBottom: scaleHeight(50),
  },
  blockText: {
    width: scale(345),
    height: scaleHeight(68),
    top: scaleHeight(28),
    left: scale(22),
    fontSize: scale(14),
    fontFamily: 'KulimPark-Regular',
  },
  addButton: {
    width: scale(382),
    height: scaleHeight(65),
    left: scale(22),
    borderRadius: scale(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: scale(45),
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(815),
  },
});

export default AffirmationsScreen;
