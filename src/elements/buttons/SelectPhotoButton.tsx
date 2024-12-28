import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { icons } from '../../constants/Images';
import { scale, scaleHeight } from '../../config/responsive';

interface SelectPhotoButtonProps {
  onPhotoSelected: (uri: string) => void;
}

const SelectPhotoButton: React.FC<SelectPhotoButtonProps> = ({ onPhotoSelected }) => {

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: scale(300),
      height: scaleHeight(400),
      cropping: true,
      mediaType: 'photo',
    }).then(image => {

      if (image?.path) {
        onPhotoSelected(image.path);
      } else {
        console.log('URI is undefined');
      }
    }).catch(error => {
      console.log('ImagePicker Error: ', error);
    });
  };

  return (
    <TouchableOpacity onPress={choosePhoto} style={styles.button}>
      <Image source={icons.photolcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: scale(50),
    height: scaleHeight(50),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },
  icon: {
    width: scale(25),
    height: scaleHeight(25),
  },
});

export default SelectPhotoButton;
