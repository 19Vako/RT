import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../elements/wrappers/BackgroundWrapper';
import { useStore } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import OnMenuButton from '../elements/buttons/OnMenuButton';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';



export default function AddAffirmationScreen() {
  const { colorText, theme, setInputText, inputText,  addBlock} = useStore();
  const navigation = useNavigation<any>();

  const handle = () => {
    if(inputText){
    navigation.navigate('Affirmations');
    addBlock();
    }
  };

  return (
    <BackgroundWrapper>
      <TouchableOpacity style={styles.closeContainer} onPress={() => navigation.navigate('Affirmations')}>
        <ImageBackground
          source={require('../images/icons/closeIcon.png')}
          resizeMode="cover"
          style={styles.closeIcon}
        />

      </TouchableOpacity>

      <View style={[styles.inputContainer, { backgroundColor: theme }]}>
        <TextInput
          style={styles.input}
          placeholder="Текст для аффирмации"
          placeholderTextColor={colorText}
          multiline={true}
          textAlignVertical="top"
          onChangeText={setInputText}
        />
      </View>
      <TouchableOpacity style={[styles.addButton, {backgroundColor: theme}]} onPress={handle}>
        <Text style={[styles.addButtonText, {color: colorText}]}>+</Text>
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
  inputContainer: {
    width: scale(382),
    height: scaleHeight(109),
    top: scaleHeight(169),
    borderRadius: scale(10),
    left: scale(24),
    marginBottom: scaleHeight(50),
  },
  input: {
    width: scale(345),
    height: scaleHeight(68),
    top: scaleHeight(20),
    borderRadius: scale(10),
    left: scale(24),
    color: '#000000',
    fontSize: scale(13),
    paddingVertical: 10, // Добавляет отступ внутри TextInput
  },
  addButton: {
    position: 'absolute',
    top: scaleHeight(331),
    width: scale(382),
    height: scaleHeight(65),
    left: scale(22),
    borderRadius: scale(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#000000',
    fontSize: scale(45),
  },
  onMenu: {
    position: 'absolute',
    top: scaleHeight(815),
  },
});
