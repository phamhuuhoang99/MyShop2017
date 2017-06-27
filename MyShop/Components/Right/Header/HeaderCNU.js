/*
  Header screen : cart , notificaion , user
**/
import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,Image,Dimensions
} from 'react-native';


var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
export default class HeaderCNU extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
          <View style={styles.left}>
                <Image
                  style={styles.icon}
                  source={require('../../Images/LogoAo.png')}
                />
          </View>

          <View style={styles.right}>
              <Text style={styles.title}>{this.props.title}</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1,flexDirection:'row',backgroundColor:'#2c3e50'},
    left:{flex:2,flexDirection:'row',backgroundColor:'#2c3e50',justifyContent:'center',alignItems:'center'},
      icon:{width:W*0.1,height:W*0.1},
    right:{flex:9,backgroundColor:'#2c3e50',justifyContent:'center',marginLeft:W*0.25},
      title:{fontSize:H*0.025,color:'#ecf0f1',fontSize:H*0.03}

});
