import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  BackHandler
} from 'react-native';

export default class Settings extends Component{

    disableBackButton=() =>{
        this.props.navigation.navigate("Profile");
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
        this.state={
            ChangePassword:'',
            EditProfile:'',

        };
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={{backgroundColor: '#4169e1', marginTop:30, fontSize:25,
                 height:50, width:"100%", borderTopLeftRadius:15, borderTopRightRadius:15, borderBottomLeftRadius:15, borderBottomRightRadius:15 }}  
                 onPress= {() => {this.props.navigation.navigate("ChangePassword");}}>
                    <Text style={{color:"white",marginTop:10,fontSize:19, alignSelf:"center"}}>Change Password</Text>
                </TouchableOpacity>
          
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        borderBottomColor:'#ffffff',
        backgroundColor: '#ffffff',
        padding:10
    },
    button: {
      backgroundColor: '#4169e1',
      marginTop:30,
      fontSize:25,
      padding: 10,
      paddingLeft:30,
      paddingRight:30,
      
    }
  });
