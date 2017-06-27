import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,TextInput,Image,Alert,AsyncStorage
} from 'react-native';
import Dimensions from 'Dimensions';
var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var emailAsync = null;
var t;
var mang = [];
var userName = 'KhachVangLai';
export default class ConfirmInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      phone:'',
      address:'',
    }
    t=this;
  }
  //---------------LOAD TEN user
  _loadUserName = async () => {
    try {
        userName = await AsyncStorage.getItem('@Login:key6');
      if(value!=null){

      }
      else {

      }
    } catch (error) {
      _loadUserName().done();
    }
  }
  //---------------BUTTON ORDER
  _order(){
      this._loadGioHang().done();
      this._removeStorage().done();
      Alert.alert(
        'Thông báo',
        'Đặt hàng thành công',
        [
          {text: 'OK', onPress: () => {this.props.goToMain()}},
        ],
        { cancelable: false }
      )
  }
  //---------------LOAD GIO HANG
  _loadGioHang = async () => {
    try {
      var v = await AsyncStorage.getItem('@NhatKy6:key');
      if (v !== null){
        console.log("load dc gio hanggggggg");
          mang = JSON.parse(v);
          console.log("///////")
          mang.map(function(o, i){
            t._pushOrder(o.IDSP,o.Name,o.Quantity,o.Size,o.Price,o.Quantity*o.Price)
          });

      } else {
      }
    } catch (error) {
    }
  };
  _removeStorage = async () => {
    try {
      await AsyncStorage.removeItem('@NhatKy6:key');
    } catch (error) {

    }
  };
  //----------------POST THONG TIN LEN SERVER
  _pushOrder(i,t,sl,s,g,tt){
      fetch("http://192.168.1.2/myshop/dathang.php"
       ,{
         method : "POST",
         headers:{
           "Accept" : "application/json",
           "Content-Type" : "application/json"
         },
         body : JSON.stringify({
           "Username"      :  userName,
           "TenNguoiNhan" : this.state.name,
           "Email"       : this.state.email,
           "DienThoai"   : this.state.phone,
           "DiaChi"       : this.state.address,
           "idSP"         : i,
           "TenSanPham"	  : t,
           "SoLuong"      : sl,
           "Size"         : s,
           "DonGia"       : g,
           "TongTien"     : tt
         })
       }
     ).then((response)=>response.json())
     .then((responseJson)=>{

          console.log(responseJson + '-----------------');

     }).catch((error)=>{
       console.error(error);
     });
  }
// LOAD THONG TIN NGUOI DUNG
  _loadInfoUser = async () => {
    try {
      value = await AsyncStorage.getItem('@Login:key6');
      if(value!=null){
        fetch("http://192.168.1.2/myshop/confirmthongtin.php"
            ,{
              method : "POST",
              headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
              },
              body : JSON.stringify({
                "us" : value,
              })
            }
          ).then((response)=>response.json())
          .then((responseJson)=>{
            t.setState({
              name:responseJson[0].HoTen,
              email:responseJson[0].Email,
              phone:responseJson[0].DienThoai,
              address:responseJson[0].DiaChi,
            })
          }).catch((error)=>{
            console.error(error);
          });

      }
      else {

      }
    } catch (error) {
      _loadInfoUser();
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.iconBack}>
            <TouchableOpacity style={styles.icon}
              onPress={()=>{
                this.props.backToMain()
              }}
              >
              <Image
                style={styles.icon}
                source={require('../../Images/Left.png')}
              />
          </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>Nhập địa chỉ giao hàng         </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.frmLogin}>
            <View style={styles.frmLoginCenter}>

              <View style={styles.password}>
                <Text>HỌ VÀ TÊN</Text>
                <TextInput
                  multiline={true} // Show border ios
                  placeholderTextColor ='#27ae60'
                  selectionColor = '#27ae60'
                  underlineColorAndroid ='rgba(0,0,0,0)'
                  style={styles.txtInput}
                  onChangeText={(name) => this.setState({name})}
                  value={this.state.name}
                />
              </View>

              <View style={styles.email}>
                <Text>EMAIL</Text>
                <TextInput
                multiline={true} // Show border ios
                placeholderTextColor ='#27ae60'
                selectionColor = '#27ae60'
                underlineColorAndroid ='rgba(0,0,0,0)'
                style={styles.txtInput}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                />
              </View>

              <View style={styles.password}>
                <Text>SỐ ĐIỆN THOẠI</Text>
                <TextInput
                  multiline={true} // Show border ios
                  placeholderTextColor ='#27ae60'
                  selectionColor = '#27ae60'
                  underlineColorAndroid ='rgba(0,0,0,0)'
                  style={styles.txtInput}
                  onChangeText={(phone) => this.setState({phone})}
                  value={this.state.phone}
                />
              </View>


              <View style={styles.password}>
                <Text>ĐỊA CHỈ GIAO HÀNG</Text>
                <TextInput
                  multiline={true} // Show border ios
                  placeholderTextColor ='#27ae60'
                  selectionColor = '#27ae60'
                  underlineColorAndroid ='rgba(0,0,0,0)'
                  style={styles.txtInput}
                  onChangeText={(address) => this.setState({address})}
                  value={this.state.address}
                />
              </View>

            </View>
          </View>
          <View style={styles.btnLogin}>
            <View style={styles.frmLoginCenter}>
              <TouchableOpacity style={styles.btnRegister}
                  onPress={()=>{
                    this._order()
                  }}
                >
                <Text style={styles.txtRegister}>TIẾP TỤC</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  componentDidMount(){
    this._loadInfoUser().done();
    this._loadUserName().done();
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1},
    header:{flex:1,backgroundColor:'#2c3e50',flexDirection:'row'},
      iconBack:{flex:2, justifyContent:'center',alignItems:'center'},
        icon:{width:W/20,height:W/20},
      title:{flex:10,justifyContent:'center',alignItems:'center'},
        txtTitle:{color:'#ecf0f1',fontSize:W/20},
    container:{flex:12},
      frmLogin:{flex:3,justifyContent:'center',alignItems:'center'},
        frmLoginCenter:{width:W - W/20, },
          email:{marginBottom:H/35},
          txtInput:{height:H/25,  paddingBottom: 0 ,borderColor :'#2c3e50',borderBottomWidth:0.5},
          password:{marginBottom:H/35},
      btnLogin:{flex:1,alignItems:'center'},
        btnRegister:{height:H*0.06,backgroundColor:'#d35400',justifyContent:'center',alignItems:'center'},
          txtRegister:{color:'#ecf0f1',fontSize:H*0.025}
});
