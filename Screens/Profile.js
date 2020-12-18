import React, { Component, useState  } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-community/async-storage';


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
  Platform,
  Animated,
  Alert
} from 'react-native';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const DRAWER_WIDTH = 280;


function MyTabBar({ state, descriptors, navigation, position }) {


  return (
      
    <View style={{backgroundColor:"white"}}>

        <View style={{borderWidth:1, borderBottomColor:'gray', flexDirection:"row", padding:10}}>
            <Text style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center", marginLeft: 5, marginRight: 250}}>My Profile</Text>    
          {/*  <TouchableOpacity>
                <Image source={require('../assets/drawer.png')} style={{height:30,width:30,marginLeft:240,alignSelf:"center"}}/>  
            </TouchableOpacity> */} 
        </View>
            <View style={{flexDirection:"row"}}>
                <View style={{marginBottom:30}} >
                    <Image style={{ height: 100, width: 100, borderRadius: 50, marginBottom: 10, marginTop: 20,marginLeft:8}} source={require("../assets/young.png")} />
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "bold", marginLeft:25 }}>Jay Soni</Text>
                    <Text style={{fontSize:12,marginTop:8,color:"gray", marginLeft:25}}>Jetpur,India</Text>
                </View>

               <View style={{flexDirection:"row",marginTop:30}}>
                  <TouchableOpacity onPress={() => {navigation.navigate('Post')}}>
                    <Text style={{ marginRight: 10, fontWeight: "bold", marginLeft: 20, fontSize:20 }}>{"\t\t"}12 {"\n\n"}<Text style={{fontWeight:"normal",fontSize:18}}> Posts</Text> </Text>
                  </TouchableOpacity>    
                  <TouchableOpacity onPress={() => navigation.navigate('Followers')}>
                    <Text style={{ marginRight: 10, fontWeight: "bold", fontSize:20 }}>{"\t\t"} 15{"\n\n"}<Text style={{ fontWeight: "normal", fontSize:18 }}> Followers</Text></Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Following')}>
                    <Text style={{ marginRight: 10, fontWeight: "bold", fontSize:20 }}> {"\t\t"}10 {"\n\n"}<Text style={{ fontWeight: "normal", fontSize:18 }}> Following</Text></Text>
                  </TouchableOpacity>
               </View>
            </View>

              <TouchableOpacity onPress={() => {navigation.navigate('EditProfile')}}>
                <View style={{margin:20,height:30,marginTop:15,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderWidth:1,borderRadius:5}}>
                  <Text style={{ color: 'black', fontSize: 15, alignSelf:"center", fontWeight:"bold" }}>Edit Profile</Text>
                </View>
              </TouchableOpacity>

        <View style={{ flexDirection: 'row', backgroundColor: "white", height: 50, justifyContent: "space-evenly", alignItems: "center",borderWidth:0.5,borderBottomColor:'gray',borderColor:'gray', borderBottomWidth:0.5 }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, color: isFocused ? 'black' : 'gray', borderBottomWidth: isFocused ? 1.5 : 0, borderColor: "black", marginTop:6}}
                        >
                            <Text style={{ alignSelf: "center", padding: 12,  }}>
                                {label}
                            </Text>

                        </TouchableOpacity>
                    );
                })}
        </View>
    </View>
    
  );
}

const Tab = createMaterialTopTabNavigator();

export default class Profile extends Component{

  
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.state = { disabled: false }
    this.toggleFlag = 0;
    
    this.state = {
      flatlistState: 'FollowB',
    };
  }

  message = async () => {
    try {
      const flatListState = 'Message';
      await AsyncStorage.setItem('flatListState', flatListState);
      this.props.navigation.navigate('People');
    } catch (error) {}
  };
  FollowB = async () => {
    try {
      const flatListState = 'FollowB';
      await AsyncStorage.setItem('flatListState', flatListState);
      this.props.navigation.navigate('People');
    } catch (error) {}
  };

  //handler
  disableBackButton=() =>
    {
      this.props.navigation.navigate("Home");
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


  toggleDrawer = () => {
    if (this.toggleFlag == 0) {
      this.setState({ disabled: true }, () => {
        Animated.timing(
          this.animatedValue,
          {
            toValue: 1,
            duration: 250,
            
          }
        ).start(() => {
          this.setState({ disabled: false });
          this.toggleFlag = 1;
        });
      });
    }
    else {
      this.setState({ disabled: true }, () => {
        Animated.timing(
          this.animatedValue,
          {
            toValue: 0,
            duration: 250
          }
        ).start(() => {
          this.setState({ disabled: false });
          this.toggleFlag = 0;
        });
      });
    }
  }
     
  render() {
    const animatedValue = this.animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [DRAWER_WIDTH - 44, 0]
      });
      
    return (
       
      <View style={{flex:1}}>
  
        <Tab.Navigator >
              <Tab.Screen name="Post" component={Post}  />
              <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
            
            <Animated.View style={[styles.drawer, { transform: [{ translateX: animatedValue }] }]}>
                        <TouchableOpacity disabled={this.state.disabled} onPress={this.toggleDrawer} style={{ padding: 10 }}>
                            <Image source={require('../assets/drawer.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <View style={styles.drawerContainer}>
                            <Text style={{backgroundColor: 'white', width: '100%', fontSize: 18, color: 'black', padding: 10,}}>Jay Soni</Text>

                          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Settings');}}>  
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                              <Image source={require('../assets/gear.png')} style={{tintColor:"gray",height:30,width:30,marginTop:20,marginLeft:60}}/>
                              <Text style={styles.menuLayout}>Settings</Text>
                            </View>                         
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=>{this.FollowB();}}>  
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                              <Image source={require('../assets/users.png')} style={{tintColor:"gray",height:30,width:30,marginTop:20,marginLeft:60}}/>
                              <Text style={styles.menuLayout}>People</Text>
                            </View>                         
                          </TouchableOpacity>  
   
                          <TouchableOpacity style={{ marginTop:490}} onPress={() => Alert.alert(
                                'Logout',
                                'Are you sure you want to logout ?',
                                [
                                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'Ok', onPress:() => this.props.navigation.navigate("Login")},
                                ],
                                {cancelable: false}
                              )} >
                          
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                              <Image source={require('../assets/logout.png')} style={{tintColor:"gray",height:30,width:30,marginTop:20,marginLeft:60}}/>
                              <Text style={styles.menuLayout}>Logout</Text>
                            </View> 

                          </TouchableOpacity>  

                        </View>
                    </Animated.View>
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
  drawer: {
    position: 'absolute',
    top: (Platform.OS == 'ios') ? 20 : 0,
    right: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    flexDirection: 'row'
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  menuLayout: {
    marginTop:12,
    backgroundColor: 'white',
    width: '100%',
    fontSize: 20,
    color: 'black',
    padding: 10,
  }

});
  
  