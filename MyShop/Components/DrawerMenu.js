import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,Image,AsyncStorage
} from 'react-native';
import Dimensions from 'Dimensions';
import Drawer from 'react-native-drawer';
import TabNavigator from 'react-native-tab-navigator';

import Menu from './Left/Menu.js';
import Search from './Right/Search/Search.js';
import TabCategory from './Right/Store/TabCategory.js';
import Cart from './Right/Cart/Cart.js';
import Notification from './Right/Notification/Notification.js';
import User from './Right/User/User.js';
import ChildRouter from './Right/ChildRouter.js';

var H = Dimensions.get('window').height;
var W = Dimensions.get('window').width;
var t;
export default class DrawerMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab: this.props.tabshow,
      badge: 0
    }
    t = this;

  }
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  _loadDuLieu = async () => {
    try {
      var v = await AsyncStorage.getItem('@NhatKy6:key');
      if (v !== null){
          var mang = [];
          mang = JSON.parse(v);
          var tong =0;
          mang.map(function(o, i){
            tong = tong +1;
          });
          this.setState({
            badge:tong
          })
      } else {
      }
    } catch (error) {
    }
  };

  showQuantity(){
    this._loadDuLieu();
  }
  componentWillReceiveProps(){
    this.showQuantity();
  }
  render() {
    return (
      <View style={styles.wrapper}>
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<Menu goToLogin={()=>{
          this.closeControlPanel();
          this.props.goToLogin()}}
        />}
        tapToClose={true}
        openDrawerOffset={0.3}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
        })}
        >
        <View style={styles.main}>
        <TabNavigator
          >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Store'}
            title="Cửa hàng"
            renderIcon={() => <Image style ={styles.imgTab} source={require('./Images/Home.png')} />}
            renderSelectedIcon={() => <Image style ={styles.imgTabSelected} source={require('./Images/Home.png')} />}
            onPress={() => this.setState({ selectedTab: 'Store' })}>
            <ChildRouter
              toggleMenu={()=>{this.openControlPanel()}}
              goToDetails={(i,e,f,z)=>{this.props.goToDetails(i,e,f,z)}}
              goToCollectionDetails={(i,n)=>{this.props.goToCollectionDetails(i,n)}}
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'Cart'}
            title="Giỏ hàng"
            badgeText={this.state.badge}
            renderIcon={() => <Image style={styles.imgTab} source={require('./Images/ShoppingCart.png')} />}
            renderSelectedIcon={() => <Image style={styles.imgTabSelected} source={require('./Images/ShoppingCart.png')} />}
            onPress={() => this.setState({ selectedTab: 'Cart' })}>
            <Cart goToLogin={()=>{this.props.goToLogin()}}
                  goToConfirmInfo={()=>{this.props.goToConfirmInfo()}}
                  showQuantity={()=>{this.showQuantity()}}
            />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Notification'}
            title="Đơn hàng"
            renderIcon={() => <Image style={styles.imgTab} source={require('./Images/Bill.png')} />}
            renderSelectedIcon={() => <Image style={styles.imgTabSelected} source={require('./Images/Bill.png')} />}
            onPress={() => this.setState({ selectedTab: 'Notification' })}>
            <Notification/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'User'}
            title="Liên hệ"
            renderIcon={() => <Image style={styles.imgTab} source={require('./Images/CircledUserMale.png')} />}
            renderSelectedIcon={() => <Image style={styles.imgTabSelected} source={require('./Images/CircledUserMale.png')} />}
            onPress={() => this.setState({ selectedTab: 'User' })}>
            <User/>
          </TabNavigator.Item>
          </TabNavigator>
        </View>

        </Drawer>

      </View>
    );
  }
  componentDidMount(){
      this._loadDuLieu().done();
  }
}

const styles = StyleSheet.create({
    wrapper:{flex:1},
    main:{flex:1},
      imgTab:{width:W/18,height:W/18},
      imgTabSelected:{width:W/14,height:W/14}
});
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
