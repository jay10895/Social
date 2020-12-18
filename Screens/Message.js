
    import React, { Component } from 'react';

    import {
    Text,
    StyleSheet,
    View,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    BackHandler
    } from 'react-native';

    import AsyncStorage from '@react-native-community/async-storage';
    import Header from '../Screens/Header';

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flatlistState: 'message',
          data:[
    
            {
                "name": "Jay",
                "image": require("../assets/image_four.png"),
                "message": "nothing to woried about that",
                "time": "30min ago"
          },
          {
                "name": "Malley",
                "image": require("../assets/image_five.png"),
                "message": "hey, what's up?",
                "time": "3hr ago"
          },
          {
              "name": "Jordan",
              "image": require("../assets/image_three.png"),
              "message": "hey, let's catch up if u r free?",
              "time": "5hr ago"
          },
          {
              "name": "Michel",
              "image": require("../assets/image_six.png"),
              "message": "nothing u say",
              "time": "5 day ago"
          },
          {
              "name": "Barack",
              "image": require("../assets/image_two.jpg"), 
              "message": "yup just 2 paper remaining..",
              "time": "6 day ago"
          },
          {
              "name": "Trump",
              "image": require("../assets/image_four.png"),
              "message": "i have to go there",
              "time": "7 day ago"
          },
          {
              "name": "Jullie Venture",
              "image": require("../assets/image_nine.png"),
              "message": "bolo bolo",
              "time": "7 day ago"
          },
          {
              "name": "Parth",
              "image": require("../assets/image_eight.png"),
              "message": "it's all about yesterday",
              "time": "8 day ago"
          },
          {
              "name": "Kishan",
              "image": require("../assets/image_seven.png"),
              "message": "hey",
              "time": "8 day ago"
          },
          {
              "name": "Goerage",
              "image": require("../assets/image_ten.png"),
              "message": "hey",
              "time": "10 day ago"
          },
        ]
        };
      }

      disableBackButton = () => {
        this.props.navigation.navigate("Home");
         return true;
     }
 
     UNSAFE_componentWillMount() {
         BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
     }
 
     UNSAFE_componentWillUnmount() {
         BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
     }
      
      _storeName = async () => {
        try {
            alert(this.state.flatlistState);
            // await AsyncStorage.setItem(
            //   'flatListState',
            //   JSON.stringify(this.state.userName),
            // );
        } catch (error) { }
    };
    _retrieveData = async () => {
        try {
            // const value = await AsyncStorage.getItem('TaskData');
            // if (value !== null) {
            //   const value1 = JSON.parse(value);
            //   this.setState({
            //     TaskData: value1,
            //   });
            // }
        } catch (error) { }
    };

      message = async () => {
        try {
          const flatListState = 'Message';
          await AsyncStorage.setItem('flatListState', flatListState);
          this.props.navigation.navigate('People');
        } catch (error) {}
      };
      FollowB = async () => {
        try {
          const flatListState = 'FollowB';
          await AsyncStorage.setItem('flatListState', flatListState);
          this.props.navigation.navigate('People');
        } catch (error) {}
      };
     
      renderItem({item,index}){
        return(
        <View>
           <TouchableOpacity onPress={() => {this.props.navigation.navigate("ChatScreen",{name:item.name})}}>
                <View style= {{ marginTop: 10, flexDirection: "row", marginLeft: 20, marginBottom: 10 }}>
                    <Image source={item.image}  style={{height:60, width:60,borderRadius:30, borderColor: "#20232a", borderWidth: 2 }} />

                        <View style={{alignItems:"center",flex:1,flexDirection:"row",justifyContent:"space-around"}} >
                           <Text style={{fontWeight:"normal",fontSize:15,marginTop:5}}>{item.name}{"\n"}<Text style={{fontSize:15}}>{item.message}</Text></Text>
                            <Text style={{fontWeight:"normal",fontSize:15}}>{item.time}</Text>
                        </View>
                         
                </View>
            </TouchableOpacity>   
    
        </View>
        );
      }

      FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: "100%",
                    backgroundColor: "gray",
                }}
            />
        );
    }

    render(){
        return(
            <View style={{backgroundColor:"white", flex:1}}>

                <View style={{ flexDirection: "row", borderBottomColor: "gray", borderWidth: 1, padding: 15 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center", marginLeft: 3, marginRight: 250 }}>Message</Text>

                    <TouchableOpacity onPress={() => { this.message(); }}>
                        <Image source={require("../assets/plus.png")} style={{ height: 35, width: 35, marginLeft: 1 }} />
                    </TouchableOpacity>

                    <FlatList
                    data={this.state.data}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    keyExtractor={item => item}
                    renderItem={this.renderItem.bind(this)} />

                </View>

            </View>
        );
    }
    }
    const styles = StyleSheet.create({
        container:{
            display: "flex",
            flexDirection: "column",
            borderBottomColor:'#000000',
            backgroundColor: '#ffffff'
        },
        inputStyle: {
            width:'100%',
            marginBottom:10,
            height:75,
            flexDirection:"row",
            borderColor:"#20232a",
            padding:10,
            borderBottomWidth:1
          },
          followouter: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 90,
            height: 25,
            borderRadius: 4,
            marginTop: 10,
            backgroundColor: 'dodgerblue'
        },
        unfollowouter: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 90,
            height: 25,
            borderRadius: 4,
            borderWidth: 1,
            marginTop: 10,
            borderColor: '#999296',
        },          
});

