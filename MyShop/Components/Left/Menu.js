import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,Dimensions,Image,AsyncStorage
} from 'react-native';
var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      renderInfo:<View></View>
    }
    t = this;
  }
  _removeStorage = async () => {
    try {
      await AsyncStorage.removeItem('@Login:key6');
    } catch (error) {

    }
  };
  logOut(){
    this._removeStorage().done();
    this.setState({
      renderInfo:
            this._login()
    });
  }
  _login(){
      return(
        <Image style={styles.wrapper}
            source={require('../Images/LOAD.png')}
          >
          <View style={styles.header}>
            <View
              style={styles.imgTemp}

             >
               <Text style={styles.txtColor}>Bạn chưa đăng nhập</Text>
               <Text style={styles.txtColor}>Vui lòng đăng nhập để chúng tôi</Text>
               <Text style={styles.txtColor}>phục vụ bạn tốt hơn</Text>
            </View>
          </View>
          <View style={styles.bottom}
            source={require('../Images/LOAD.png')}
            >
            <TouchableOpacity style={styles.btnLogin}
                onPress={()=>{this.props.goToLogin()}}
              >
              <Text style={styles.txtLogOut}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
          </View>
        </Image>
      );
  }
  _loadInitialState = async () => {
    try {
      value = await AsyncStorage.getItem('@Login:key6');
      if(value!=null){
          t.setState({
            renderInfo:
                <Image style={styles.wrapper}
                  source={require('../Images/LOAD.png')}
                  >
                  <View style={styles.header}>
                    <View style={styles.viewAvatar}>
                        <Image
                          style={styles.imgAvatar}
                            source={require('../Images/UserDefault.png')}
                        />
                    </View>
                    <View style={styles.userName}>
                      <Text style={styles.txtUserName}>{value}</Text>
                    </View>
                  </View>
                  <View style={styles.bottom}

                    >
                    <TouchableOpacity style={styles.btnLogin}
                        onPress={()=>{
                          this.logOut()
                        }}
                      >
                      <Text style={styles.txtLogOut}>ĐĂNG XUẤT</Text>
                    </TouchableOpacity>
                  </View>
              </Image>
          });
      }
      else {
          t.setState({
            renderInfo:
                this._login()
          });
      }
    } catch (error) {
      _loadInitialState().done();
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
          {this.state.renderInfo}
      </View>
    );
  }
  componentDidMount(){
    this._loadInitialState().done();
  }
}

const styles = StyleSheet.create({
    wrapper:{backgroundColor:'#F2F2F2',height:H,width:W*0.7},
      header:{height:H*0.2,borderBottomWidth:0.5,borderColor:'black'},
        viewAvatar:{height:H*0.15,justifyContent:'center',alignItems:'center'},
        imgAvatar:{width: H*0.14, height: H*0.14},
        userName:{height:H*0.05,justifyContent:'center',alignItems:'center'},
          txtUserName:{fontSize:H*0.02,backgroundColor:'rgba(0,0,0,0)'},
        imgTemp:{height:H*0.2,width:W*0.7,justifyContent:'center',alignItems:'center'},
          txtColor:{backgroundColor:'rgba(0,0,0,0)'},
      bottom:{height:H*0.8,width:W*0.7,alignItems:'center'},
        txtLogOut:{color:'#ecf0f1',fontSize:H*0.025},
        btnLogin:{height:H*0.06,width:W*0.3,backgroundColor:'#2F3951',justifyContent:'center',alignItems:'center',marginTop:H*0.1},
});
