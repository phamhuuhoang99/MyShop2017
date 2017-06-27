import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView,Dimensions,Image,Alert,AsyncStorage
} from 'react-native';
import Swiper from 'react-native-swiper';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
var arrSize =  [];
var count = 0;
var arrLoad = []; // mang moc ra tu sync va gan vo lai
export default class Details extends Component {
  constructor(props){
    super(props);
    this.state={
      quantity:0,
      sizeFirst:<View style={styles.btnSizes}><Text>31</Text></View>,
      sizes:<View></View>,
      txtDetails: 'Giao hàng trong khu vực TP.HCM',
      imgSlides:<View></View>,
      sizeNumber:1, // size
      index:0, // gia tri trong mang sizes
      quantityN: 1, // so luong san pham muon dat
      soluongton:0

    }
    t  = this;
  }
  // tang giam size
  clickPlusSize(){
      if(t.state.index>-1 && t.state.index < count -1){

        console.log('111111 day la cong');
        t.setState({
          index:t.state.index + 1
        },function(){
            t.setState({
              sizeNumber:arrSize[t.state.index].size
            },function(){
              t._getQuantity();
            });
        });
      }
  }
  clickMinusSize(){
    if(t.state.index>0 && t.state.index < count){
      console.log('222222 day la tru');
      t.setState({
        index:t.state.index - 1
      },function(){
          t.setState({
            sizeNumber:arrSize[t.state.index].size
          },function(){
            t._getQuantity();
          });
      });
    }
  }
  // tang giam so luong
  clickPlusQuantity(){
      if(t.state.quantityN > 0 && t.state.quantityN < 10){
        t.setState({
          quantityN:t.state.quantityN + 1
        });
      }
      else {
        Alert.alert(
          'Thông báo',
          'Số lượng order không được quá 10 cho một sản phẩm',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
          )
      }
  }
  clickMinusQuantity(){
    if(t.state.quantityN > 1 && t.state.quantityN < 10){
      t.setState({
        quantityN:t.state.quantityN - 1
      });
    }
  }
  // luu vao may local

  _setDuLieu = async () => {
     try {
       var arr = [
         new OrderProduct(t.props.IDSP,t.props.URL,t.props.NAMEP,t.props.PRICE,t.state.sizeNumber,t.state.quantityN),
       ];
       arrLoad = arrLoad.concat(arr);
       await AsyncStorage.setItem('@NhatKy6:key', JSON.stringify(arrLoad));
       console.log("===========++++++------" + JSON.stringify(arr));
     } catch (error) {
     }
   };
   _loadDuLieu = async () => {
     try {
       var v = await AsyncStorage.getItem('@NhatKy6:key');
       if (v !== null){
           arrLoad = JSON.parse(v);
       } else {
       }
     } catch (error) {
     }
     return this._setDuLieu();
   };

