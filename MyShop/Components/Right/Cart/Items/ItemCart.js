import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Dimensions,Image,TouchableOpacity,AsyncStorage
} from 'react-native';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class ItemCart extends Component {
  constructor(props){
    super(props);
    t = this;
  }
  render() {
    return (
      <View style={styles.cart}>
        <View style={styles.cartLeft}>
          <Image style={styles.cartLeftCenter}
          source={{uri: this.props.IMG}}
          />
        </View>
        <View style={styles.cartRight}>
          <View style={styles.cartRightCenter}>
            <View style={styles.info}>
              <Text>{this.props.TITLE}</Text>
              <Text style={styles.price}>{this.props.PRICE} VND</Text>
              <Text style={styles.size}>{this.props.SIZE}</Text>
            </View>
            <View style={styles.order}>
              <View style={styles.orderLeft}>
                <TouchableOpacity style={styles.plusAndMinus}
                  onPress={()=>{this.props.minusItem(this.props.IDSP)}}
                >
                  <Text style={styles.txtPAM}>-</Text>
                </TouchableOpacity>
                <View style={styles.number}>
                  <View style={{height:H*0.045,justifyContent:'center',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#2c3e50'}}>
                      <Text>{this.props.QUANTITY}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.plusAndMinus}
                  onPress={()=>{this.props.plusItem(this.props.IDSP)}}
                  >
                    <Text style={styles.txtPAM}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.orderCenter}></View>
              <TouchableOpacity style={styles.orderRight}
                onPress={()=>{this.props.deleteItem(this.props.IDSP)}}
                >
                <Image
                  style={styles.imgBin}
                  source={require('../../../Images/Trash.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cart:{height:H*0.2,backgroundColor:'#f5f5f5',flexDirection:'row',marginBottom:W/100+W/100},
    cartLeft:{width:W*0.3,justifyContent:'center',alignItems:'center'},
      cartLeftCenter:{width:W*0.25,height:H*0.15,backgroundColor:'#2c3e50'},
    cartRight:{width:W*0.7,justifyContent:'center',alignItems:'center'},
      cartRightCenter:{width:W*0.68,height:H*0.15,},
        info:{height:H*0.1,backgroundColor:'#f5f5f5',justifyContent:'center'},
          price:{color:'#e74c3c'},
          size:{color:'#3498db'},
        order:{height:H*0.05,backgroundColor:'#f5f5f5',flexDirection:'row'},
          orderLeft:{width:W*0.25,backgroundColor:'#f5f5f5',flexDirection:'row'},
            plusAndMinus:{flex:1,backgroundColor:'#ecf0f1',justifyContent:'center',alignItems:'center'},
              txtPAM:{fontSize:W*0.05},
            number:{flex:1},
          orderCenter:{width:W*0.35},
          orderRight:{width:W*0.08,height:H*0.05,justifyContent:'center',alignItems:'center',backgroundColor:'#ecf0f1'},
            imgBin:{width:W*0.07,height:H*0.04}
});
