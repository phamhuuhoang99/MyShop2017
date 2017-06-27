import React, { Component } from 'react';
import {
  AppRegistry,View,Navigator
} from 'react-native';
//import Search from './Right/Search/Search.js';
import DrawerMenu from './DrawerMenu.js';
//import TabCategory from './Right/Store/TabCategory.js';
import Login from './Right/User/Login.js';
import User from './Right/User/User.js';
import Register from './Right/User/Register.js';
import Cart from './Right/Cart/Cart.js';
import Details from './Right/Store/Details.js';
import CollectionDetails from './Right/Store/Category/CollectionDetails.js';
import ConfirmInfo from './Right/Order/ConfirmInfo.js';
import Intro from './Intro.js';
var t;
export default class Root extends Component {
  constructor(props){
    super(props);
    this.state={
      show : 'Store'
    }
    t = this;
  }
  renderScene(route, navigator){
    switch(route.name){
        case 'drawer' : return(<DrawerMenu
          tabshow = {t.state.show}
          goToDetails={(i,e,f,z)=>{
            navigator.push({name:'details',id: i, nameP: e, price: f,url:z});
          }}
          goToLogin={()=>{
            navigator.push({name:'login'})
          }}
          goToCollectionDetails={(i,n)=>{
            navigator.push({name:'collections',id: i, nameL: n})
          }}
          goToConfirmInfo={()=>{
            navigator.push({name: 'confirmInfo'});
          }}
          />);
        case 'details': return(<Details
          backToDrawer={()=>{
            t.setState({
              show: 'Cart'
            },function(){
              navigator.push({name: 'drawer'})
            });
          }}
          backToMain={()=>{
            navigator.pop();
          }}
          IDSP  = {route.id}
          NAMEP = {route.nameP} // ten cua san pham
          PRICE = {route.price}
          URL   = {route.url} // hinh anh chinh san pham
          />);
        case 'login': return(<Login
          goToRegister={()=>{
            navigator.push({name:'register'})
          }}
          goToMain={()=>{
            navigator.push({name:'drawer'})
          }}
          backToMain={()=>{
            navigator.pop()
          }}
        />);
        case 'register':  return(<Register
          backToLogin={()=>{
            navigator.pop()
          }}
        />);
        case 'collections': return(<CollectionDetails
          IDLOAI= {route.id}
          TENLOAI = {route.nameL}
          backToCollection={()=>{
            navigator.pop()
          }}
          goToDetails={(i,e,f,z)=>{
            navigator.push({name:'details',id: i, nameP: e, price: f,url:z});
          }}
        />);
        case 'confirmInfo': return(<ConfirmInfo
          backToMain={()=>{
            navigator.pop()
          }}
          goToMain={()=>{
            navigator.push({name:'drawer'})
          }}
        />);
        case 'intro'    : return(<Intro
          gotoMain={()=>{
            navigator.push({name:'drawer'});
          }}
        />)
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'intro'}}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) =>
        Navigator.SceneConfigs.HorizontalSwipeJump}
      />
    );
  }
}
