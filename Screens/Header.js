import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Image,
 
} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style={{borderBottomWidth:1,borderBottomColor:"black",padding:8,flexDirection:"row"}}>
            <Text style={{fontSize:20,marginLeft:1}}>{this.props.title}</Text>    
            <Image source={this.props.imgsrc} style={{height:30,width:30,marginLeft:260,alignSelf:"center"}}/>
            </View>
        );
    }
}