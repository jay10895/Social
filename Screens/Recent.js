
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  BackHandler
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screens/Home';
import Like from '../Screens/Like';
import Import from '../Screens/Import';
import Message from '../Screens/Message';
import Profile from '../Screens/Profile';

const Tab = createMaterialBottomTabNavigator();


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);



export default class Recent extends Component {

  disableBackButton=() =>{                         
    this.props.navigation.navigate("Login");
    return true;
}
UNSAFE_componentWillMount(){
    BackHandler.addEventListener('hardwarBackPress', this.disableBackButton);
}
UNSAFE_componentWillUnmount(){
    BackHandler.removeEventListener('hardwarBackPress', this.disableBackButton);
}

  constructor(props){                     
    super(props);
    this.state={}
  }
render(){
  return(
     <View style={{flex:1}}>
      <Tab.Navigator initialRouteName="Home"
       barStyle={{backgroundColor:"white",paddingBottom:15}}
       activeTintColor= "#ff8c00"
       inactiveColor="#696969"
       shifting={false}
        
        
       >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel:null,
            tabBarIcon: ({ tintColor, size,focused }) => (
              <TouchableOpacity onPress={()=>{!this.setState({checkbox:!this.state.ischecks})}}>
            <Image source={require("../assets/home.png")} style={{width:23,height:23,tintColor: focused ? 'red' : 'gray'}} />
            </TouchableOpacity>
            ),
          }}  />
        <Tab.Screen name="Like" component={Like} options={{
            tabBarLabel:null,
            tabBarIcon: ({ color, size,focused }) => ( 
              <Image source={require("../assets/like.png")} style={{width:23,height:23,marginRight:55,tintColor: focused ? 'red' : 'gray'}} />
            ),

          }} />
        
        <Tab.Screen name="Message" component={Message} options={{
            tabBarLabel:null,
            tabBarIcon: ({ color, size,focused }) => (
              <Image source={require("../assets/chat.png")} style={{width:23,height:23,marginLeft:55,tintColor: focused ? 'red' : 'gray'}} />
            ),
          }} />
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarLabel:null,
            tabBarIcon: ({ color, size,focused }) => (
              <Image source={require("../assets/user_one.png")} style={{width:23,height:23,tintColor: focused ? 'red' : 'gray'}} />
            ),
          }} />
      </Tab.Navigator>

        <View style={{position:'absolute',height:60,width:60,borderRadius:30,borderColor:'black',borderWidth:1,justifyContent:'center',
                      marginTop:screenHeight-48,alignSelf:'center',backgroundColor:"white"}}>
         <TouchableOpacity onPress={() => {this.props.navigation.navigate('Import')}}>
            <Image source={require('../assets/plus.png')} style={{height:40,width:40,alignSelf:"center"}} />
         </TouchableOpacity>

        </View>

      </View>
);
}
   }
  
 