import React, { Component } from 'react';

import { 
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default class ChatScreen extends Component {

    constructor() {
        super();
        this.array = [{
          title:null
      },
      ],
    this.state={
        message:'',
        modalVisible:false,
        arrayHolder: [],
        textInput_Holder: '',
      }
    }

   //handler
        disableBackButton=() =>
        {
            this.props.navigation.navigate("Message");
            return true;
        }
        UNSAFE_componentWillMount()
        {
            BackHandler.addEventListener('hardwareBackPress' ,this.disableBackButton);
        }
        UNSAFE_componentWillUnmount()
        {
            BackHandler.removeEventListener('hardwareBackPress',this.disableBackButton);
        }

        clickEventListener = (item) => {
          this.setModalVisible(true);
        }
     
        //for image picker
        setModalVisible(visible) {
        this.setState({modalVisible: visible});
        }        

        joinData = () => {

          this.array.push({ title: this.state.textInput_Holder });
  
          this.setState({ arrayHolder: [...this.array] })
  
      }        

   render(){
      return(
         <View style={{backgroundColor:'white', flex:1}}>
           
            <View style={{borderBottomColor:'gray', flexDirection:"row", padding:8, borderBottomWidth:1}}>    
                
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Message')}}>
                    <Image source={require('../assets/left_arrow.png')} style={{height:30,width:30,marginTop:10}}/>  
                </TouchableOpacity>
                
                <Image source={require('../assets/image_four.png')} style={{height:50,width:50,borderRadius:30 ,marginLeft:24,alignSelf:"center"}}/>  
                
                <Text style={{fontSize: 20, alignSelf: "center", marginLeft: 15, marginRight: 25}}>Jay Soni</Text> 
            </View>
                  
            <View >
                <FlatList
                  data={this.state.arrayHolder}
                  keyExtractor={(index) => index.toString()}
                  renderItem={({ item }) => <Text style={{ fontSize: 18,alignSelf:"flex-end",borderWidth:1,margin:10,borderRadius:4,padding:3}} > {item.title} </Text>}
                  />
              </View>


              <View style={styles.inputStyle}>

                    <TextInput   
                        style={{fontSize:18,height:60,alignSelf:"center"}}
                        placeholder="Enter your message"
                        value={this.state.textInput_Holder}
                        onChangeText={(text) => this.setState({ textInput_Holder: text })}  />

                    <TouchableOpacity onPress={()=>{this.setModalVisible(true)}} >
                        <Image source={require('../assets/attachment.png')} style={{height:30, width:30,marginLeft:100, marginTop:1}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> {this.joinData()}}>             
                        <Image source={require("../assets/right_arrow.png")} style={{ width: 30, height: 30,marginLeft:30,marginTop:1}} />
                    </TouchableOpacity>
                    </View>

            <Modal
               animationType={"fade"}
               transparent={true}
               visible={this.state.modalVisible}>

                  <View style={styles.popupOverlay}>
                 
                    <TouchableOpacity style ={{width:screenWidth, height:screenHeight, position: 'absolute'}} onPress ={() => this.setModalVisible(false)}/>
                      
                      <View style={styles.popup}>
                       
                        <Text style={{fontSize:18, padding:15, paddingLeft:30}}>Photo</Text>
                        <Text style={{fontSize:18, padding:15, paddingLeft:30}}>Video</Text>
                        <Text style={{fontSize:18, padding:15, paddingLeft:30}}>Location</Text>
                        <Text style={{fontSize:18, padding:15, paddingLeft:30}}>Contact</Text>
                       
                      </View>

                  </View>
            </Modal>
           
             </View>
         );
     }
}

const styles = StyleSheet.create({
  popup: {
    backgroundColor: 'white',
    marginTop: 569,
    borderRadius:2,
    justifyContent: "center",
    alignSelf: 'center',
    marginLeft:250,
    width:270,
    shadowColor:"gray",
    shadowOpacity: 0.9,
    shadowRadius:3,
    elevation:20,
    shadowOffset:{height:3,width:0} 
  },
  popupOverlay: {
    flex: 1,
  },
  inputStyle: {
    width: '100%',
    borderColor: "gray",
    height: 52,
    borderWidth: 0.7,
    padding: 10,
    marginTop: 750,
    flexDirection:"row",
    position:"absolute"
  }
});