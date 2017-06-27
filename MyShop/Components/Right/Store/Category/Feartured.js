import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView,Image,Dimensions,ListView
} from 'react-native';
import Swiper from 'react-native-swiper';

import ItemProduct from './Items/ItemProduct.js';
import ItemNews from './Items/ItemNews.js';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class Feartured extends Component {
  constructor(props){
      super(props);
      this.state ={
        renderTop: <View></View>,
        renderTopRight : <View></View>,
        renderHotLeft: <View></View>,
        renderHotRight: <View></View>,
        slide: <View></View>
      }
      t = this;
    }

  render() {
    return (
      <ScrollView>
      <View style={styles.wrapper}>

            {this.state.slide}

      </View>

      <View style={styles.top}>
        <View style={styles.topLeft}>
          {this.state.renderHotLeft}
        </View>
        <View style={styles.topRight}>
          {this.state.renderHotRight}
        </View>
      </View>

      <View style={styles.hot}>
          <Text style={styles.txtHot}>TOP SẢN PHẨM HOT NHẤT TUẦN</Text>
      </View>

      <View style={{height:H*1.2}}>
        {this.state.renderTop}
      </View>
      </ScrollView>

    );
  }
  componentDidMount(){
    fetch("http://192.168.1.2/myshop/sanphamtop.php")
    .then((response)=> response.json())
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
    }).catch((e)=>{console.error(e);});
    // fetch sanphamhot - 2 san pham
    fetch("http://192.168.1.2/myshop/sanphamhot.php")
    .then((response)=> response.json())
    .then((responseJson)=>{
          responseJson.map(function(o, i){
              if(i%2!=0){
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
              if(i%2==0){
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
          });
    }).catch((e)=>{console.error(e);});
    // fetch slide hinh STT=1,2,3
    fetch("http://192.168.1.2/myshop/hienthislide.php")
    .then((response)=> response.json())
    .then((responseJson)=>{
        t.setState({
          slide:
            <Swiper height={H*0.4} autoplay={true}>
              {responseJson.map(function(o, i){
                console.log('')
                return(
                <View key={i} style={styles.slide}>
                  <Image
                    style={{width:W,height:H*0.4}}
                    source={{uri: 'http://192.168.1.2/myshop/upload/slide/'+ o.urlHinh}}
                   />
                </View>
                  );
            })}
            </Swiper>
        });

    }).catch((e)=>{console.error(e);});

  }
}

const styles = StyleSheet.create({
  wrapper:{height:H*0.4},
  slide: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#9DD6EB',},
  top:{height:H*0.4,flexDirection:'row',alignItems:'center',backgroundColor:'#ecf0f1'},
  tops:{height:H*0.4,flexDirection:'row',alignItems:'center',backgroundColor:'#ecf0f1'},
    topLeft:{width:W/2 - W/100,height:H*0.39 ,backgroundColor:'#f5f5f5'},
    topRight:{width:W/2 - W/100,height:H*0.39, backgroundColor:'#f5f5f5' ,marginLeft:W/100+W/100},
  hot:{height:H*0.05,backgroundColor:'#ecf0f1',justifyContent:'center'},
    txtHot:{marginLeft:H*0.01},


});
