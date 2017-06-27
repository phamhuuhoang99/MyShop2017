import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView
} from 'react-native';
import HeaderSS from '../Header/HeaderSS.js';
var t;
export default class Search extends Component {
  constructor(props){
    super(props);
    t = this;
  }
  render() {
    return (
      <View style={styles.wrapper}>
          <View style={styles.header}>
            <HeaderSS toggleMenu={()=>{this.props.toggleMenu()}}/>
          </View>
          <View style={styles.container}>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1},
    header:{flex:1},
    container:{flex:12}
});
