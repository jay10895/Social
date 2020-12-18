import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  } from 'react-native';


import GridList from 'react-native-grid-list'

export default class Post extends Component{
    constructor(props){
        super(props);

        this.state={
        data:[
            {
                Image:require('../assets/hall.png')
            },
            {
                Image:require('../assets/Leh.png')
            },
            {
                Image:require('../assets/taj_mahal.png')
            },
            {
                Image:require('../assets/leh_ladakh.png')
            },
            {
                Image:require('../assets/Shanthi.png')
            },
            {
                Image:require('../assets/mountain.png')
            },
            {
                Image:require('../assets/grand_ladakh.png')
            },
            {
                Image:require('../assets/young.png')
            },
            {
                Image:require('../assets/Leh.png')
            },
            {
                Image:require('../assets/leh_ladakh.png')
            },
            {
                Image:require('../assets/Shanthi.png')
            },
            {
                Image:require('../assets/hall.png')
            },
        ]
    }
    }

    renderItem({item,index}){
        return(
            <View style={{backgroundColor:'white'}}>
                <Image source={item.Image} style={{width:129,height:129,marginTop:2,padding:2}}/>
            </View>
        );
    }

    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>

                    <GridList 
                    showSeparator
                    data={this.state.data}
                    numColumns={3}
                    keyExtractor={item => item}
                    renderItem={this.renderItem.bind(this)}
                    />

                </View>
            </ScrollView>
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
    } 
});