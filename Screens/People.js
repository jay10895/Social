import React, { Component } from 'react';

import { Text,
StyleSheet,
View,
TouchableOpacity,
BackHandler,
FlatList,
Image,
ScrollView,
Alert
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class Followers extends Component{ 

  state = {
    flatListState: '',
    
    FollowB: [
      {
        "name": "Jay",
        "emailid" : "jay@gmail.com",
        "image": require("../assets/image_four.png"),
        "isFollow":false,
      },
      {
        "name": "Aarohi Patel",
        "emailid" : "aarohipatel@gmail.com",
        "image": require("../assets/image_eleven.png"),
        "isFollow":false,
      },
      {
        "name": "Aarohi",
        "emailid" : "aarohi@gmail.com",
        "image": require("../assets/image_eleven.png"),
        "isFollow":false,
      },
      {
        "name": "Goerage",
        "emailid" : "goerage@gmail.com",
        "image": require("../assets/image_ten.png"),
        "isFollow":false,
      },
      {
        "name": "Kishan",
        "emailid" : "kishan@gmail.com",
        "image": require("../assets/image_seven.png"),
        "isFollow":false,
      },
      {
        "name": "Parth",
        "emailid" : "parth@gmail.com",
        "image": require("../assets/image_eight.png"),
        "isFollow":false,
      },
      {
          "name": "Jullie Venture",
          "emailid" : "jullieventure12@gmail.com",
          "image": require("../assets/image_nine.png"),
          "isFollow":false,
      },
      {
        "name": "Trump",
        "emailid" : "trump@gmail.com",
        "image": require("../assets/image_four.png"),
        "isFollow":false,
      },
      {
        "name": "Barack",
        "emailid" : "barack@gmail.com",
        "image": require("../assets/image_two.jpg"), 
        "isFollow":false,
      },
      {
        "name": "Michel",
        "emailid" : "michel@gmail.com",
        "image": require("../assets/image_six.png"),
        "isFollow":false,
      },
      {
        "name": "Malley",
        "emailid" : "malley@gmail.com",
        "image": require("../assets/image_five.png"),
        "isFollow":false,
      },
      {
        "name": "Jordan",
        "emailid" : "jordan@gmail.com",
        "image": require("../assets/image_three.png"),
        "isFollow":false,
      },
    ],
      message: [
      {
        "name": "Jay",
        "emailid" : "jay@gmail.com",
        "image": require("../assets/image_four.png"),
      },
      {
        "name": "Jordan",
        "emailid" : "jordan@gmail.com",
        "image": require("../assets/image_three.png"),
      },
      {
        "name": "Malley",
        "emailid" : "malley@gmail.com",
        "image": require("../assets/image_five.png"),
      },
      {
        "name": "Michel",
        "emailid" : "michel@gmail.com",
        "image": require("../assets/image_six.png"),
      },
      {
        "name": "Barack",
        "emailid" : "barack@gmail.com",
        "image": require("../assets/image_two.jpg"), 
      },
      {
        "name": "Trump",
        "emailid" : "trump@gmail.com",
        "image": require("../assets/image_four.png"),
      },
      {
        "name": "Jullie Venture",
        "emailid" : "jullieventure12@gmail.com",
        "image": require("../assets/image_nine.png"),
    },
      {
        "name": "Parth",
        "emailid" : "parth@gmail.com",
        "image": require("../assets/image_eight.png"),
      },
      {
        "name": "Kishan",
        "emailid" : "kishan@gmail.com",
        "image": require("../assets/image_seven.png"),
      },
      {
        "name": "Goerage",
        "emailid" : "goerage@gmail.com",
        "image": require("../assets/image_ten.png"),
      },
      {
        "name": "Aarohi Patel",
        "emailid" : "aarohipatel@gmail.com",
        "image": require("../assets/image_eleven.png"),
      },
      {
        "name": "Aarohi",
        "emailid" : "aarohi@gmail.com",
        "image": require("../assets/image_eleven.png"),
      },
    ],
  };

  componentDidMount() {
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('flatListState');
      this.setState({flatListState: value});
    } catch (error) {
      alert(error);
    }
  };

  updatefollow = (item,index) =>{
   var list = this.state.FollowB;
   list[index].isFollow = !item.isFollow
   this.setState({data:list},()=>{
     console.log("data list --> " +JSON.stringify(list));
   });
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor:"white"}}>
      {this.state.flatListState == 'FollowB' ? (
        <FlatList
          data={this.state.FollowB}
          keyExtractor={(item) => item}
          renderItem={this.renderItem.bind(this)}
        />
      ) : (
        <FlatList
          data={this.state.message}
          keyExtractor={(item) => item}
          renderItem={this.renderItem.bind(this)}
        />
      )}
    </View>
     );
   }

   renderItem({item,index}){
    return(
    <View style= {styles.inputStyle}>
      <Image source={item.image}  style={{height:60, width:60,borderRadius:30,borderColor: "#20232a",borderWidth:1}} />

       <View style={{alignItems:"center",flex:1}} >
         <Text style={{fontWeight:"bold"}}>{item.name}{"\n"}<Text style={{fontWeight:"normal"}}>{item.emailid}</Text></Text>
       </View>


       <TouchableOpacity
        underlayColor='#DFE1E3' onPress={() => {this.updatefollow(item,index)}} >
       
       { this.state.flatListState == 'FollowB' ? (
         ! item.isFollow === true ?
           <View style={styles.followouter}>
             <Text style={{ color: '#fefefe', fontSize: 12 }}>Follow</Text>
           </View>
           :
           <View style={styles.unfollowouter}>
             <Text style={{ color: '#36292a', fontSize: 12 }}>UnFollow</Text>
           </View>
           ):

         <TouchableOpacity onPress={() => {this.props.navigation.navigate('ChatScreen');}}>
           <View style={styles.followouter}>
               <Text style={{color: 'white', fontSize: 12}}>Message</Text>
         </View>
         </TouchableOpacity>
       }
  </TouchableOpacity>

       
    </View>
    ); 
  }
}

const styles = StyleSheet.create({
container:{

	display:"flex",
	flexDirection:"column",
	padding:10,
	backgroundColor:"white",
  justifyContent:"center",
},
  inputStyle: {
    width:'100%',
    marginBottom:10,
    borderColor: '#20232a',
    height:75,
    flexDirection:"row",
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
