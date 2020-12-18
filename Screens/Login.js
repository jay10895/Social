import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Header,
  BackHandler,
  TouchableOpacity,
  Image,
} from 'react-native';

import Utlis from "../Components/Utils";

import {string} from "../Styles/String";

import {color} from "../Styles/Color";

export default class Login extends Component {

    disableBackButton=() =>{
        BackHandler.exitApp();
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
            username:'',
            unameError:'',
            password:'',
            upassError:'',
            validPassword:'',
        };
    }

    isCheck(){
      var isValid = true;
      const regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
      const regn = /^[a-zA-Z\s]+$/;

       //Email
      if(Utlis.isStringNull(this.state.username)){
        isValid = false;
        this.setState({unameError:string.onboarding.all});
      } else if (regn.test(this.state.username) === false) {
        isValid=false;
        this.setState({unameError:string.onboarding.validUser});
      }
      else{
        this.setState({unameError:null});
      }

      //Password
      if(this.state.password == null || this.state.password === '' ){
        isValid = false;
        this.setState({upassError:string.onboarding.password});
      }else if( regx.test(this.state.password) === false){
        isValid = false;
        this.setState({upassError:string.onboarding.validPassword});
      }
      else{
        this.setState({upassError:null});
      }

      if(isValid ===true){
        this.props.navigation.navigate("Recent")
      }
    }
   
   render(){
    return (
   
        <View style={styles.container}>

            <StatusBar 
                    barStyle = "light-content" 
                    // dark-content, light-content and default
                    hidden = {false}
                    //To hide statusBar
                    backgroundColor = "#000"
                    //Background color of statusBar
                    translucent = {false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible = {true}
                    />

             <Text style={{color:'black',alignSelf:"center", justifyContent:'center', fontSize:36,marginTop:100}}>Social</Text>


               <TextInput
                 style={{marginTop:80,borderBottomColor:'black',borderBottomWidth:1,height:40}}
                 placeholder="Username"
                 value={this.state.username}
                 onChangeText={(text) => this.setState({username:text,unameError:null, validUser:null})}/>

                {!! this.state.unameError && (
                    <Text style={color.first}>{this.state.unameError}</Text>
                )}
             
             
                {!! this.state.validUser && (
                    <Text style={color.first}>{this.state.validUser}</Text>
                )}
             <TextInput
                style={{height: 40, borderBottomColor: 'black', borderBottomWidth: 1,marginTop:35}}
                placeholder= "Password"
                secureTextEntry
                maxLength={12}
                value={this.state.password}
                onChangeText= {(text) => this.setState({password: text,upassError:null, validPassword:null})}/>


                {!! this.state.upassError && (
                    <Text style={color.first}>{this.state.upassError}</Text>
                )}

                {!! this.state.validPassword && (
                    <Text style={color.first}>{this.state.validPassword}</Text>
                )}

              <TouchableOpacity style={styles.button} onPress= {() => {this.isCheck();}}>
                <Text style={{color:"white",fontSize:17}}>SIGN IN</Text>
              </TouchableOpacity>


             <TouchableOpacity onPress= {() => {this.props.navigation.navigate("ForgotPassword");}}>
                <Text style={{color:"#2f2f2f",alignSelf:"center", marginTop:20, fontSize:20}}>FORGOT PASSWORD?</Text>
             </TouchableOpacity>
                       
                  <View style={styles.inputwraps}>
                      <TouchableOpacity onPress= {() => {this.props.navigation.navigate("SignUp");}}>
                            <Text style={{color:"red",marginTop:180,alignSelf:"center",fontSize:20}}onPress={this.signUp}>SignUp</Text>
                     </TouchableOpacity>

                  

              </View>

      

               
        </View>
      
    );
}
  }
  
  const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 35,
        borderBottomColor:'#ffffff',
        backgroundColor: '#ffffff',
        justifyContent:'center',
        alignContent:"center" 
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
    },
      row:{
        flex:1,
        flexDirection:"row"
      },
      inputwrap:{
        flex:1,
        borderColor:"#767577",
        borderBottomWidth:1,
        marginBottom:1
      },
    
      inputwraps:{
        flex:1,
        borderColor:"#81b0ff",
        
        
      }
  });
  
  