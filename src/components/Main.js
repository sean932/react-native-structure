import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Router, Scene, Actions, ActionConst} from 'react-native-router-flux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  AsyncStorage
} from 'react-native';


export default class Main extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	render() {
		return (
			<View><Text>This is the main page.</Text></View>	
		)
	}
}