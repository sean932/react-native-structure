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

import Login 		from './Login';
import Tab1       	from './Tab1';
import Tab2       	from './Tab2';
import Tab3       	from './Tab3';
import Tab4       	from './Tab4';


var paddingTopSize = 54;
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFinish: true,
			isLogin: true
		}
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	render() {
	    if(this.state.isFinish){
	      	return (
		        <Router navigationBarStyle={styles.navBar}>
		          	<Scene key="root">
		            	<Scene
			            	key         ="tabbar"
			              	tabs        ={true}
			              	initial     ={this.state.isLogin}
				            tabBarStyle ={{
				                borderTopWidth  : 1,
				                borderColor     : '#cccccc',
				                backgroundColor : '#FFFFFF',

			              	}}>
			              	<Scene key="tab1" title="Tab1" 
			              	//icon={discover} 
				            	onPress={()=> {
				                	Actions.tab1({type: ActionConst.REFRESH});
			              	}}>
					            <Scene
					              key              ="tab1"
					              component        ={Tab1}
					              title            ="Tab1"
					              sceneStyle       ={{paddingTop: paddingTopSize, paddingBottom: paddingTopSize}}
					              renderBackButton ={()=>(null)}/>
		             		</Scene>
				            <Scene key="tab2" title="Tab2" 
				           	//icon={map}
				            	onPress={()=> {
				            		Actions.tab2({type: ActionConst.REFRESH});
			              	}}>
				                <Scene
				                  key              ="tab2"
				                  component        ={Tab2}
				                  title            ="Tab2"
				                  sceneStyle       ={{paddingTop: paddingTopSize, paddingBottom: paddingTopSize}}
				                  renderBackButton ={()=>(null)} />
		              		</Scene>
				            <Scene key="tab3" title="Tab3" 
				              //icon={game} 
				            	onPress={()=> {
				                    Actions.tab3({type: ActionConst.REFRESH});
				           	}}>
				                <Scene
				                  key              ="tab3"
				                  component        ={Tab3}
				                  title            ="Tab3"
				                  sceneStyle       ={{paddingTop: paddingTopSize, paddingBottom: paddingTopSize}}
				                  renderBackButton ={()=>(null)} />
		             		</Scene>
				            <Scene key="tab4" title="Tab4" 
				              // icon={profile} 
				            	onPress={()=> {
				                    Actions.tab4({type: ActionConst.REFRESH});
			              	}}>
				                <Scene
				                  key              ="tab4"
				                  component        ={Tab4}
				                  title            ="Tab4"
				                  sceneStyle       ={{paddingTop: paddingTopSize, paddingBottom: paddingTopSize}}
				                  renderBackButton ={()=>(null)} />
		              		</Scene>
		            	</Scene>
			            <Scene
			                key        ="login"
			                component  ={Login}
			                title      ="Login"
			                initial     ={!this.state.isLogin}
			                hideNavBar ={true} />
		          	</Scene>
		        </Router>
	      	)
	    }else{
	      	return (
		      	<View>
		      		<Text>RETURN NULL</Text>
		      	</View>
	      	)
	    }
	}
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fff',
  }
})

