import React, { Component, useState  } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity  
} from 'react-native';

import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Followers from '../Screens/Followers';
import Following from '../Screens/Following';
import Favourite from '../Screens/Favourite';
import Header from '../Screens/Header';

const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View>
      
    
        <View style={{ flexDirection: 'row' }}>
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
                canPreventDefault: true,
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

            const inputRange = state.routes.map((_, i) => i);
            const opacity = Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(i => (i === index ? 1 : 0)),
            });

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, height:50, backgroundColor:"lightgray" ,borderBottomWidth:isFocused ? 2:0, borderBottomColor:"#20639B"}}
              >
                <Animated.Text style={{ opacity:5.0, marginLeft:35, marginTop:15 }}>
                  {label}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>


    </View>
  );
}


export default function Like() {
  
  return (
    <View style={{flex:1}}>
      <Header title={"Follow"} />

    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} >
       <Tab.Screen name="Favourite" component={Favourite} />
       <Tab.Screen name="Followers" component={Followers} />
       <Tab.Screen name="Following" component={Following}/>
    </Tab.Navigator>
  </View>      
  );
    
  }
  
  