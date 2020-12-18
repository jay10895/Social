import React, { Component } from 'react';

import { SliderBox } from "react-native-image-slider-box";


import Video from 'react-native-video';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,

} from 'react-native';

//import Header from './Header';
import Header from '../Screens/Header'
import Flag from './Flag';

export default class Home extends Component {

    constructor(props){
        super(props); 
    
          this.state = {
            modalVisible:false,
            userSelected:[],
              
            data:[
              {
                "name": "Jay",
                "image": require("../assets/image_four.png"),
                "images":[
                  require("../assets/hall.png"),
                  require("../assets/leh_ladakh.png"),
                  require("../assets/Shanthi.png"),
                  require("../assets/young.png"), ],
                "video": require("../assets/seconds.mp4"),  
                "date":"Jun 11, 05:45 PM",
                "text":"Hall Of Fame Museum",
                "text_one":"Hall Of Fame Museum Decicated to the Indian Soliders",
                "hashtag":"#Hall #Fame #Museum",
                "text_two":"Indian Soliders",
                "like":"20 Likes",
                "comments":"10 Comments"
              },
              {
                "name": "Jordan",
                "image": require("../assets/image_eight.png"),
                images:[
                  require("../assets/Leh.png"),
                  require("../assets/hall.png"),
                  require("../assets/taj_mahal.png"),
                  require("../assets/mountain.png"),    
                ],
                "video": require("../assets/seconds.mp4"),
                "date":"Jun 11, 07:45 PM",
                "text":"Leh",
                "text_one":"beautiful secens",
                "hashtag":"#flag",
                "text_two":"mountain & flag",
                "like":"5 Likes",
                "comments":"0 Comments"
              },
              {
                "name": "Malley",
                "image": require("../assets/image_eleven.png"),
                images:[
                  require("../assets/taj_mahal.png"),
                  require("../assets/hall.png"),
                  require("../assets/grand_ladakh.png"),
                  require("../assets/mountain.png"), 
                ],
                "video": require("../assets/seconds.mp4"),
                "date":"Jun 10, 07:45 PM",
                "text":"Taj Mahal",
                "text_one":"Taj Mahal is beauty of India",
                "hashtag":"#Taj Mahal",
                "text_two":"Ancient",
                "like":"30 Likes",
                "comments":"10 Comments"
                
              },
              {
                "name": "Barack",
                "image": require("../assets/image_four.png"),
                images:[
                  require("../assets/leh_ladakh.png"),
                  require("../assets/hall.png"),
                  require("../assets/taj_mahal.png"),
                  require("../assets/mountain.png"),
                ],
                "video": require("../assets/seconds.mp4"),
                "date":"Jun 10, 05:45 PM",
                "text":"Leh Ladakh",
                "text_one":"Mesmerizing Leh Ladakh Tour",
                "hashtag":"#Bikers #Bullet",
                "text_two":"Bike ride",
                "like":"50 Likes",
                "comments":"15 Comments"
              },
              {
                "name": "Michel",
                "image": require("../assets/image_five.png"),
                images:[
                  require("../assets/Shanthi.png"),
                  require("../assets/hall.png"),
                  require("../assets/taj_mahal.png"),
                  require("../assets/mountain.png"),
                ],
                "video": require("../assets/seconds.mp4"),
                "date":"Jun 9, 00:45 AM",
                "text":"Ma Dhemo",
                "text_one":"beautiful experience to have while you acclimatize in Leh",
                "hashtag":"#Temple",
                "text_two":"Temple",
                "like":"80 Likes",
                "comments":"2 Comments"
              },
              {
                "name": "Trump",
                "image": require("../assets/image_seven.png"),
                images:[
                  require("../assets/mountain.png"),
                  require("../assets/hall.png"),
                  require("../assets/taj_mahal.png"),
                  require("../assets/grand_ladakh.png"), 
                ],
                "video": require("../assets/seconds.mp4"),
                "date":"Jun 8, 8:45 PM",
                "text":"Mountain range",
                "text_one":"beauty of Leh",
                "hashtag":"#Mountains",
                "text_two":"mountain",
                "like":"25 Likes",
                "comments":"0 Comments"
              },
              {
                "name": "Jullie Venture",
                "image": require("../assets/image_six.png"),
                images:[
                  require("../assets/grand_ladakh.png"),
                  require("../assets/Shanthi.png"),
                  require("../assets/mountain.png"),
                  require("../assets/young.png"),   
                ],
                "video": require("../assets/seconds.mp4"),
                "date":"Jun 8, 9:45 PM",
                "text":"Bikers",
                "text_one":"travel with friends ",
                "hashtag":"#travel",
                "text_two":"travel with friends ",
                "like":"55 Likes",
                "comments":"0 Comments"
              },
              {
                "name": "Parth",
                "image": require("../assets/image_ten.png"),
                images:[
                  require("../assets/young.png"),
                  require("../assets/hall.png"),
                  require("../assets/taj_mahal.png"),
                  require("../assets/grand_ladakh.png"),   
                ],
                "video": require("../assets/seconds.mp4"),
                "date":"Jun 7, 05:45 PM",
                "text":"Traveler",
                "text_one":"middle of empty road in leh ladakh",
                "hashtag":"#young",
                "text_two":"road",
                "like":"55 Likes",
                "comments":"26 Comments"
              },
            ] 
        }
      }
    
