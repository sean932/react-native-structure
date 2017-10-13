/* @flow */

import React, { Component } from 'react';
import { StackNavigator }   from 'react-navigation';
import { Pages }            from 'react-native-pages';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  AppRegistry,
  NavigatorIOS,
  Image,
  AsyncStorage,
  TouchableHighlight,
} from 'react-native';


import MainPage from './Main';
/*
const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;
const {
  LoginButton,
  AccessToken,
  LoginManager
} = FBSDK;
*/

export default class Login extends Component {
  static navigationOptions = {
     title: 'WL',
   };

  constructor(props){
    super(props);

  }
  componentWillMount(){
  }

  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      console.log(JSON.stringify("error"+error));
    } else {
      console.log(JSON.stringify(result));
    }
  }

  render() {
    return (
      <View
        style={styles.container}>
        <Pages indicatorColor = '#00CB9D' style = {{flex:0.8}} >
          <View style={styles.slideContainer}>
            <Image
              style={ styles.slide }
              resizeMode="cover"
              // source={require('./img/search.png')}
              />
            <Text
              style={[styles.title, styles.center]}>
              1
            </Text>
            <Text
              style={[styles.desc, styles.center]}>
              Info 1.
            </Text>
          </View>
          <View style={styles.slideContainer}>
            <Image
              style={ styles.slide }
              resizeMode="cover"
              // source={require('./img/join.png')}
              />
            <Text
              style={[styles.title, styles.center]}>
              2
            </Text>
            <Text
              style={[styles.desc, styles.center]}>
              Info 2.
            </Text>
          </View>
          <View style={styles.slideContainer}>
            <Image
              style={ styles.slide }
              resizeMode="cover"
              // source={require('./img/play.png')}
              />
            <Text
              style={[styles.title, styles.center]}>
              3
            </Text>
            <Text
              style={[styles.desc, styles.center]}>
              Info 3
            </Text>
          </View>
        </Pages>
        <View style={{ flex:0.2, }} >
          <TouchableHighlight
            style         = {styles.submit}
            activeOpacity = {1.0}
            underlayColor = '#00CB9D'
            //onPress={this.toLogin}
            >
            <Text
              style={[styles.submitText, styles.center]}>
              FACEBOOK LOGIN
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const SimpleApp = StackNavigator({
  Main: { screen: MainPage },
});
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

const styles = StyleSheet.create({
  navigationContainer : {  flex : 1  },

  container : {  flex : 1,    backgroundColor:  'white'  },
  slide     : {
    //  backgroundColor: '#f7fafc',
    backgroundColor: '#fff',
    width          : 250,
    height         : 250
  },

  title : { marginTop : 30, fontSize  : 25,  color  : 'blue'  },
  desc  : { marginTop : 20, fontSize  : 17,  color  : 'blue'  },

  btnLogin: { padding : 20  },
  slideContainer: { flex: 1 , alignItems: 'center', paddingTop: 40,},
  submit:{
   marginRight  : 40,
   marginLeft   : 40,
   marginTop    : 20,
   paddingTop   : 15,
   paddingBottom: 15,
   borderRadius : 30,
   borderWidth  : 0.5,
   borderColor: 'blue'
 },

 submitText:{
   color            : 'blue',
   backgroundColor  : 'green',
 },

 center:{ textAlign : 'center' }
});
