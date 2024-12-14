import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, View } from 'react-native';
import LoadingBars from '../elements/loaders/LoadingBars';
import { scale, scaleHeight, isIPhoneSE } from '../config/responsive';
import GlobalStyles from '../constants/GlobalStyles';
import { imgs } from '../constants/Images';
const WelcomeLoaderScreen = () => {

    return (
      <ImageBackground
        source={imgs.welcomeBackground}
        resizeMode="cover"
        style={styles.background}
      >

        <Image style={styles.logo} source={imgs.logo}/>
        <Text style={styles.text}>Welcome!</Text>
        <View style={styles.loader}>
            <LoadingBars />
        </View>

      </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    logo: {
        height: isIPhoneSE ? scaleHeight(115) : scaleHeight(95),
        width: scale(104),
        marginTop: scaleHeight(277),
        marginLeft: scale(161),
    },

    text: {
        display: 'flex',
        position: 'absolute',
        width: scale(232.78),
        height: isIPhoneSE ? scaleHeight(40) : scaleHeight(27),
        top: scaleHeight(624),
        marginLeft: scale(161),
        color: '#D9D9D9',
        fontSize: scale(22.89),
        alignItems: 'center',
        fontFamily: GlobalStyles.boldText.fontFamily,
    },

    loader: {
        position: 'absolute',
        marginLeft: scale(57),
        top: scaleHeight(640),
    },

});

export default WelcomeLoaderScreen;
