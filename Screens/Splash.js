import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  
  
} from 'react-native';

import SplachScreen from 'react-native-splash-screen';

export default class Splash extends Component{

    componentDidMount(){
        setTimeout(() => {this.props.navigation.navigate("Login")
          
        },2000  );
      }
      
          render(){
          return (
            
           <View style={styles.container}>
      
                        <StatusBar 
                          barStyle = "dark-content" 
                          // dark-content, light-content and default
                          hidden = {false}
                          //To hide statusBar
                          backgroundColor = "#e9967a"
                          //Background color of statusBar
                          translucent = {false}
                          //allowing light, but not detailed shapes
                          networkActivityIndicatorVisible = {true}
                          />
      
               <Text style= {{fontSize:45,justifyContent:"center",alignSelf:"center", marginTop:350}}>Social</Text>
      
           </View>  
      
          ); 
      }
      
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 35,
        borderBottomColor:'#ffffff',
        backgroundColor: '#e9967a'
      },
    logo:{ 
      width:'100%',
      height:150,
      resizeMode:"contain",
      marginTop:210
      }
    
  });