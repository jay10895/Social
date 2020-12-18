import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
  
} from 'react-native';

export default class About extends Component {
    render(){
        return(
            
           <View style={{backgroundColor:"white",flex:1}}>
               <View style={{flexDirection:'row',marginTop:10}}>
                   <View style={{padding:15}}> 
                      <Image source={require('../assets/user_two.png')} style={{height:50, width:50,borderRadius:25}} />
                   </View>
                   <View style={{flex:1,flexDirection:"row",marginTop:25}} >
                      <Text style={{fontSize:20}}>Jay soni</Text>
                   </View>
               </View>

               <View style={{flexDirection:'row',marginTop:10}}>
                   <View style={{padding:15}}> 
                      <Image source={require('../assets/place.png')} style={{height:50, width:50,borderRadius:18}} />
                   </View>
                   <View style={{flex:1,flexDirection:"row",marginTop:25}} >
                      <Text style={{fontSize:20}}>Rajkot, India</Text>
                   </View>
               </View>

               <View style={{flexDirection:'row',marginTop:10}}>
                   <View style={{padding:15}}> 
                      <Image source={require('../assets/email.png')} style={{height:50, width:50,borderRadius:25}} />
                   </View>
                   <View style={{flex:1,flexDirection:"row",marginTop:25}} >
                      <Text style={{fontSize:20}}>jai@gmail.com</Text>
                   </View>
               </View>
           </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
      display:"flex",
      padding:1,
      backgroundColor:"white",
      justifyContent:"center",
    },
      inputStyle: {
        width:'100%',
        marginBottom:10,
        height:75,
        flexDirection:"row",
        borderColor:"#20232a",
        padding:10,
      }
    })