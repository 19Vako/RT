import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, TouchableOpacity } from 'react-native';
import { scale, scaleHeight } from '../../config/responsive';
import { useStore } from '../../context/Context';

const CustomSlider = () => {
  const { setBrightness, brightness } = useStore();
  const sliderWidth = scale(359); // Slider width in pixels
  const thumbWidth = scale(14.45); // Thumb width

  // Configure PanResponder to handle thumb dragging
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        // Calculate new value, constrained between 0 and 100
        let newValue = ((gestureState.moveX - thumbWidth / 2) / sliderWidth) * 100;

        // Constrain slider movement within 0 to 100 range
        newValue = Math.min(100, Math.max(0, newValue));

        // Round the value to the nearest integer
        setBrightness(Math.round(newValue));
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${+brightness}%` }]} />
          <View
            style={[styles.thumb, { left: `${+brightness + 2}%` }]}
            {...panResponder.panHandlers}
          >
            {/* Button inside the thumb */}
            <TouchableOpacity style={styles.button} />
          </View>
        </View>
      </View>
      <Text style={styles.valueText}>{brightness}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderContainer: {
    width: scale(379),
    height: scaleHeight(28),
  },

  track: {
    justifyContent: 'center',
    height: scale(28),
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: scale(30.5),
    position: 'relative',
    overflow: 'hidden',
    paddingRight: 25,
  },

  fill: {
    marginLeft: scale(10),
    height: scaleHeight(14),
    backgroundColor: '#BABABA',
    borderRadius: scale(30),
  },

  thumb: {
    position: 'absolute',
    width: scale(14.45),
    height: scaleHeight(14.45),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(20),
    justifyContent: 'center',
  },

  valueText: {
    fontSize: scale(16),
    color: '#FFFFFF',
    marginTop: scaleHeight(10),
  },

  button: {
    position: 'absolute',
    borderRadius: scale(20),
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
});

export default CustomSlider;
