import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView,Image,Dimensions
} from 'react-native';
import ItemProduct from './Items/ItemProduct.js';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class Top extends Component {
  constructor(props){
      super(props);
      this.state ={
        renderHotLeft: <View></View>,
        renderHotRight: <View></View>,
        renderHotLeft1: <View></View>,
        renderTopRight1:<View></View>,
      }
      t = this;
    }
  render() {
    return (
      <View style={styles.wrapper}>


          <View style={styles.top}>
            <View style={styles.topLeft}>
              {this.state.renderHotLeft}
            </View>
            <View style={styles.topRight}>
              {this.state.renderHotRight}
            </View>
          </View>

          <View style={styles.top}>
            <View style={styles.topLeft}>
              {this.state.renderHotLeft1}
            </View>
            <View style={styles.topRight}>
              {this.state.renderHotRight1}
            </View>
          </View>


      </View>
    );
  }
  componentDidMount(){
    fetch("http://192.168.1.2/myshop/sanphamtopmuanhieu.php")
    .then((response)=> response.json())
    .then((responseJson)=>{
          responseJson.map(function(o, i){
              if(i==0){
                t.setState({
                  renderHotLeft:
                  <TouchableOpacity
                    key={i}
                    style={styles.topLeft}
                    onPress={()=>{t.props.goToDetails(o.idSP,o.TenSanPham,o.Gia,o.urlHinh)}}
                    >
                    <Image
                       style={styles.topLeft}
                       source={{uri: 'http://192.168.1.2/myshop/upload/hinhchinh/' + o.urlHinh}}
                    />
                  </TouchableOpacity>
                });
              }
              if(i==1){
                t.setState({
                  renderHotLeft1:
                  <TouchableOpacity
                    key={i}
                    style={styles.topLeft}
                    onPress={()=>{t.props.goToDetails(o.idSP,o.TenSanPham,o.Gia,o.urlHinh)}}
                    >
                        <Image
                           style={styles.topLeft}
                           source={{uri: 'http://192.168.1.2/myshop/upload/hinhchinh/' + o.urlHinh}}
                        />
                  </TouchableOpacity>
                });
              }
              if(i==2){
                t.setState({
                  renderHotRight:
                  <TouchableOpacity
                    key={i}
                    style={styles.topRight}
                    onPress={()=>{t.props.goToDetails(o.idSP,o.TenSanPham,o.Gia,o.urlHinh)}}
                    >
                      <Image
                         style={styles.topRight}
                         source={{uri: 'http://192.168.1.2/myshop/upload/hinhchinh/' + o.urlHinh}}
                      />
                  </TouchableOpacity>
                });
              }
              if(i==3){
                t.setState({
                  renderHotRight1:
                  <TouchableOpacity
                    key={i}
                    style={styles.topRight}
                    onPress={()=>{t.props.goToDetails(o.idSP,o.TenSanPham,o.Gia,o.urlHinh)}}
                    >
                      <Image
                         style={styles.topRight}
                         source={{uri: 'http://192.168.1.2/myshop/upload/hinhchinh/' + o.urlHinh}}
                      />
                  </TouchableOpacity>
                });
              }
          });
    }).catch((e)=>{console.error(e);});
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1},
    top:{height:H*0.4,flexDirection:'row',alignItems:'center',backgroundColor:'#ecf0f1'},
      topLeft:{width:W/2 - W/100,height:H*0.39 ,backgroundColor:'#f5f5f5'},
      topRight:{width:W/2 - W/100,height:H*0.39, backgroundColor:'#f5f5f5' ,marginLeft:W/100+W/100},
    hot:{height:H*0.05,backgroundColor:'#ecf0f1',justifyContent:'center'},
      txtHot:{marginLeft:H*0.01},

});
