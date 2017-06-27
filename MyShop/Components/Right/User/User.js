import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,Dimensions,Image,Alert,Linking
} from 'react-native';
import MapView from 'react-native-maps';
var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
export default class User extends Component{
  constructor(props){
    super(props);
    this.state={
      region:{
          latitude: 10.8018391,
          longitude: 106.7148458,
          latitudeDelta:  0.0922,
          longitudeDelta: 0.0421,
        }
    }
  }
//rgba(0, 0, 0, 0.5)
PhoneCall(){
  Alert.alert(
    'Thông báo',
    'Gọi đến Baozi',
    [
      {text: 'Cancel', onPress: () =>{return false}},
      {text: 'OK', onPress: () => Linking.openURL('tel:+84873066088')},
    ],
    { cancelable: true }
  )
}
  render() {
  return (
    <View style={styles.container}>
      <View style ={styles.bottom}>

        <MapView
          style={styles.map}
          region={this.state.region}
        >
        <MapView.Marker coordinate ={this.state.region} />
        </MapView>

        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)',height:H*0.3}}>
            <View style={{height:H*0.15,justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.txt}>Cửa Hàng Thời Trang Aodzu</Text>
              <Text style={styles.txt}>475A - Điện Biên Phủ, P.25, Q.Bình Thạnh, Tp.HCM</Text>
            </View>
            <View style={{height:H*0.15}}>
              <TouchableOpacity style={{height:H*0.04,flexDirection:'row',alignItems:'center',marginLeft:W*0.08}}
                  onPress={()=>{
                    this.PhoneCall()
                  }}
                >
                <Image
                  style={{height:H*0.04,width:H*0.04}}
                  source={require('../../Images/Phone.png')}
                />
                <Text style={styles.txt}> Tư vấn: 0978329245</Text>
              </TouchableOpacity>
              <View style={{height:H*0.04,flexDirection:'row',alignItems:'center',marginLeft:W*0.08}}>
                <Image
                  style={{height:H*0.04,width:H*0.04}}
                  source={require('../../Images/Mail.png')}
                />
                <Text style={styles.txt}> Email: aodzu@gmail.com</Text>
              </View>
            </View>
        </View>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container:{flex:1},
  bottom: {flex:1,justifyContent: 'flex-end',},
  map:    {...StyleSheet.absoluteFillObject},
    txt:{color:'#ecf0f1',fontSize:H*0.02},
});
