
import React, { Component, useState  } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Post from '../Screens/Post';
import About from '../Screens/About';
import Header from '../Screens/Header';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  BackHandler,

  Alert
} from 'react-native';
import { ceil } from 'react-native-reanimated';
import { TouchableHighlight } from 'react-native-gesture-handler';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);



const Tab = createMaterialTopTabNavigator();

export default class Profile extends Component{

  
  constructor() {
    super();
    this.state={
    isfollow:false,
    block:false
     }
 }

  isblock(){
      this.setState({
          block:!this.state.block
      })
  }  
   

  //handler
  disableBackButton=() =>
    {
      this.props.navigation.navigate("Recent");
      return true;
    }
  UNSAFE_componentWillMount()
    {
        BackHandler.addEventListener('hardwareBackPress' ,this.disableBackButton);
    }
  UNSAFE_componentWillUnmount()
    {
        BackHandler.removeEventListener('hardwareBackPress',this.disableBackButton);
    }


  render() {

    return (
        <View style={{backgroundColor:"white",flex:1}}>

            <Header title={"Profile"} />


            <View style={{flexDirection:"row"}}>
                <View style={{padding:15}} >
                    <Image style={{ height: 100, width: 100, borderRadius: 50, marginBottom: 10, marginTop: 20,marginLeft:8}} source={require("../assets/young.png")} />
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginLeft:25 }}>Jay Soni</Text>
                    <Text style={{fontSize:12,marginTop:8,color:"gray", marginLeft:25}}>Jetpur,India</Text>
                </View>

               <View style={{flexDirection:"row",marginTop:50}}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Post')}}>
                    <Text style={{ marginRight: 20, fontWeight: "bold", marginLeft: 20,fontSize:15 }}>{"\t\t"}12 {"\n\n"}<Text style={{fontWeight:"normal"}}> Posts</Text> </Text>
                  </TouchableOpacity>    
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Followers')}}>
                    <Text style={{ marginRight: 20, fontWeight: "bold",fontSize:15 }}>{"\t\t"} 15{"\n\n"}<Text style={{ fontWeight: "normal" }}> Followers</Text></Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Following')}}>
                    <Text style={{ marginRight: 17, fontWeight: "bold",fontSize:15 }}> {"\t\t"}10 {"\n\n"}<Text style={{ fontWeight: "normal" }}> Following</Text></Text>
                  </TouchableOpacity>
               </View>
            </View>
   
            <View style={{flexDirection:"row", marginTop:20, marginLeft:7}}> 
              <TouchableOpacity onPress={()=>{this.setState({isfollow: !this.state.isfollow})}}>
               {this.state.isfollow === true ?
               <View style={styles.followouter}>
               <Text style={{ color: '#36292a', fontSize: 15, alignSelf:"center" }}>UnFollow</Text>
             </View>
            :
             <View style={styles.unfollowouter}>
               <Text style={{ color: '#36292a', fontSize: 15, alignSelf:"center" }}>Follow</Text>
             </View>
            }     
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Message')}} >
                <View style={{ width:130, height:35, justifyContent:"center", backgroundColor:"#DFE1E3",  marginLeft:25, borderRadius:10}}>
                  <Text style={{ color: 'black', fontSize: 15, alignSelf:"center", color:"black" }}>Message</Text>
                </View>
              </TouchableOpacity>

              <TouchableHighlight
                 underlayColor="no"
                 onPress={()=> Alert.alert("Alert", "Are you sure you want to block?")}
                 onShowUnderlay={()=>{this.setState({isblock:!this.state.isblock})}} >

                <View style={{ width:55, height:35, justifyContent:"center", backgroundColor:'#DFE1E3',  marginLeft:25, borderRadius:10}}>
                  <Image style={{ width:31,height:31,borderRadius:15,justifyContent:"center",alignSelf:"center",tintColor:this.state.isblock===true ? 'red' : 'black',}} source={require('../assets/signal.png')}/>
                </View>
              </TouchableHighlight>
            </View>
  
                <Tab.Navigator 
                    initialRouteName="Follow"
                    tabBarOptions={{
                        activeTintColor:'black',
                        inactiveTintColor:'black',
                      style:{
                          marginTop:20,
                          backgroundColor:'white',
                          borderTopColor:'#D3D3D3',
                          borderTopWidth:1
                      },
                      labelStyle:{
                          textAlign:'center'
                      },
                      indicatorStyle:{
                          backgroundColor:'black'
                      },  
                    }}>
                  <Tab.Screen name="Post" component={Post}  />
                  <Tab.Screen name="About" component={About} />
                </Tab.Navigator>
          </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems: "center",
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    color: 'black',
    fontWeight: "bold"
  },
  
  menuLayout: {
    marginTop:12,
    backgroundColor: 'white',
    width: '100%',
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  followouter: {
      backgroundColor: '#DFE1E3',
      width:130, 
      height:35, 
      justifyContent:"center", 
      marginLeft:5, 
      borderRadius:10
    },
    unfollowouter: {
      backgroundColor:'#DFE1E3',
      width:130, 
      height:35, 
      justifyContent:"center", 
      marginLeft:5, 
      borderRadius:10

    }

});
  
  