import React, { Component } from 'react';
import { AppRegistry,Image,Dimensions } from 'react-native';
var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class Intro extends Component {
  constructor(props){
    super(props);
    t=this;
  }
  render() {
    return (
      <Image
        style={{width:W,height:H}}
       source={require('./Images/LOAD.png')}
     />
    );
  }
  componentDidMount(){
    setTimeout(function(){ t.props.gotoMain(); }, 2000);
  }
}
