import React, { Component } from 'react';

import { Text,
StyleSheet,
TextInput,
View,
TouchableOpacity,
BackHandler,
FlatList,
Image,
ScrollView,
CheckBox,
SwipeView,
Alert,
Modal,
Button,
Dimensions,
DrawerLayoutAndroid,
TouchableHighlight
} from 'react-native';

export default class Favourite extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
       following: false,
       userSelected:[],
      data:[

        {
            "name": "Jay",
            "emailid" : "jay@gmail.com",
            "image": require("../assets/image_four.png"),
            "isFollow":true,
        },
        {
          "name": "Barack",
          "emailid" : "barack@gmail.com",
          "image": require("../assets/image_two.jpg"), 
          "isFollow":true,
      },
      {
          "name": "Trump",
          "emailid" : "trump@gmail.com",
          "image": require("../assets/image_four.png"),
          "isFollow":true,
      },
      {
          "name": "Jullie Venture",
          "emailid" : "jullieventure12@gmail.com",
          "image": require("../assets/image_nine.png"),
          "isFollow":true,
      },
      {
          "name": "Parth",
          "emailid" : "parth@gmail.com",
          "image": require("../assets/image_eight.png"),
          "isFollow":true,
      },
      {
          "name": "Kishan",
          "emailid" : "kishan@gmail.com",
          "image": require("../assets/image_seven.png"),
          "isFollow":true,
      },
      {
          "name": "Goerage",
          "emailid" : "goerage@gmail.com",
          "image": require("../assets/image_ten.png"),
          "isFollow":true,
      },
      {
          "name": "Aarohi",
          "emailid" : "aarohi@gmail.com",
          "image": require("../assets/image_eleven.png"),
          "isFollow":true,
      },
      {
          "name": "Aarohi Patel",
          "emailid" : "aarohipatel@gmail.com",
          "image": require("../assets/image_eleven.png"),
          "isFollow":true,
    }
    ]
    };
  }
  
          
          

  updatefollow = (item,index) =>{
   var list = this.state.data;
   list[index].isFollow = !item.isFollow
   this.setState({data:list},()=>{
     console.log("data list --> " +JSON.stringify(list));
   });
  }

     renderItem({item,index}){
       return(
       <View style= {styles.inputStyle}>
         <Image source={item.image}  style={{height:60, width:60,borderRadius:30,borderColor: "#20232a",borderWidth:1}} />

          <View style={{alignItems:"center",flex:1}} >
            <Text style={{fontWeight:"bold"}}>{item.name}{"\n"}<Text style={{fontWeight:"normal"}}>{item.emailid}</Text></Text>
          </View>

          <TouchableHighlight underlayColor='#DFE1E3' onPress={() => {this.updatefollow(item,index)}} >
          {item.isFollow === true ?
            <View style={styles.followouter}>
              <Text style={{ color: '#fefefe', fontSize: 12 }}>Favourite</Text>
            </View>
           :
            <View style={styles.unfollowouter}>
              <Text style={{ color: '#36292a', fontSize: 12 }}>UnFavourite</Text>
            </View>
          }
     </TouchableHighlight>

       </View>
       );
     }

  render() {
    return (


      <ScrollView contentContainerStyle={styles.container}>

       <View style={styles.container}>


          <FlatList
          data={this.state.data}
          keyExtractor={item => item}
          renderItem={this.renderItem.bind(this)}/>
       </View>
       </ScrollView>
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
    borderColor:"#20232a",
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
