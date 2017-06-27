import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView,Dimensions,AsyncStorage
} from 'react-native';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
var arrH =[];
var value;
import HeaderCNU from '../Header/HeaderCNU.js';
export default class Notificaion extends Component {
  constructor(props){
    super(props);
    this.state={
      renderHistory:<View></View>,
      un: ''
    }
    t=this;
  }
  _loadUserName = async () => {
    try {
      value = await AsyncStorage.getItem('@Login:key6');
      if(value!=null){

        fetch("http://192.168.1.2/myshop/loadlichsu.php"
            ,{
              method : "POST",
              headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
              },
              body : JSON.stringify({
                "un" : value
              })
            }
          ).then((response)=>response.json())
          .then((responseJson)=>{
                t.setState({
                  renderHistory:
                    responseJson.map(function(o, i){
                        return(
                          <View style={styles.container} key={i}>
                              <View style={styles.vHistory}>
                                <View style={{width:W*0.4,borderRightWidth:0.5,borderColor:'black'}}>
                                  <View style={styles.txt}><Text>Tên sản phẩm</Text></View>
                                  <View style={styles.txt}><Text>Đơn giá</Text></View>
                                  <View style={styles.txt}><Text>Tổng tiền</Text></View>
                                  <View style={styles.txt}><Text>Thời điểm đặt hàng</Text></View>
                                </View>
                                <View style={{width:W*0.6}}>
                                  <View style={styles.txt}><Text>{o.TenSanPham}</Text></View>
                                  <View style={styles.txt}><Text>{o.DonGia}</Text></View>
                                  <View style={styles.txt}><Text>{o.TongTien}</Text></View>
                                  <View style={styles.txt}><Text>{o.ThoiDiemDatHang}</Text></View>
                                </View>
                              </View>
                          </View>
                        )
                    })

                });
          }).catch((error)=>{
            console.error(error);
          });
        }
    } catch (error) {
      _loadUserName().done();
    }
  }
  componentWillMount(){


  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <HeaderCNU title = 'ĐƠN HÀNG'/>
        </View>
        <View style={styles.container}>
          <ScrollView>
            {this.state.renderHistory}
          </ScrollView>
        </View>
      </View>
    );
  }
  componentDidMount(){
    this._loadUserName().done();
  }

}

const styles = StyleSheet.create({
    wrapper:{flex:1},
    header:{flex:1},
    container:{flex:12,alignItems:'center'},
      vHistory:{height:H*0.2,flexDirection:'row',borderWidth:0.5,borderColor:'black',marginTop:H*0.01,width:W*0.95},
      txt:{height:H*0.05,justifyContent:'center',marginLeft:W*0.05},
    notificaion:{fontSize:H*0.02}
});
