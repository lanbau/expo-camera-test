import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from './MainScreen.js'
import SettingScreen from './SettingScreen.js'
import { Icon } from 'native-base'

// Note that youtube tutorial is old. different setup.
// https://www.youtube.com/watch?v=cgg1HidN4mQ
// You can override navigationOptions here.

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }}/>,
      title: 'instagram',
      headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }}/>,
      title: `Instagram`,
    }),
  },
  Setting: {
    screen: SettingScreen
  }
})

export default createAppContainer(AppNavigator);