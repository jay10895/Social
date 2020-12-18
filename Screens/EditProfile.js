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


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default class SignUp extends Component {

            // for back screem
          disableBackButton=() =>{                         
        this.props.navigation.navigate("Recent");
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
            editusername:'',
            email:'',
            validEmail:'',
            city:'',
            country:'',
            tagline:'',
            avatarSource:null,

            fullnameError:'',
            editusernameError:'',
            emailError:'',
            cityError:'',
            countryError:'',
            taglineError:'',
            modalVisible:false,
        };
      this.SelectPhoto = this.SelectPhoto.bind(this);
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
      if(Utlis.isStringNull(this.state.editusername)){
        isValid = false;
        this.setState({editusernameError:string.onboarding.all});
      }else if (Utlis.isNameValid(this.state.editusername) === false) {
        isValid=false;
        this.setState({editusernameError:string.onboarding.validUser});
      }
      else{
        this.setState({editusernameError:null});
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
          //city
      if(Utlis.isStringNull(this.state.city) ){
        isValid = false;
        this.setState({cityError:string.onboarding.all});
      }else if(Utlis.isNameValid(this.state.city) === false){
        isValid = false;
        this.setState({cityError:string.onboarding.cityError});
      }
      else{
        this.setState({cityError:null});
      }

      //country
      if(Utlis.isStringNull(this.state.country) ){
        isValid = false;
        this.setState({countryError:string.onboarding.all});
      }else if(Utlis.isNameValid(this.state.country)=== false){
        isValid = false;
        this.setState({countryError:string.onboarding.countryError});
      }
      else{
        this.setState({countryError:null});
      }

       //tagline
      if(Utlis.isStringNull(this.state.tagline == null) ){
        isValid = false;
        this.setState({taglineError:string.onboarding.all});
      }else if(Utlis.isNameValid(this.state.tagline)=== false){
        isValid = false;
        this.setState({taglineError:string.onboarding.taglineError});
      }
      else{
        this.setState({taglineError:null});
      }

      if(isValid ===true){
        this.props.navigation.navigate("Recent")
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
                        placeholder= "User Name"
                        value={this.state.editusername}
                        onChangeText= {(text) => this.setState({editusername: text, editusernameError: null, validUser:null})}/>

                    {!! this.state.editusernameError && (
                         <Text style={color.first}>{this.state.editusernameError}</Text>
                    )}

                    
                    {!! this.state.validUser && (
                      <Text style={color.first}>{this.state.validUser}</Text>
                    )}

                    <TextInput
                     style={{height: 40, borderBottomColor: 'black', borderBottomWidth:1,marginTop:25}}
                    placeholder= "Email"
                    keyboardType="email-address"
                    value={this.state.email}
                onChangeText= {(text) => this.setState({email: text, emailError: null, validEmail: null})}/>


                {!! this.state.emailError && (
                  <Text style={color.first}>{this.state.emailError}</Text>
                )}

                {!! this.state.validEmail && (
                  <Text style={color.first}>{string.onboarding.validEmail}</Text>
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
                        placeholder= "Tagline (Max 60 Character)"
                        maxLength={60}
                        value={this.state.tagline}
                        onChangeText= {(text) => this.setState({tagline: text, taglineError:null})}/>        

                    {!! this.state.taglineError && (
                          <Text style={color.first}>{this.state.taglineError}</Text>
                    )}
                 
                         <Modal
                              animationType={"fade"}
                              transparent={true}
                              visible={this.state.modalVisible}
                              >
                              <View style={styles.popupOverlay}>
                                  <TouchableOpacity style ={{width:screenWidth, height:screenHeight, position: 'absolute'}}
                                      onPress ={() => this.setModalVisible(false)}/>
                            
                                  
                            
                              <View style={{flexDirection:"row",width:300,height:200,borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,alignItems:"center", alignSelf:"center", backgroundColor:"#ffffff",marginTop:200}}>
                                
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
                            <Text style={{color:"white",fontSize:18}}>UPDATE</Text>
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
      padding: 16,
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
      flex:1
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
 