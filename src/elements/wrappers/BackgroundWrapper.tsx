import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { useStore } from '../../context/Context';

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  const { brightness } = useStore();

  // Calculate overlay opacity based on brightness
  const adjustedBrightness = 1 - Math.min(1, Math.max(0, +brightness / 100));

  return (
    <ImageBackground
      source={require('../../images/Background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay with adjustable opacity */}
      <View style={[styles.overlay, { opacity: adjustedBrightness }]} />
      <View>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
});

export default BackgroundWrapper;
