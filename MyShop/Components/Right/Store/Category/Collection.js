import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,ScrollView,Dimensions,Image
} from 'react-native';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class Collection extends Component {
  constructor(props){
    super(props);
    this.state={
      collections: <View></View>
    }
    t = this;
  }
  render() {
    return (
      <View
        style={styles.wrapper}

        >
        <ScrollView>
          {this.state.collections}
        </ScrollView>
      </View>
    );
  }
  componentDidMount(){
    fetch("http://192.168.1.2/myshop/loaisanpham.php")
   .then((response)=> response.json())
   .then((responseJson)=>{
      t.setState({
        collections:
        responseJson.map(function(o, i){
         return(
           <TouchableOpacity key={i} style={styles.itemList}
              onPress={()=>{t.props.goToCollectionDetails(o.idLoai,o.TenLoai)}}
             >
               <View style={styles.vImg}>
                 <Image
                      style={styles.img}
                      source={{uri: 'http://192.168.1.2/myshop/upload/loaisanpham/'+o.urlHinh}}
                   />
               </View>
               <View style={styles.vText}>
                 <View style={styles.vTextHeader}>
                   <Text style={styles.txtHeader}>{o.TenLoai}</Text>
                 </View>
                 <View style={styles.vTextBottom}>
                   <Text style={styles.txtBottom}>{o.MoTa}</Text>
                 </View>
               </View>
               <View style={styles.vIcon}>
                 <Image
                    style={styles.imgIcon}
                    source={require('../../../Images/ForwardFilled.png')}
                  />
               </View>
          </TouchableOpacity>

          );
         })

      });
   }).catch((e)=>{console.error(e);});
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1,backgroundColor:'#ECF0F1'},
      itemList:{height:H*0.2,marginTop:H*0.01,flexDirection:'row'},
        vImg:{width:W*0.3,justifyContent:'center',alignItems:'center'},
          img:{width:W*0.28,height:H*0.19,backgroundColor:'#2c3e50'},
        vText:{width:W*0.6,backgroundColor:'#F5F5F5'},
          vTextHeader:{height:H*0.05},
            txtHeader:{fontSize:H*0.03,color:'black',textDecorationLine:'underline'},
          vTextBottom:{height:H*0.15},
            txtBottom:{fontSize:H*0.02,color:'black'},
        vIcon:{width:W*0.1,justifyContent:'center',alignItems:'center',backgroundColor:'#F5F5F5'},
          imgIcon:{height:W*0.08,width:W*0.05}


});
