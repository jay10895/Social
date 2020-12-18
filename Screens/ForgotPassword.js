import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  BackHandler,
  TouchableOpacity,
  Alert,
} from 'react-native';


import Utlis from "../Components/Utils";

import {string} from "../Styles/String";

import {color} from "../Styles/Color";

export default class ForgotPassword extends Component {

      disableBackButton=() =>{
        //this.props.navigation.navigate("LoginScreen");
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
            email:'',
            emailError:'',
        };
    }

    isCheck(){
        var isValid = true;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
        if(Utlis.isStringNull(this.state.email)){
          isValid = false;
          this.setState({emailError:string.onboarding.emailError});
        
        }else if(Utlis.isEmailValid(this.state.email)==false){
          isValid = false;
          this.setState({emailError:string.onboarding.validForgotEmail});
        }
        else{
          this.setState({emailError:null});
        }

        if(isValid ===true){
            Alert.alert("Email",'email sent')
          }
    }
    
    render(){
        return (
            <View style={styles.container}>


              <Text style={{color:'black',alignSelf:"center", justifyContent:'center', fontSize:36,marginTop:100}}>Social</Text>

            <TextInput
                style={{height: 40, borderBottomColor: 'black', borderBottomWidth: 1,marginTop:155,justifyContent:"center",alignContent:"center"}}
                placeholder= "Email Address"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText= {(text) => this.setState({email: text, emailError: null, validEmail: null})}/>   
                 

                 {!! this.state.emailError && (
                  <Text style={color.first}>{this.state.emailError}</Text>
                )}

                {!! this.state.validEmail && (
                  <Text style={color.first}>{this.state.validEmail}</Text>
                )}


                 <TouchableOpacity style={styles.button} onPress= {()=>{ this.isCheck();}}>
                <Text style={{color:"white", fontSize:17}}>SUBMIT</Text>
             </TouchableOpacity>
          
            </View>  
       
        );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 35,
        borderBottomColor:'#ffffff',
        backgroundColor: '#ffffff'
    },
    button: {
      backgroundColor: '#4169e1',
      marginTop:30,
      fontSize:25,
      padding: 16,
      paddingLeft:130,
      paddingRight:130
    }
  });
  
 
  