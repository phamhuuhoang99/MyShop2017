import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView,Dimensions
} from 'react-native';

import ItemProduct from './Items/ItemProduct.js';


var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;

export default class Sale extends Component {
  constructor(props){
    super(props);
    this.state={
      renderTop: <View></View>,
      renderTopRight: <View></View>
    }
    t = this;
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.hot}>
              <Text style={styles.txtHot}>ĐANG KHUYẾN MÃI</Text>
          </View>

          <View style={{height:H*1.2}}>
            {this.state.renderTop}
          </View>
        </ScrollView>
      </View>
    );
  }
  componentDidMount(){
    fetch("http://192.168.1.2/myshop/sanphamkhuyenmai.php")
      .then((response)=>response.json())
      .then((responseJson)=>{

        this.setState({
          renderTop:
          responseJson.map(function(o, i){
          if(i%2!=0)
            {
            return (
              <View style={styles.tops} key={i}>
                <View style={styles.topLeft}>
                  <TouchableOpacity onPress={()=>{t.props.goToDetails(o.idSP,o.TenSanPham,o.Gia,o.urlHinh)}}>
                    <ItemProduct
                      img = {'http://192.168.1.2/myshop/upload/hinhchinh/' + o.urlHinh}
                      title={o.TenSanPham}
                      price={o.Gia}
                    />
                  </TouchableOpacity>
                </View>
                {t.state.renderTopRight}
              </View>
            );
          }
        else {
          t.setState({
            renderTopRight:
                    <View style={styles.topRight}>
                        <TouchableOpacity onPress={()=>{t.props.goToDetails(o.idSP,o.TenSanPham,o.Gia,o.urlHinh)}}>
                          <ItemProduct
                            img = {'http://192.168.1.2/myshop/upload/hinhchinh/' + o.urlHinh}
                            title={o.TenSanPham}
                            price={o.Gia}
                          />
                        </TouchableOpacity>
                    </View>
          });
        }
          })
        });

      }).catch((error)=>{
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1},
      top:{height:H*0.4,flexDirection:'row',alignItems:'center',backgroundColor:'#ecf0f1'},
      tops:{height:H*0.4,flexDirection:'row',alignItems:'center',backgroundColor:'#ecf0f1'},
        topLeft:{width:W/2 - W/100,height:H*0.39 ,backgroundColor:'#f5f5f5'},
        topRight:{width:W/2 - W/100,height:H*0.39, backgroundColor:'#f5f5f5' ,marginLeft:W/100+W/100},
      hot:{height:H*0.05,backgroundColor:'#ecf0f1',justifyContent:'center'},
        txtHot:{marginLeft:H*0.01},
});
