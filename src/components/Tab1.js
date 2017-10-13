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


export default class Tab1 extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	render() {
		console.log('tab1');
		return (
			<View>
				<Text>This is the Tab1 page.</Text>
			</View>
		)
	}
}