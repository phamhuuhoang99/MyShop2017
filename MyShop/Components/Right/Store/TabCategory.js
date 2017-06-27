import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,View,Dimensions,Image,Text,ScrollView,TouchableOpacity
} from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');

import Feartured from './Category/Feartured.js';
import Top from './Category/Top.js';
import Sale from './Category/Sale.js';
import Collection from './Category/Collection.js';
import HeaderSS from '../Header/HeaderSS.js';
var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class TabCategory extends Component {
  constructor(props){
    super(props);
    this.state={
      renderContainer:
              this._home()
    }
    t = this;
  }
  _home(){
    return(
      <ScrollableTabView
        tabBarBackgroundColor = '#2c3e50'
        tabBarActiveTextColor = '#ecf0f1'
        tabBarInactiveTextColor = '#ecf0f1'
        tabBarUnderlineStyle = {{backgroundColor:'#d35400',borderWidth:0.5}}
        >
        <Feartured tabLabel="Nổi bật" goToDetails={(i,e,f,z)=>{this.props.goToDetails(i,e,f,z)}}/>
        <Top tabLabel="Top" goToDetails={(i,e,f,z)=>{this.props.goToDetails(i,e,f,z)}}/>
        <Sale tabLabel="Khuyến mãi" goToDetails={(i,e,f,z)=>{this.props.goToDetails(i,e,f,z)}}/>
        <Collection tabLabel="Bộ sưu tập" goToCollectionDetails={(i,n)=>{this.props.goToCollectionDetails(i,n)}}/>
      </ScrollableTabView>
    );
  }
  _returnHome(){
    this.setState({
      renderContainer:
              this._home()
    });
  }
  goToSearch(e){
    fetch("http://192.168.1.2/myshop/timkiemsanpham.php"
        ,{
          method : "POST",
          headers:{
            "Accept" : "application/json",
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            "search" : e,
          })
        }
      ).then((response)=>response.json())
      .then((responseJson)=>{
        this.setState({
          renderContainer:
          <View>
          <View style={{height:H*0.05,flexDirection:'row'}}>
            <TouchableOpacity style={{width:W*0.1,justifyContent:'center',alignItems:'center'}}
              onPress={()=>{this._returnHome()}}
              >
              <Image
                style={{width:H*0.03,height:H*0.03}}
               source={require('../../Images/Delete.png')}
             />
           </TouchableOpacity>
            <View style={{width:W*0.9}}></View>
          </View>
          <ScrollView>
          {
              responseJson.map(function(o, i){
                  return(
                    <TouchableOpacity style={styles.cart} key={i}
                      onPress={()=>{t.props.goToDetails(o.idSP,o.TenSanPham,o.Gia,o.urlHinh)}}
                      >
                      <View style={styles.cartLeft}>
                        <Image style={styles.cartLeftCenter}
                        source={{uri: 'http://192.168.1.2/myshop/upload/hinhchinh/' + o.urlHinh}}
                        />
                      </View>
                      <View style={styles.cartRight}>
                        <View style={styles.cartRightCenter}>
                          <View style={styles.info}>
                            <Text>{o.TenSanPham}</Text>
                            <Text style={styles.price}>{o.Gia} VND</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
              })
          }
        </ScrollView>


        </View>
        });

      }).catch((error)=>{
        console.error(error);
      });
  }
  render() {
    return (
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <HeaderSS toggleMenu={()=>{this.props.toggleMenu()}}
              goToSearch={(e)=>{this.goToSearch(e)}}
            />
          </View>
          <View style={styles.container}>
              {this.state.renderContainer}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1},
    header:{flex:1},
    container:{flex:12},
    cart:{height:H*0.2,backgroundColor:'#f5f5f5',flexDirection:'row',marginBottom:W/100+W/100},
      cartLeft:{width:W*0.3,justifyContent:'center',alignItems:'center'},
        cartLeftCenter:{width:W*0.25,height:H*0.15,backgroundColor:'#2c3e50'},
      cartRight:{width:W*0.7,justifyContent:'center',alignItems:'center'},
        cartRightCenter:{width:W*0.68},
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
