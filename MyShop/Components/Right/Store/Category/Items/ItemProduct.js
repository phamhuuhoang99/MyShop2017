import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Dimensions,Image
} from 'react-native';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;

export default class ItemProduct extends Component {
  render() {
    return (
      <View style={{width:W/2 - W/100, height:H*0.39}}>
          <View style={{ height: H*0.3, justifyContent:'center',alignItems:'center'}}>
            <View style={{width:W/3,height:H*0.2}}>
                <Image style={{width:W/3,height:H*0.2 }}
                source={{uri: this.props.img}}
               />
            </View>
          </View>
          <View style={{height:H*0.05,marginLeft:W*0.02}}>
            <Text>{this.props.title}</Text>
          </View>
          <View style={{height:H*0.04,marginLeft:W*0.02}}>
              <Text style={{color:'#e74c3c'}}>{this.props.price} VND</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
