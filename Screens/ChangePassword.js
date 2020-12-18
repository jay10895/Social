import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';


import Utlis from "../Components/Utils";

import {string} from "../Styles/String";

import {color} from "../Styles/Color";


export default class ChangePassword extends Component {


    disableBackButton=() =>{
       // BackHandler.exitApp();
       this.props.navigation.navigate("Recent")
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
            CurrentPassword:'',
            current_passwordError:'',
            new_password:'',
            new_passwordError:'',
            confirm_password:'',
            cnf_passwordError:'',
            password_mismatch:'',

      };
    }

   isChecked(){
        var isValid = true;
        const regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

       if(Utlis.isStringNull(this.state.oldPassword)){
           isValid = false;
           this.setState({oldPasswordError:string.onboarding.oldPasswordError})
       }else if( regx.test(this.state.oldPassword) === false){
        isValid = false;
        this.setState({oldPasswordError:string.onboarding.validPassword});
      }
       else{
           this.setState({oldPasswordError:null});
       }
   
        //New password
       if(Utlis.isStringNull(this.state.new_password)){
        isValid = false;
        this.setState({new_passwordError:string.onboarding.new_passwordError})
       }else if( regx.test(this.state.new_password) === false){
        isValid = false;
        this.setState({new_passwordError:string.onboarding.validPassword});
      }
       else{
        this.setState({new_passwordError:null});
       }

      //Confirm Password
      if(this.state.confirm_password == null || this.state.confirm_password === ''){
        isValid = false;
        this.setState({confirm_passwordError: string.onboarding.cnf_passwordError});
      }else if( regx.test(this.state.new_password) === false){
        isValid = false;
        this.setState({new_passwordError:string.onboarding.valid_Confirm_Pass});
      }
      else{
        this.setState({confirm_passwordError:null});
      }

       if(isValid === true){
           Alert.alert("Your password changed sucessfully")
           this.props.navigation.navigate("Login");
       }
   }
   

    render(){
        return(
            <View style={styles.container}>

                
                
                <TextInput
                style={{height: 40, borderBottomColor: 'black', borderBottomWidth: 1,marginTop:20}}
                placeholder= "Current Password"
                value={this.state.oldPassword}
                secureTextEntry
                onChangeText= {(text) => this.setState({oldPassword: text, oldPasswordError:null})}/>
  
              {!! this.state.oldPasswordError && (
                  <Text style={color.first}>{this.state.oldPasswordError}</Text>)}

                <TextInput
                style={{height: 40, borderBottomColor: 'black', borderBottomWidth: 1,marginTop:25}}
                placeholder= "New Password"
                value={this.state.new_password}
                secureTextEntry
                onChangeText= {(text) => this.setState({new_password: text, new_passwordError:null, validPassword:null})}/>

                {!! this.state.new_passwordError && (
                <Text style={color.first}>{this.state.new_passwordError}</Text>)}
                
                 {!! this.state.new_passwordError && (
                      <Text style={color.first}>{this.state.passwordError}</Text>
                )}  

                <TextInput
                style={{height: 40, borderBottomColor: 'black', borderBottomWidth: 1,marginTop:25}}
                placeholder= "Confirm Password"
                value={this.state.confirm_password}
                secureTextEntry
                onChangeText= {(text) => this.setState({confirm_password: text, confirm_passwordError:null, valid_Confirm_Pass:null})}/>

                {!! this.state.confirm_passwordError && (
                    <Text style={color.first}>{this.state.confirm_passwordError}</Text>
                )}

                {!! this.state.confirm_passwordError && (
                  <Text style={color.first}>{this.state.password_mismatch}</Text>
                )}


                <TouchableOpacity style={styles.button} onPress= {()=> {this.isChecked();}}>
                    <Text style={{color:"white", fontSize:20}}>RESET</Text>
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
        backgroundColor: '#d3d3d3'
    },
    inputStyle: {
        width: '100%',
        marginTop: 25,
        fontSize:15,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        marginRight:50,
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