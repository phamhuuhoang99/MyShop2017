import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Dimensions,Image
} from 'react-native';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;

export default class ItemNews extends Component {
  render() {
    return (
      <View style={styles.news}>
        <View style={styles.newsCenter}>
          <View style={styles.imgNews}>
          </View>
          <View style={styles.titleNews}>
            <View style={styles.titleNewsCenter}>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  news:{height:H/6,backgroundColor:'#f5f5f5',justifyContent:'center',alignItems:'center',marginBottom:W/100+W/100},
    newsCenter:{height:H/8,width:W-W/20,flexDirection:'row'},
      imgNews:{flex:2,backgroundColor:'#bdc3c7'},
      titleNews:{flex:5,justifyContent:'center'},
        titleNewsCenter:{height:H/12,backgroundColor:'#2c3e50'}
});
