import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from './src/context/Context';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
