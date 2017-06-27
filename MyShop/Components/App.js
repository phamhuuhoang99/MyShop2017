/*
https://github.com/root-two/react-native-drawer
https://github.com/expo/react-native-tab-navigator
https://github.com/skv-headless/react-native-scrollable-tab-view
https://github.com/leecade/react-native-swiper
**/
import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import Root from './Root.js';
StatusBar.setHidden(true);
export default class App extends Component {
  render() {
    return (
        <Root/>
    );
  }
}
