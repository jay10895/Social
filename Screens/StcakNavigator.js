import React, {Component} from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplachScreen from 'react-native-splash-screen';

import About from '../Screens/About';
import ChangePassword from '../Screens/ChangePassword';
import EditProfile from '../Screens/EditProfile';
import Favourite from '../Screens/Favourite';
import Followers from '../Screens/Followers';
import Following from '../Screens/Following';
import ForgotPassword from '../Screens/ForgotPassword';
import Home from '../Screens/Home';
import Import from '../Screens/Import';
import Like from '../Screens/Like';
import Login from '../Screens/Login';
import Message from '../Screens/Message';
import People from '../Screens/People';
import Post from '../Screens/Post';
import Profile from '../Screens/Profile'
import Recent from '../Screens/Recent';
import Settings from '../Screens/Settings';
import SignUp from '../Screens/SignUp';
import Splash from '../Screens/Splash';
import UserProfile from '../Screens/UserProfile';
import ChatScreen from '../Screens/ChatScreen';
import Flag from '../Screens/Flag';


class Headericon extends Component{
  render(){
    return(
      <View>
        <Image source={require("../assets/placeholder.png")} style={{height:30, width:30, marginRight:20}}/>
      </View>
    );
  }
}

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return 'Recent';
    case 'Like':
      return 'Follow';
    case 'Message':
      return 'Message';
    case 'Profile':
      return 'My Profile';
  }
}

const MainStackNavigator = ({navigation}) =>  {
  return (
        <Stack.Navigator  > 
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={Login} options={{title:'Login',headerLeft:null,
          headerStyle:{
            backgroundColor:"white",
            borderBottomWidth:1,
            borderBottomColor:"gray"
          },
          headerTitleStyle:{
            alignSelf:"center"
          },

          }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ title:'SignUp',
          headerStyle:{
            backgroundColor:"white",
            borderBottomWidth:1,
            borderBottomColor:"gray"
          },
          headerTitleStyle:{
            alignSelf:"center",
            marginEnd:50
          },
         }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{title:'ForgotPassword',
          headerStyle:{
            backgroundColor:"white",
            borderBottomWidth:1,
            borderBottomColor:"gray"
          },
          headerTitleStyle:{
            alignSelf:"center",
            marginEnd:50
          },
           }} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} options={{title:'ChangePassword',
          headerStyle:{
            backgroundColor:"white",
            borderBottomWidth:1,
            borderBottomColor:"gray"
          },
          headerTitleStyle:{
            alignSelf:"flex-start",
            
          },
           }} /> 
          <Stack.Screen name="EditProfile" component={EditProfile} options={{title:'EditProfile',
          headerStyle:{
            backgroundColor:"white",
            borderBottomWidth:1,
            borderBottomColor:"gray"
          },
          headerTitleStyle:{
            alignSelf:"flex-start",
            
          },
           }} />       
          <Stack.Screen name="Recent" component={Recent} /*options={({route})=>
          ({headerTitle:getHeaderTitle(route),headerLeft:null})}*/  
          options={{headerShown:false}}/>

          <Stack.Screen name="Home" component={Home}  />

          <Stack.Screen name="Like" component={Like} options={{headerShown:false}} />
          <Stack.Screen name="Import" component={Import} options={{headerShown:false}} />
          <Stack.Screen name="Message" component={Message} options={{headerShown:false}} />
          
          <Stack.Screen name="Profile" component={Profile} options={{headerShown:false,
            headerRight: ()=> <NavigationDrawerStructure navigationProps={navigation} />,}} />
          
          <Stack.Screen name="Favourite" component={Favourite} options={{title:'Favourite'}} />
          <Stack.Screen name="Followers" component={Followers} options={{title:'Followers'}} />
          <Stack.Screen name="Following" component={Following} options={{title:'Following'}} />
          <Stack.Screen name="Post" component={Post} options={{title:'Post'}} />
          <Stack.Screen name="About" component={About} options={{title:'About'}} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="People" component={People} />
          <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}}/>
          <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Flag" component={Flag} options={{headerShown:false}}/>

        </Stack.Navigator>    
  );
  
}

const SettingsStackNavigator=({navigation}) =>{
  return(
  <Stack.Navigator >
  <Stack.Screen name="Settings" component={Settings} options ={{
            title: "Settings",
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle:{
              backgroundColor:"#20639B" 
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
          },
            
        }}   />
</Stack.Navigator>
);
}

const PeopleStackNavigator=({navigation}) =>{
  return(
  <Stack.Navigator >
  <Stack.Screen name="People" component={People} options ={{
            title: "People",
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle:{
              backgroundColor:"#20639B" 
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
          },
            
        }}   />
</Stack.Navigator>
);
}

export {MainStackNavigator,PeopleStackNavigator,SettingsStackNavigator,/*NavigationDrawerStructure*/} ;
