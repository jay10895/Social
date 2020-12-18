
import React from "react";

import{StyleSheet, Image, Text,Alert} from 'react-native';

import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import {MainStackNavigator,PeopleStackNavigator,SettingsStackNavigator,NavigationDrawerStructure} from "../Screens/StcakNavigator"
import { View } from "react-native";


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      
      <DrawerItem style={styles.bottom} label="Logout" onPress={() => Alert.alert(
      'Logout',
      'Are you sure you want to logout ?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Ok', onPress: () => {props.navigation.navigate("Login") }},
      ],
      {cancelable: false}
    )} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    
    <Drawer.Navigator drawerPosition="right"  drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="User" component={MainStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
      <Drawer.Screen name="People" component={PeopleStackNavigator} />
    
    </Drawer.Navigator>
    
  );
}

const styles = StyleSheet.create({
bottom:{
  marginTop:580,
  alignSelf:"center",
},
imagestyle:{
  width:100,
  height:100,
  borderRadius:50,
  marginTop:15,
  borderWidth:1,
  borderColor:'black',
  justifyContent:'center',
  alignSelf:'center'
}
});


export default DrawerNavigator;