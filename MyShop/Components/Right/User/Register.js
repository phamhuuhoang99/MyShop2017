import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,TextInput,Image,Alert
} from 'react-native';
import Dimensions from 'Dimensions';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
export default class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      username:'',
      password:'',
      password1: '',
      name:'',
      phone:'',
      address:'',
    }
  }
  register(){
    if(this.state.password == this.state.password1)
    {
      fetch("http://192.168.1.2/myshop/dangky.php"
          ,{
            method : "POST",
            headers:{
              "Accept" : "application/json",
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              "email" : this.state.email,
              "pa" : this.state.password,
              "name" : this.state.name,
              "phone" : this.state.phone,
              "ad" : this.state.address,
              "username": this.state.username
            })
          }
        ).then((response)=>response.json())
        .then((responseJson)=>{
          if(responseJson == 'THANH_CONG'){
            Alert.alert(
              'Thông báo',
              'Đăng ký thành công',
              [
                {text: 'OK', onPress: () => {this.props.backToLogin()}},
              ],
              { cancelable: false }
            )
          }
          else {
            Alert.alert(
              'Thông báo',
              'Đăng ký thất bại. Vui lòng kiểm tra lại!',
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
      else {
        Alert.alert(
          'Thông báo',
          'Bạn xác nhận lại mật khẩu không hợp lệ.',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.iconBack}>
            <TouchableOpacity style={styles.icon}
              onPress={()=>{
                this.props.backToLogin()
              }}
              >
              <Image
                style={styles.icon}
                source={require('../../Images/Left.png')}
              />
          </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>Đăng ký         </Text>
          </View>
        </View>
        <Image style={{height:H*0.925,width:W}}
          source={require('../../Images/LOAD2.png')}
          >
          <View style={styles.frmLogin}>
            <View style={styles.frmLoginCenter}>
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
                <Text >USER NAME</Text>
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
                />
              </View>

              <View style={styles.password}>
                <Text>NHẬP LẠI MẬT KHẨU</Text>
                <TextInput
                  multiline={true} // Show border ios
                  placeholderTextColor ='#27ae60'
                  selectionColor = '#27ae60'
                  underlineColorAndroid ='rgba(0,0,0,0)'
                  style={styles.txtInput}
                  onChangeText={(password1) => this.setState({password1})}
                  value={this.state.password1}
                />
              </View>

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
                <Text>ĐỊA CHỈ</Text>
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
                    this.register()
                  }}
                >
                <Text style={styles.txtRegister}>ĐĂNG KÝ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
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
      frmLogin:{flex:3,justifyContent:'center',alignItems:'center'},
        frmLoginCenter:{width:W - W/20, },
          email:{marginBottom:H/35},
          txtInput:{height:H/25,  paddingBottom: 0 ,borderColor :'#2c3e50',borderBottomWidth:0.5},
          password:{marginBottom:H/35},
      btnLogin:{flex:1,alignItems:'center'},
        btnRegister:{height:H*0.06,backgroundColor:'#2c3e50',justifyContent:'center',alignItems:'center'},
          txtRegister:{color:'#ecf0f1',fontSize:H*0.025}
});