   order(){
     if(this.state.soluongton < this.state.quantityN){
       Alert.alert(
         'Thông báo',
         'Số lượng tồn không cung cấp đủ cho yêu cầu của bạn. Vui lòng thực hiện lại thao tác',
         [
           {text: 'OK', onPress: () => console.log('OK Pressed')},
         ],
         { cancelable: false }
         )
     }
     else{
       this._loadDuLieu().done();
       return this.props.backToDrawer();
    }
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
                  style={styles.iconH}
                  source={require('../../Images/Left.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.titleH}>
              <Text style={styles.txtTitleH}>{this.props.NAMEP}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.info}>
                <View style={styles.imgs}>

                      {this.state.imgSlides}

                </View>
                <View style={styles.infoAndPrice}>
                  <Text style={styles.title}>{this.props.NAMEP}</Text>
                  <Text style={styles.price}>{this.props.PRICE} VND</Text>
                </View>
                <View style={styles.size}>

                <View style={styles.titleS}>
                    <Text style={styles.title}>Kích thước</Text>
                </View>

                <View style={styles.numberQ}>
                        <View style={styles.nLeft}>
                        <TouchableOpacity style={styles.plusAndMinus}
                          onPress={()=>{this.clickMinusSize()}}
                        >
                            <Text style={styles.txtPAM}>-</Text>
                          </TouchableOpacity>
                          <View style={styles.nLeftCenter}>
                            <View style={{height:H*0.05,justifyContent:'center',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#2c3e50'}}>
                              <Text>{this.state.sizeNumber}</Text>
                            </View>
                          </View>
                          <TouchableOpacity style={styles.plusAndMinus}
                            onPress={()=>{this.clickPlusSize()}}
                          >
                            <Text style={styles.txtPAM}>+</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.nRight}></View>
                      </View>
                </View>



                <View style={styles.quantity} >
                  <View style={styles.quantityCenter}>
                      <View style={styles.titleQ}>
                          <Text style={styles.title}>Số lượng</Text>
                      </View>
                      <View style={styles.numberQ}>
                        <View style={styles.nLeft}>
                          <TouchableOpacity style={styles.plusAndMinus}
                            onPress={()=>{this.clickMinusQuantity()}}
                          >
                            <Text style={styles.txtPAM}>-</Text>
                          </TouchableOpacity>
                          <View style={styles.nLeftCenter}>
                            <View style={{height:H*0.05,justifyContent:'center',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#2c3e50'}}>
                              <Text>{this.state.quantityN}</Text>
                            </View>
                          </View>
                          <TouchableOpacity style={styles.plusAndMinus}
                            onPress={()=>{this.clickPlusQuantity()}}
                          >
                            <Text style={styles.txtPAM}>+</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.nRight}></View>
                      </View>
                      <View style={styles.quantityQ}>
                            <Text style={styles.txtQ}>*Hiện tại còn : {this.state.soluongton} sản phẩm</Text>
                      </View>
                  </View>
                </View>
              </View>
              <View style={styles.details}>
                <Text>{this.state.txtDetails}</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.bottom}>
              <TouchableOpacity style={styles.bottom}
                onPress={()=>{this.order()}}
              >
                <Image
                  style={styles.icon}
                  source={require('../../Images/ShoppingCart2.png')}
                />
                <Text style={styles.txtOrder}>ĐẶT HÀNG</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
  _getQuantity(){
      fetch("http://192.168.1.2/myshop/kiemtrasoluong.php"
       ,{
         method : "POST",
         headers:{
           "Accept" : "application/json",
           "Content-Type" : "application/json"
         },
         body : JSON.stringify({
           "idSP" : this.props.IDSP,
           "size" : this.state.sizeNumber
         })
       }
     ).then((response)=>response.json())
     .then((responseJson)=>{

             if(responseJson[0] != null){
               t.setState({
                 soluongton:
                  responseJson[0].SoLuong
               });
             }

     }).catch((error)=>{
       console.error(error);
     });
  }
  componentDidMount(){
      // fetch sp _ thuoc tinh
    fetch("http://192.168.1.2/myshop/chitietsanpham.php"
     ,{
       method : "POST",
       headers:{
         "Accept" : "application/json",
         "Content-Type" : "application/json"
       },
       body : JSON.stringify({
         "idSP" : this.props.IDSP,
       })
     }
   ).then((response)=>response.json())
   .then((responseJson)=>{
     console.log("xxxxx")
     responseJson.map(function(o, i){
          arrSize = arrSize.concat([{size:o.Size}]);
          count++;
           t.setState({
             sizeNumber: responseJson[t.state.index].Size,
             quantity: o.SoLuong,
             sizeFirst:<View style={styles.btnSizes}><Text>{o.Size}</Text></View>,
             txtDetails:o.ChinhSachVanChuyen,
           });
     });
     t._getQuantity();
   }).catch((error)=>{
     console.error(error);
   });
   // fetch sanpham_hinh
   fetch("http://192.168.1.2/myshop/chitiethinhanh.php"
     ,{
       method : "POST",
       headers:{
         "Accept" : "application/json",
         "Content-Type" : "application/json"
       },
       body : JSON.stringify({
         "idSP" : this.props.IDSP,
       })
     }
    ).then((response)=>response.json())
    .then((responseJson)=>{
      t.setState({
        imgSlides:
        <Swiper height={H*0.36} autoplay={true}>
            {responseJson.map(function(o, i){
              return(
                <View key={i} style={styles.slide}>
                    <Image
                      style={{width:W,height:H*0.36}}
                      source={{uri: 'http://192.168.1.2/myshop/upload/hinhphu/'+o.urlHinh}}
                     />
                </View>
                );
              })}
        </Swiper>
      });
    }).catch((error)=>{
     console.error(error);
    });
      }
}
function OrderProduct(i,u,n,r,s,q){
    this.IDSP = i;
    this.UrlImage = u;
    this.Name = n;
    this.Price = r;
    this.Size = s;
    this.Quantity = q;
}
const styles = StyleSheet.create({
    wrapper:{flex:1},
    header:{flex:1,backgroundColor:'#2c3e50',flexDirection:'row'},
      iconBack:{flex:2, justifyContent:'center',alignItems:'center'},
        iconH:{width:W/20,height:W/20},
      titleH:{flex:10,justifyContent:'center'},
        txtTitleH:{color:'#ecf0f1',fontSize:W/20},
    container:{flex:11},
      info:{height:H*0.77},
        imgs:{height:H*0.36},
            slide: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#9DD6EB',},
        infoAndPrice:{height:H*0.10,justifyContent:'center',marginLeft:W*0.02},
          title:{fontSize:H*0.025},
          price:{fontSize:H*0.025,color:'#e74c3c',marginTop:H*0.01},
        size:{height:H*0.13,justifyContent:'center',marginLeft:W*0.02},
          titleS:{height:H*0.05,justifyContent:'center'},
          sizeCenter:{height:H*0.1},
            titleSize:{height:H*0.05,justifyContent:'center'},
            btnSize:{height:H*0.05,flexDirection:'row'},
              btnSizes:{height:H*0.05,width:H*0.05,borderWidth:0.5,borderColor:'#2c3e50',marginRight:H*0.025,justifyContent:'center',alignItems:'center'},
        color:{height:H*0.13,justifyContent:'center',marginLeft:W*0.02},
          colorCenter:{height:H*0.1},
            titleColor:{height:H*0.05,justifyContent:'center'},
            btnColor:{height:H*0.05,flexDirection:'row',},
              btnColors:{height:H*0.05,width:H*0.06,borderWidth:0.5,borderColor:'#2c3e50',marginRight:H*0.025,justifyContent:'center',alignItems:'center'},
        quantity:{height:H*0.18,justifyContent:'center',marginLeft:W*0.02},
          quantityCenter:{height:H*0.15},
            titleQ:{height:H*0.05,justifyContent:'center'},
            numberQ:{height:H*0.06,flexDirection:'row'},
              nLeft:{width:W*0.3,flexDirection:'row'},
                plusAndMinus:{width:W*0.1,backgroundColor:'#ecf0f1',justifyContent:'center',alignItems:'center'},
                  txtPAM:{fontSize:H*0.03},
                nLeftCenter:{width:W*0.1},
              nRight:{width:W*0.7},
            quantityQ:{height:H*0.04,justifyContent:'center'},
              txtQ:{fontSize:H*0.02,color:'red'},
      details:{height:H*0.2,backgroundColor:'rgba(0, 0, 0, 0.8)',justifyContent:'center',alignItems:'center'},
    bottom:{flex:1,backgroundColor:'#d35400',flexDirection:'row',justifyContent:'center',alignItems:'center'},
      icon:{height:H*0.04,width:H*0.04,marginRight:W*0.01},
      txtOrder:{color:'#ecf0f1',fontSize:H*0.025,marginLeft:W*0.01}
});
