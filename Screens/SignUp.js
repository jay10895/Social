import React, { Component, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Picker,
  Image,
  CheckBox,
  BackHandler,
  Modal,
  Dimensions,
} from 'react-native';

import Utlis from "../Components/Utils";
import {string} from "../Styles/String";
import {color} from "../Styles/Color";
import ImagePicker from 'react-native-image-crop-picker';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default class SignUp extends Component {

            // for back screem
    disableBackButton=() =>{                         
      this.props.navigation.navigate("Login");
        return true;
    }
    UNSAFE_componentWillMount(){
        BackHandler.addEventListener('hardwarBackPress', this.disableBackButton);
    }
    UNSAFE_componentWillUnmount(){
        BackHandler.removeEventListener('hardwarBackPress', this.disableBackButton);
    }
    
    //for value declare
    constructor(props){                     
        super(props);
        this.state={
            fullname:'',
            user_name:'',
            email:'',
            validEmail:'',
            city:'',
            country:'',
            password:'',
            cnf_password:'',
            tagline:'',
            avatarSource:null,

            fullnameError:'',
            user_nameError:'',
            emailError:'',
            cityError:'',
            countryError:'',
            passwordError:'',
            cnf_passwordError:'',
            check:false,
            checkError:'',
            taglineError:'',
            modalVisible:false,
        };
      this.SelectPhoto = this.SelectPhoto.bind(this);
    }

    //for checkbox
    checkbox() {                          
      this.setState({
        check:!this.state.check
      })
    }

     //for validation
   isChecked(){                       
      var isValid = true;
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
      const regn = /^[a-zA-Z\s]+$/;

      //First name
      if(Utlis.isStringNull(this.state.fullname)){
        isValid = false;
        this.setState({fullnameError:string.onboarding.all});
      }else if (Utlis.isNameValid(this.state.fullname) === false) {
        isValid=false;
        this.setState({fullnameError:string.onboarding.validFullName});
      }
      else{
        this.setState({fullnameError:null});
      }

      //Last name
      if(Utlis.isStringNull(this.state.user_name)){
        isValid = false;
        this.setState({user_nameError:string.onboarding.all});
      
      }else if(Utlis.isNameValid(this.state.user_name) === false){
        isValid = false;
        this.setState({user_nameError:string.onboarding.Validuser});
      }
      else{
        this.setState({user_nameError:null});
      } 

      //Email
      if(this.state.email == null || this.state.email ==''){
        isValid = false;
        this.setState({emailError:string.onboarding.emailError});
      }else if(reg.test(this.state.email)=== false){
        isValid = false;
        this.setState({emailError: string.onboarding.validEmail});
      }
      else{
        this.setState({emailError:null});
      }

      //Password
      if(this.state.password == null || this.state.password== '' ){
        isValid = false;
        this.setState({passwordError:string.onboarding.password});
      }else if( regx.test(this.state.password) === false){
        isValid = false;
        this.setState({passwordError:string.onboarding.validPassword});
      }
      else{
        this.setState({passwordError:null});
      }

      //Confirm Password
      if(this.state.cnf_password == null || this.state.cnf_password === ''){
        isValid = false;
        this.setState({cnf_passwordError:string.onboarding.cnf_password});
      }else{
        this.setState({cnf_passwordError:null});
      }

      // password and cnf password validation
      if(this.state.password === this.state.cnf_password ){                       
        //this.props.navigation.navigate("LoginScreen")
      }else{
        isValid = false;
        //alert("Password does not match.")
        this.setState({password_mismatch:string.onboarding.password_mismatch})
      }

      //city
      if(Utlis.isStringNull(this.state.city)) {
        isValid = false;
        this.setState({cityError:string.onboarding.cityError});
      }else if( Utlis.isNameValid(this.state.city) === false){
        isValid = false;
        this.setState({cityError:string.onboarding.cityError});
      }
      else{
        this.setState({cityError:null});
      }

      //country
      if(Utlis.isStringNull(this.state.country)) {
        isValid = false;
        this.setState({countryError:string.onboarding.countryError});
      }else if( Utlis.isNameValid(this.state.country) === false){
        isValid = false;
        this.setState({countryError:string.onboarding.countryError});
      }
      else{
        this.setState({countryError:null});
      }

      //Tagline
      if(Utlis.isStringNull(this.state.tagline)) {
        isValid = false;
        this.setState({taglineError:string.onboarding.taglineError});
      }else{
        this.setState({taglineError:null});
      }

      //CheckBox
      if(this.state.check === false ){
        isValid = false;
        this.setState({checkError:string.onboarding.checkError});
      }else{
        this.setState({checkError:null});
      } 

      if(isValid ===true){navigation.navigate("Login");
      }
    }
 
    //for image picker
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
  
   //for image picker
      SelectPhoto(flag){
        if(flag==1){                                 
         ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          this.setState({
            avatarSource: image.path,
          });
          this.setModalVisible(false);
        });
      }
      else{
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          this.setState({
            avatarSource: image.path,
        });
        this.setModalVisible(false);
      }) 
    }
  }  
    
    render(){
        return (
          <ScrollView style={styles.ScrollView}>
             <View style={styles.container}>               
        
                  <View style={{height:180,backgroundColor:"black"}}>                                
                    <Image source = {this.state.avatarSource ? {uri:this.state.avatarSource} : require("../assets/man.png")} style = {styles.imagestyle}/>
                  
                    <View style={{ marginLeft:228, marginTop:-110}}>
                        <TouchableOpacity onPress= {() =>{this.setModalVisible(true);}}>                                  
                          <Image source={require("../assets/editorpng.png")} style={{width:35, height:35, borderRadius:17.5}} />
                        </TouchableOpacity>
                    </View>

                  </View>
             
                  <View style={{padding:20}}>
                    <TextInput
                        style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:30}}
                        placeholder= "Full Name"
                        value={this.state.fullname}
                        onChangeText= {(text) => this.setState({fullname: text,fullnameError:null,validFullName:null})} 
                        />

                    {!! this.state.fullnameError && (
                        <Text style={color.first}>{this.state.fullnameError}</Text>
                    )}
                    {!! this.state.validFullName && (
                      <Text style={color.first}>{this.state.validFullName}</Text>
                    )}       

                    <TextInput
                        style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:25}}
                        placeholder= "UserName"
                        value={this.state.user_name}
                        onChangeText= {(text) => this.setState({user_name: text, user_nameError:null,Validuser:null})}/>
                  
                    {!! this.state.user_nameError && (
                        <Text style={color.first}>{this.state.user_nameError}</Text>
                    )}
                    {!! this.state.Validuser && (
                      <Text style={color.first}>{this.state.Validuser}</Text>
                    )}

                    <TextInput
                        style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:25}}
                        placeholder= "Email"
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText= {(text) => this.setState({email: text, emailError:null, validEmail: null})}/>

                    {!! this.state.emailError && (
                      <Text style={color.first}>{this.state.emailError}</Text>
                    )}
                    {!! this.state.validEmail && (
                        <Text style={color.first}>{this.state.validEmail}</Text>
                    )}

                    <TextInput
                        style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:25}}
                        placeholder= "City"
                        value={this.state.city}
                        onChangeText= {(text) => this.setState({city: text, cityError:null})}/>
                             
                    {!! this.state.cityError && (
                      <Text style={color.first}>{this.state.cityError}</Text>
                     )}

                    <TextInput
                        style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:25}}
                        placeholder= "Country"
                        value={this.state.country}
                        onChangeText= {(text) => this.setState({country: text, countryError: null})}/>
                
                    {!! this.state.countryError && (
                        <Text style={color.first}>{this.state.countryError}</Text>
                     )}

                   <TextInput
                        style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:25}}
                        placeholder= "Password"
                        secureTextEntry
                        maxLength={12}
                        value={this.state.password}
                        onChangeText= {(text) => this.setState({password: text, passwordError:null})}/>

                   {!! this.state.passwordError && (
                       <Text style={color.first}>{this.state.passwordError}</Text>
                   )}  
                   {!! this.state.validPassword && (
                       <Text style={color.first}>{this.state.validPassword}</Text>
                   )}

                   <TextInput
                        style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:25}}
                        placeholder= "Confirm Password"
                        secureTextEntry
                        maxLength={12}
                        value={this.state.cnf_password}
                        onChangeText= {(text) => this.setState({cnf_password: text, cnf_passwordError:null})}/>

                   {!! this.state.cnf_passwordError && (
                        <Text style={color.first}>{this.state.cnf_passwordError}</Text>
                   )}
                   {!! this.state.password_mismatch && (
                       <Text style={color.first}>{this.state.password_mismatch}</Text>
                   )}
                        
                   <TextInput
                        style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:25}}
                        placeholder= "Tagline (Max 60 Character)"
                        maxLength={60}
                        value={this.state.tagline}
                        onChangeText= {(text) => this.setState({tagline: text, taglineError:null})}/>        
                   
                   {!! this.state.taglineError && (
                         <Text style={color.first}>{this.state.taglineError}</Text>
                   )}

                   <View style={{flexDirection:"row",margin:20}}>  
                        <TouchableOpacity onPress={()=>{this.setState({checkbox:!this.state.checkbox})}}>
                           <View style={{height:40,width:40,borderRadius:20,backgroundColor:this.state.checkbox===true ? 'orange' : 'gray'}}></View>
                         </TouchableOpacity>  
                        <Text style={{fontSize:15,marginLeft:10, fontWeight:'bold'}}>I agree to the Terms and Conditions defined by Social Application.</Text>
                        </View>
      
                         <Modal
                              animationType={"fade"}
                              transparent={true}
                              visible={this.state.modalVisible}>
                              <View style={{backgroundColor:"#000000aa", flex:1}}>
                                  <TouchableOpacity style ={{width:screenWidth, height:screenHeight, position: 'absolute'}}
                                      onPress ={() => this.setModalVisible(false)}/>
                                   
                              <View style={{flexDirection:"row",width:300,height:200,borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,alignItems:"center", alignSelf:"center", backgroundColor:"#ffffff",marginTop:350}}>
                                <TouchableOpacity onPress={()=> this.SelectPhoto(1)}>
                                  <Image style={{width:55,height:55, marginLeft:40}} source={require("../assets/gallery.png")}/>
                                    <Text style={{ marginLeft:40}}>Gallery </Text>  
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={()=> this.SelectPhoto(2)}>
                                    <Image style={{width:55,height:55, marginLeft:100}} source={require("../assets/camera.png")}/>
                                      <Text style={{marginLeft:100}}>Camera </Text>
                                </TouchableOpacity>
                              </View>
                              </View>
                          </Modal>
              
                          <TouchableOpacity style={styles.button} onPress= {() => {this.isChecked();}}>     
                            <Text style={{color:"white",fontSize:18}}>SIGN UP</Text>
                    </TouchableOpacity>
                  </View>
               </View>
             </ScrollView>
        );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderBottomColor:'#ffffff',
        backgroundColor: '#ffffff'
    },
    ScrollView:{
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
      imagestyle:{
         width:120,
         height:120,
         borderRadius:60,
         borderColor:'orange',
         marginTop:20,
         justifyContent:'center',
         alignSelf:'center'
      },
    button: {
      backgroundColor: '#4169e1',
      marginTop:30,
      fontSize:25,
      padding: 14,
      paddingLeft:130,
      paddingRight:130
    },
     pickercontainer:{
       flex:1,
       borderWidth:1,
       marginTop:20
     },
     checkboxContainer:{
       flex:1,
       flexDirection:"row",
       marginBottom:20,
       marginTop:10
     }, 
    inputwrap:{
      flex:1,
      borderBottomWidth:1,
      marginBottom:1
    },
    inputwraps:{
      flex:1,
    },
    check1:{
      width:30,
      height:30,
      borderRadius:15,
      backgroundColor:"orange"
    },
    check2:{ 
      width:30,
      height:30,
      borderRadius:15,
      backgroundColor:"gray"
    },
     /************ modals ************/
    popup: {
      backgroundColor: 'white',
      marginTop:-10,
      marginHorizontal: 50,
      height:250,
      width:300,
      borderRadius: 20,
      justifyContent:"center",
      alignItems:"center"
    },
    popupOverlay: {
      backgroundColor: "#00000057",
      flex: 1,
      justifyContent:"center",
      marginTop:-125
    },
    popupContent: {
      //alignItems: 'center',
      margin: 5,
      height:170,
    }
  });