     /* onLayout = e => {
        this.setState({
          width: e.nativeEvent.layout.width
        });
      };*/

      renderItem({item,index}){
        let { children, ...props } = this.props;

        return(
         <View style={{flex:1}}> 
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('UserProfile')}}>
              <View style= {styles.inputStyle}>
                <Image source={item.image}  style={{height:60, width:60,borderRadius:30,borderColor: "#20232a",borderWidth:1}} />
                    <View style={{alignItems:"center",flex:1,flexDirection:"row",justifyContent:"space-around"}} >
                      <Text style={{fontWeight:"bold",fontSize:15}}>{item.name}</Text>
                      <Text style={{fontWeight:"normal",fontSize:15}}>{item.date}</Text>
                    </View>
              </View>
              </TouchableOpacity>
            

               <SliderBox images={item.images}
                        dotColor="#20639B"
                        inactiveDotColor="white"
                        dotStyle={{
                          width: 10,
                          height: 10,
                          borderRadius: 10,
                          marginHorizontal: 10,
                          padding: 0,
                          marginTop: 50
                        }}
                        />

               <Video source={item.video} style={{width:"100%", height:140, marginTop:10}}/>
              <View style={{padding:10}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Flag")}}> 

              <Text style={{fontSize:18,fontWeight:'bold'}}>{item.text}</Text>
              <Text style={{fontSize:15,fontWeight:'norma'}}>{item.text_one}</Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginTop:5}}>{item.hashtag}</Text>
              <Text style={{fontWeight:'bold'}}>{item.text_two}</Text>
              </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row',height:50,width:'100%',borderColor:'gray',borderTopWidth:0.5,borderBottomWidth:1}}>
                <View style={{alignSelf:"center", margin:20,flexDirection:'row'}}>
                  <Image source={require('../assets/like_one.png')}style={{height:25,width:25}}/>
                  <Text style={{marginLeft:10,alignSelf:"center"}}>{item.like}</Text>
                </View>

                <View style={{alignSelf:"center", margin:40,flexDirection:'row'}}>
                  <Image source={require('../assets/comment.png')}style={{height:25,width:25}}/>
                  <Text style={{marginLeft:10,alignSelf:"center"}}>{item.comments}</Text>
                </View>

                <View style={{alignSelf:"center", margin:40,flexDirection:'row'}}>
                  <Image source={require('../assets/more.png')}style={{height:25,width:25}}/>
                </View>

              </View>
         </View>
        );
      }
 
   render() {
     return (
       <View >         
            
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.container}>
              <Header title={"Recent"} imgsrc={require('../assets/placeholder.png')}/>
                <FlatList
                data={this.state.data}
                keyExtractor={item => item}
                renderItem={this.renderItem.bind(this)}/>
              </View>
            </ScrollView>
       </View>       
      );
    }
}
const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"column",
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
    },
    followouter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 25,
        borderRadius: 4,
        marginTop:10,
        backgroundColor: '#20639B'
      },
      unfollowouter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        width: 90,
        height: 25,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#20639B',
      }, 
});