import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView,Image,Dimensions
} from 'react-native';
// IDLOAI
import ItemProduct from './Items/ItemProduct.js';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class CollectionDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      renderTop:<View></View>,
      renderTopRight:<View></View>
    }
    t = this;
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.iconBack}>
            <TouchableOpacity
                onPress={()=>{this.props.backToCollection()}}
              >
              <Image
                style={styles.icon}
                source={require('../../../Images/Left.png')}
              />
          </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>{this.props.TENLOAI}         </Text>
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView>
            <View style={{height:H*1.2}}>
              {this.state.renderTop}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
  componentDidMount(){
    fetch("http://192.168.1.2/myshop/dssanphamtheoloai.php"
        ,{
          method : "POST",
          headers:{
            "Accept" : "application/json",
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            "idLoai" : this.props.IDLOAI,
          })
        }
      ).then((response)=>response.json())
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
    header:{flex:1,backgroundColor:'#2c3e50',flexDirection:'row'},
      iconBack:{flex:2, justifyContent:'center',alignItems:'center'},
        icon:{width:W/20,height:W/20},
      title:{flex:10,justifyContent:'center',alignItems:'center'},
        txtTitle:{color:'#ecf0f1',fontSize:W/20},
    container:{flex:12},

    tops:{height:H*0.4,flexDirection:'row',alignItems:'center',backgroundColor:'#ecf0f1'},
      topLeft:{width:W/2 - W/100,height:H*0.39 ,backgroundColor:'#f5f5f5'},
      topRight:{width:W/2 - W/100,height:H*0.39, backgroundColor:'#f5f5f5' ,marginLeft:W/100+W/100},
    hot:{height:H*0.05,backgroundColor:'#ecf0f1',justifyContent:'center'},
      txtHot:{marginLeft:H*0.01},

});
