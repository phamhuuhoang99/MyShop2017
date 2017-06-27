/*
  Header screen : store , search
**/
import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,Image,TextInput
} from 'react-native';
import Dimensions from 'Dimensions';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class HeaderSS extends Component {
  constructor(props){
    super(props);
      this.state={
        text:''
      }
    t= this;
  }
  _search(){
    fetch("http://192.168.1.2/myshop/timkiemsanpham.php"
        ,{
          method : "POST",
          headers:{
            "Accept" : "application/json",
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            "search" : this.state.text,
          })
        }
      ).then((response)=>response.json())
      .then((responseJson)=>{

        this.props.goToSearch(t.state.text);
      }).catch((error)=>{
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.wrapper}>
          <View style={styles.left}>

            <View style={styles.lLeft}>
              <TouchableOpacity onPress={()=>{this.props.toggleMenu()}}>
                <Image
                  style={styles.icon}
                  source={require('../../Images/Menu.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.lRight}>
                <Image
                  style={styles.logo}
                  source={require('../../Images/LogoAo.png')}
                />
            </View>

          </View>

          <View style={styles.right}>
            <View style={styles.search}>
                <View style={styles.txtSearch}>
                  <TextInput
                    placeholder="Tìm kiếm sản phẩm..."
                    multiline={true} // Show border ios
                    placeholderTextColor ='#2F3951'
                    selectionColor = '#2F3951'
                    underlineColorAndroid ='rgba(0,0,0,0)'
                    style={styles.txtInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>

                <TouchableOpacity style={styles.iconSearch}
                  onPress={()=>{this._search()}}
                  >
                  <Image
                    style={styles.iconS}
                    source={require('../../Images/Search.png')}
                  />
                </TouchableOpacity>
            </View>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1,flexDirection:'row'},
    left:{flex:2,flexDirection:'row'},
      lLeft:{flex:1,backgroundColor:'#2c3e50', justifyContent: 'center',alignItems: 'center'},
        icon:{width:W/20,height:W/20},
      lRight:{flex:1,backgroundColor:'#2c3e50', justifyContent: 'center',alignItems: 'center'},
        logo:{width:W*0.09,height:W*0.09},
    right:{flex:9,backgroundColor:'#2c3e50', justifyContent: 'center',alignItems: 'center'},
      search:{height:W/10,width:W*0.7,backgroundColor:'#ecf0f1',borderRadius:W/50,flexDirection:'row',},
        txtSearch:{width:W*0.6,alignItems:'center'},
          txtInput:{height:H*0.04,marginLeft:W*0.02,borderColor :'#2c3e50',borderBottomWidth:0.5,width:W*0.55,fontSize:H*0.02},

        iconSearch:{width:W*0.1,justifyContent:'center',alignItems:'center',borderLeftWidth:0.5,borderColor:'#2F3951'},
          iconS:{width:W*0.06,height:W*0.06}


});
