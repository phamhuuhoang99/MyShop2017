import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView,Dimensions,Image,AsyncStorage,Alert
} from 'react-native';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
import ItemCart from './Items/ItemCart.js';
import HeaderCNU from '../Header/HeaderCNU.js';
var mang = [];
var allMoney = 0;
var t;

export default class Cart extends Component {
  constructor(props){
    super(props);
    this.state={
      loaded: <View></View>,
      allPrice: 0
    }
    t = this;
    console.log("constructor cua cart")
  }
  componentWillReceiveProps(){
    this._loadDuLieu().done();
    // show tong so luong cua gio hang
    this.props.showQuantity();
  }
  // Them so luong
  plusItem(i){
    console.log("day la i ne +++++" +i);
    var stt = mang.findIndex((e)=>{
      return e.IDSP==i
    });
    console.log("so thu tu cu gio hang la"+ stt)
    mang[stt].Quantity += 1;
    t.saveGioHang().done();
    t._loadDuLieu().done();
  }
  // Xoa so luong
  minusItem(i){
    console.log("day la i ne +++++" +i);
    var stt = mang.findIndex((e)=>{
      return e.IDSP==i
    });
    console.log("so thu tu cu gio hang la"+ stt)
    mang[stt].Quantity -= 1;
    t.saveGioHang().done();
    t._loadDuLieu().done();
  }
  // Xoa san pham
  deleteItem(i){
    var stt = mang.findIndex((e)=>{
      return e.IDSP==i
    });

    for(var x = mang.length - 1; x >= 0; x--) {
      if(mang[x].IDSP === i) {
         mang.splice(x, 1);
      }
      t.saveGioHang().done();
      t._loadDuLieu().done();
    }
    this.props.showQuantity();
  }
  saveGioHang = async()=>{
    try{
      await AsyncStorage.setItem("@NhatKy6:key", JSON.stringify(mang))
    }catch(e){
      console.log(e);
    }
  }

    _order = async () => {
      try {
        value = await AsyncStorage.getItem('@Login:key6');
        if(value!=null){
          Alert.alert(
            'Bảo mật thanh toán',
            'Bạn có chắc muốn đặt hàng',
            [
              {text: 'OK', onPress: () => {this.props.goToConfirmInfo()}},
              {text: 'ĐÓNG ', onPress: () => console.log('Ask me later pressed')},
            ],
            { cancelable: false }
          )
        }
        else {
          Alert.alert(
            'Bảo mật thanh toán',
            'Bạn có thể đăng nhập hoặc mua hàng không cần đăng ký tài khoản',
            [
              {text: 'ĐĂNG NHẬP ', onPress: () => {this.props.goToLogin()}},
              {text: 'KHÔNG ĐĂNG KÝ ', onPress: () => {this.props.goToConfirmInfo()}},
              {text: 'ĐÓNG ', onPress: () => console.log('Ask me later pressed')},
            ],
            { cancelable: false }
          )
        }
      } catch (error) {
        _loadInitialState().done();
      }
    }



  _loadDuLieu = async () => {
    try {
      var v = await AsyncStorage.getItem('@NhatKy6:key');
      if (v !== null){
          mang = JSON.parse(v);
          var tong =0;
          mang.map(function(o, i){
            tong = tong + o.Price*o.Quantity
          });
          this.setState({
            allPrice:tong
          })

          console.log('load dc roi ne AsyncStorage' + JSON.parse(v));
          this.setState({
            loaded:
            <View>
            {mang.map(function(o, i){
            return(  <ItemCart
                      key = {i}
                      IMG   = {'http://192.168.1.2/myshop/upload/hinhchinh/' + o.UrlImage}
                      TITLE = {o.Name}
                      PRICE = {o.Price}
                      SIZE  = {o.Size}
                      QUANTITY  = {o.Quantity}
                      plusItem={(e)=>{t.plusItem(o.IDSP)}}
                      minusItem={(e)=>{t.minusItem(o.IDSP)}}
                      deleteItem={(e)=>{t.deleteItem(o.IDSP)}}
                      />)
            })}
            </View>,
          });
      } else {
      }
    } catch (error) {
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <HeaderCNU title = 'GIỎ HÀNG'/>
        </View>
        <View style={styles.container}>
          <View style={styles.order}>
            <ScrollView>
                {this.state.loaded}
            </ScrollView>
          </View>
          <View style={styles.price}>
            <Text style={styles.titleMoney}>Thành tiền: <Text style={styles.allPrice}>{this.state.allPrice} VND</Text></Text>
          </View>
            <View style={styles.btnOrder}>
            <TouchableOpacity
                onPress={()=>{
                  this._order();
                }}
            >
            <Text style={styles.txtOrder}>ĐẶT HÀNG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  componentDidMount(){
    this._loadDuLieu().done();
  }
}

const styles = StyleSheet.create({
  wrapper:{flex:1,backgroundColor:'#ecf0f1'},
  header:{flex:1},
  container:{flex:12},
    order:{flex:25},
    price:{flex:1.5,backgroundColor:'#f5f5f5',justifyContent:'center',alignItems:'center'},
      titleMoney:{fontSize:H*0.018},
        allPrice:{fontSize:H*0.025,color:'#c0392b'},
    btnOrder:{flex:2,backgroundColor:'#d35400',justifyContent:'center',alignItems:'center'},
      txtOrder:{fontSize:H*0.025,color:'#ecf0f1'}
});
