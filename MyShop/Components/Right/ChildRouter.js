import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import TabCategory from './Store/TabCategory.js';
var t;
export default class ChildRouter extends Component{
  constructor(props){
    super(props);
    t = this;
  }
  renderScene(route, navigator){
    switch(route.name){
        case 'tab' : return(<TabCategory
          toggleMenu={()=>{t.props.toggleMenu()}}
          goToDetails={(i,e,f,z)=>{t.props.goToDetails(i,e,f,z)}}
          goToCollectionDetails={(i,n)=>{t.props.goToCollectionDetails(i,n)}}
          />)
    }
  }
  render(){
    return(
      <Navigator
        initialRoute={{ name: 'tab'}}
        renderScene={this.renderScene}
      />
    );
  }
}
