import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,TextInput,Image,AsyncStorage,Alert
} from 'react-native';
import Dimensions from 'Dimensions';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  _setValue = async () => {
  try {
    await AsyncStorage.setItem('@Login:key6', this.state.username);
     console.log("============setItem")
  } catch (error) { // log the error
  }
};
  _Login(){
    fetch("http://192.168.1.2/myshop/dangnhap.php"
        ,{
          method : "POST",
          headers:{
            "Accept" : "application/json",
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            "un" : this.state.username,
            "pa" : this.state.password
          })
        }
      ).then((response)=>response.json())
      .then((responseJson)=>{
        if(responseJson == 1){
          this._setValue().done();
          this.props.goToMain();
        }
        else {
          Alert.alert(
            'Thông báo',
            'Đăng nhập thất bại. Vui lòng kiểm tra tài khoản hoặc mật khẩu',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        }
      }).catch((error)=>{
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.iconBack}>
            <TouchableOpacity
                onPress={()=>{this.props.backToMain()}}
              >
              <Image
                style={styles.icon}
                source={require('../../Images/Left.png')}
              />
          </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>Đăng nhập         </Text>
          </View>
        </View>
        <View style={styles.container}>
        <Image style={{height:H*0.95,width:W}}
          source={require('../../Images/LOAD2.png')}
          >
          <View style={styles.frmLogin}>
            <View style={styles.frmLoginCenter}>
              <View style={styles.email}>
                <Text>USER NAME</Text>
                <TextInput
                multiline={true} // Show border ios
                placeholderTextColor ='#27ae60'
                selectionColor = '#27ae60'
                underlineColorAndroid ='rgba(0,0,0,0)'
                style={styles.txtInput}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                />
              </View>
              <View style={styles.password}>
                <Text >MẬT KHẨU</Text>
                <TextInput
                  multiline={true} // Show border ios
                  placeholderTextColor ='#27ae60'
                  selectionColor = '#27ae60'
                  underlineColorAndroid ='rgba(0,0,0,0)'
                  style={styles.txtInput}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  secureTextEntry = {true}
                />
              </View>
            </View>
          </View>
          <View style={styles.btnLogin}>
              <View style={styles.frmLoginCenter}>
                <TouchableOpacity style={styles.btn}
                    onPress={()=>{
                      this._Login()
                    }}
                  >
                  <Text style={styles.txtBtn}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <View style={styles.btnOr}>
                  <View style={styles.btnBoder}>
                    <View style={styles.btnBoder2}></View>
                  </View>
                  <View style={styles.viewOr}><Text>Hoặc</Text></View>
                  <View style={styles.btnBoder}>
                    <View style={styles.btnBoder2}></View>
                  </View>
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={()=>{this.props.goToRegister()}}
                  >
                  <Text style={styles.txtBtn}>ĐĂNG KÝ</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Image>
      </View>
      </View>
    );
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
      frmLogin:{flex:1,justifyContent:'center',alignItems:'center'},
        frmLoginCenter:{width:W - W/20, },
          email:{marginBottom:H/35},
          txtInput:{height:H/25,  paddingBottom: 0 ,borderColor :'#2c3e50',borderBottomWidth:0.5},
      btnLogin:{flex:3,alignItems:'center'},
        btn:{height:H*0.06,backgroundColor:'#2c3e50',justifyContent:'center',alignItems:'center'},
          txtBtn:{color:'#ecf0f1',fontSize:H*0.025},
        btnOr:{height:H*0.06,flexDirection:'row',alignItems:'center'},
          btnBoder:{flex:4},
            btnBoder2:{height:H*0.0025,backgroundColor:'#2c3e50'},
          viewOr:{flex:2,alignItems:'center'}
});
