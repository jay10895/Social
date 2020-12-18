import React, { Component } from 'react';

import { 
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
    TextInput,
    label,
    StatusBar,
    BackHandler,
    Image,
    FlatList,
    ScrollView,
    options,
    Share,
} from 'react-native';

import RBSheet from "react-native-raw-bottom-sheet";

export default class Flag extends Component{

    constructor(props) {
        super(props);
        this.state = {
          Email:'',
          EmailError:'',
          validateemail:'',
          countelike:0,
          colorlike:'',
          countheart:0,
          colorheart:'',
          isratting:false,
          Default_Rating: 0,
          Max_Rating: 5,
          Star : 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png',
          Star_With_Border : 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png',
        };
      }

      isCheck(){
        var isValid = true;
    
    
        if(Utils.isStringNull(this.state.Email)){
          isValid= false;
          this.setState({EmailError:String.validate.email});
        }else if (!Utils.isEmailValid(this.state.Email)) {
          isValid=false;
          this.setState({EmailError:String.validate.validateemail});
        }else{
          this.setState({EmailError:null});
        }
    
        if(isValid === true){
           this.props.navigation.navigate("Login");
        }
      }

      //handler
    disableBackButton=() =>
    {
      this.props.navigation.navigate('Flag');
      //BackHandler.exitApp();
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
  //handler

  isblock(){

    if(! this.state.isblock){
      Alert.alert(
        'Alert',
        'Post Flaged Successfully. ',
        [
          { text: 'Ok', onPress :() => this.setState({isblock:true}) },
        ],
        { cancelable: false }
      )
    }   

    
    else{
      Alert.alert(
        'Alert',
        'You have already flag this post',
        [
          { text: 'Ok', onPress :() => this.setState({isblock:true}) },
        ],
        { cancelable: false }
      )
    }
  }

  
  countlike() {
    if(this.state.countelike == 0){
      this.setState({colorlike:true})
      this.state.countelike ++;
    }
    else{
      this.setState({colorlike:false})
      this.state.countelike --;
    }
  }


  countheart(){
      if(this.state.countheart == 0){
        this.setState({colorheart:true})
        Alert.alert("Alert","Post Successfully Added To Your Favourites")
        this.state.countheart ++;
      }
      else{
        this.setState({colorheart:false})
        this.state.countheart --;
      }
  }


  
  isratting(){
    if(! this.state.isratting){
      this.setState({isratting:true})
    }
    else{
      this.setState({isratting:false})
    }
  }



   
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  UpdateRating(key) {
    this.setState({ Default_Rating: key });
  }
      

  render(){
    const counter = this.state.counter;

    let React_Native_Rating_Bar = [];
  //Array to hold the filled or empty Stars
  for (var i = 1; i <= this.state.Max_Rating; i++) {
    React_Native_Rating_Bar.push(
      <TouchableOpacity
        activeOpacity={0.7}
        key={i}
        onPress={this.UpdateRating.bind(this, i)}>
        <Image
          style={styles.StarImage}
          source={
            i <= this.state.Default_Rating
              ? { uri: this.state.Star }
              : { uri: this.state.Star_With_Border }
          }
        />
      </TouchableOpacity>
    );
  }
     return(
        <View style={{flex:1}}>
            <View style={{borderBottomColor:'gray', flexDirection:"row", height:65, borderBottomWidth:1}}>    
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Recent')}} style={{marginTop:18}}>
                    <Image source={require('../assets/left_arrow.png')} style={{height:20, width: 20, marginTop:5,alignSelf: "center",marginLeft:20}}/>  
                </TouchableOpacity>
                
                <Image source={require('../assets/image_four.png')} style={{height: 35, width: 35, alignSelf:"center",marginLeft:20}}/>

                <Text style={{fontWeight: "bold", fontSize: 18, alignSelf: "center", marginLeft: 10}}>Jay Soni</Text> 
                
                <TouchableOpacity style={{marginLeft:50,marginTop:17}}
                    onPress={() =>  {this.state.isblock === true ? this.isblock(true) : this.isblock(false)}}>
                  <Image source={require('../assets/flag.png')} 
                    style={{height: 30, width: 30, alignSelf:"center",marginLeft:20,
                    tintColor: this.state.isblock === true ? 'red' : "black"}}/>  
              </TouchableOpacity>

              <TouchableOpacity style={{marginTop:20}} onPress={() => this.RBSheet.open()}>
                <Image source={require('../assets/more.png')}
                    style={{height: 25, width: 25, alignSelf:"center",marginLeft:20}}/>
              </TouchableOpacity>
            </View>


            <RBSheet
                    ref={ref => {
                      this.RBSheet = ref;
                    }}
                    height={240}
                    openDuration={250}> 

                    <View>
                      <TouchableOpacity onPress={this.onShare}>
                      <View style={{height:60,width:"100%",borderBottomWidth:1,borderBottomColor:"gray",justifyContent:"center"}}>
                      <Text style={{fontSize:20,alignSelf:"center"}}>Share</Text>
                      </View>
                      </TouchableOpacity>

                      <View style={{height:60,width:"100%",borderBottomWidth:1,borderBottomColor:"gray",justifyContent:"center"}}>
                      <Text style={{fontSize:20,alignSelf:"center"}}>Rating</Text>
                      </View>
                      <View style={{height:60,width:"100%",justifyContent:"center"}}>
                      <Text style={{fontSize:20,alignSelf:"center"}}>Abuse!</Text>
                      </View>

                      <View style={{borderWidth:5,height:10,width:"100%",margin:0}}></View>

                      <TouchableOpacity onPress={() =>{this.RBSheet.close();}}>
                      <View style={{height:60,width:"100%",justifyContent:"center"}}>
                      <Text style={{fontSize:20,alignSelf:"center"}}>Cancel</Text>
                      </View>
                      </TouchableOpacity>
                    </View>
            </RBSheet>

            <ScrollView contentContainerStyle={styles.container}>

              <View style={styles.container}>
              <View>
                <Image source={require('../assets/leh_ladakh.png')} style={{height:250,width:"100%"}}/>
              </View>
              <View style={{margin:10}}>
              <View style={{flexDirection:"row",marginTop:20}}>


              <View style={styles.childView}>{React_Native_Rating_Bar}</View>

                
                <TouchableOpacity onPress={()=>{this.countlike()}}>
                <Image source={require('../assets/i.png')} 
                style={{height:25,width:25,marginLeft:130,
                tintColor: this.state.colorlike === true ? 'blue' : "black"
                }}/>
                </TouchableOpacity>

                <Text style={{fontSize:18,marginLeft:8}}>{this.state.countelike}</Text>



                <TouchableOpacity onPress={() => {this.countheart()}} >
                <Image source={require('../assets/heart.png')} 
                style={{height:25,width:25,marginLeft:8,tintColor: this.state.colorheart === true ? 'red' : "black"}}/>
                </TouchableOpacity>

                <Text style={{fontSize:18,marginLeft:8}}>{this.state.countheart}</Text>

              </View>
              <View style={{marginTop:10}}>
                <Text style={{fontSize:20, marginLeft:4, marginTop:25}}>Leh Ladakh</Text>
                <Text style={{fontSize:20, marginLeft:4, marginTop:5}}>Mesmerizing Leh Ladakh Tour</Text>
                <Text style={{fontSize:20, marginLeft:4, marginTop:5}}>#Bikers #Bullet</Text>           
              </View>


              <View>
                <Text style={{fontWeight:"bold",fontSize:20,marginTop:20}}>Likes</Text>
                <View style={{flexDirection:"row",marginTop:10}}>
                        <Image source={require('../assets/image_eight.png')} style={{height:60,width:60,borderRadius:30}}/>
                        <Image source={require('../assets/image_eleven.png')} style={{marginLeft:5,height:60,width:60,borderRadius:30}}/>
                        <Image source={require('../assets/image_six.png')} style={{marginLeft:5,height:60,width:60,borderRadius:30}}/>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Like')}}
                         style={{height:60,justifyContent:"center",width:60,marginLeft:10,borderRadius:30,borderWidth:1,borderColor:"black"}}>
                          <Image source={require('../assets/more.png')} style={{height:40,width:40,alignSelf:"center"}}/>
                        </TouchableOpacity>
                </View>
                <Text style={{fontWeight:"bold",fontSize:20,marginTop:20}}>Comments</Text>
              </View>
              <View style= {styles.inputStyle}>

              <Image source={require('../assets/image_four.png')}  style={{height:70, marginTop:10,width:70,
                borderRadius:35,borderColor: "#20232a",borderWidth:1}} />
                <View style={{alignSelf:"center",flex:1,flexDirection:"row",marginLeft:20}} >
                  <View style={{flexDirection:"column"}}>
                  <Text style={{fontWeight:"bold",fontSize:15}}>Jay Soni</Text>
                  <Text style={{fontWeight:"normal"}}>Nice</Text>
                  </View>
                  <Text style={{fontWeight:"normal",color:"gray",fontSize:15,marginLeft:100}}>Oct 05:10 PM</Text>
                </View>
              </View>

              <View style= {styles.inputStyle}>

              <Image source={require('../assets/image_ten.png')}  style={{height:70, marginTop:10,width:70,
                borderRadius:35,borderColor: "#20232a",borderWidth:1}} />
                <View style={{alignSelf:"center",flex:1,flexDirection:"row",marginLeft:20}} >
                  <View style={{flexDirection:"column"}}>
                  <Text style={{fontWeight:"bold",fontSize:15}}>Carry minati</Text>
                  <Text style={{fontWeight:"normal"}}>Mst</Text>
                  </View>
                  <Text style={{fontWeight:"normal",color:"gray",fontSize:15,marginLeft:110}}>Oct 01:10 AM</Text>
                </View>
              </View>

              <View style= {styles.inputStyle}>

              <Image source={require('../assets/image_three.png')}  style={{height:70, marginTop:10,width:70,
                borderRadius:35,borderColor: "#20232a",borderWidth:1}} />
                <View style={{alignSelf:"center",flex:1,flexDirection:"row",marginLeft:20}} >
                  <View style={{flexDirection:"column"}}>
                  <Text style={{fontWeight:"bold",fontSize:15}}>Bhargav Lukhi</Text>
                  <Text style={{fontWeight:"normal"}}>Nice</Text>
                  </View>
                  <Text style={{fontWeight:"normal",color:"gray",fontSize:15,marginLeft:100}}>Oct 06:00 PM</Text>
                </View>
              </View>

              <View style= {styles.inputStyle}>

              <Image source={require('../assets/image_seven.png')}  style={{height:70, marginTop:10,width:70,
                borderRadius:35,borderColor: "#20232a",borderWidth:1}} />
                <View style={{alignSelf:"center",flex:1,flexDirection:"row",marginLeft:20}} >
                  <View style={{flexDirection:"column"}}>
                  <Text style={{fontWeight:"bold",fontSize:15}}>Viraj gajjar</Text>
                  <Text style={{fontWeight:"normal"}}>Very Nice</Text>
                  </View>
                  <Text style={{fontWeight:"normal",color:"gray",fontSize:15,marginLeft:120}}>Oct 02:00 Am</Text>
                </View>
              </View>

              <View style= {styles.inputStyle}>

              <Image source={require('../assets/man.png')}  style={{height:70, marginTop:10,width:70,
                borderRadius:35,borderColor: "#20232a",borderWidth:1}} />
                <View style={{alignSelf:"center",flex:1,flexDirection:"row",marginLeft:20}} >
                  <View style={{flexDirection:"column"}}>
                  <Text style={{fontWeight:"bold",fontSize:15}}>Yash Baldha</Text>
                  <Text style={{fontWeight:"normal"}}>Good</Text>
                  </View>
                  <Text style={{fontWeight:"normal",color:"gray",fontSize:15,marginLeft:110}}>Oct 05:10 PM</Text>
                </View>
              </View>
                  
            </View>
            </View>
            </ScrollView>
 
      
            <View style={{flexDirection:"row",backgroundColor:"white",borderTopWidth:1,borderTopColor:"gray"}}>

                    <TextInput   
                        style={{fontSize:18,height:60,alignSelf:"center"}}
                        placeholder="Enter your message"
                        value={this.state.textInput_Holder}
                        onChangeText={(text) => this.setState({ textInput_Holder: text })}  />
                
                <TouchableOpacity>             
                    <Image source={require("../assets/right_arrow.png")} style={{ width: 30, height: 30,marginLeft:180,marginTop:15}} />
                </TouchableOpacity>
              </View>
           
        </View>
     );
  }
}

const styles = StyleSheet.create({
    container: {
          backgroundColor:"white",
          justifyContent:"center",
      },
        text:{
          marginTop:50,
          margin:50,
          fontSize:35,
          alignSelf:"center",
          fontWeight:"bold"
        },
        inputStyle: {
          width:'100%',
          marginBottom:10,
          borderColor:"#20232a",
          height:70,
          flexDirection:"row",
          padding:10,
        },
        inputStyle: {
          width:'100%',
          marginBottom:10,
          height:75,
          flexDirection:"row",
        },
        childView: {
          justifyContent: 'center',
          flexDirection: 'row',
        },
        StarImage: {
          width: 30,
          height: 30, 
          resizeMode: 'cover',
        },
    });