import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { _HomeScreen } from './src/screens/HomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { _NoticeScreen } from './src/screens/NoticeScreen';
import { _ProfileScreen } from './src/screens/ProfileScreen';
import { _LoginScreen } from './src/screens/LoginScreen';


const switchNavigator = createSwitchNavigator({

    landingStack: {
      screen: createStackNavigator({
        Landing: _LoginScreen,
        // search address screen
      },{
        defaultNavigationOptions: {
          headerShown: false
        }
      }),

    },

    homeStack:  createBottomTabNavigator({

      // Home tab Icon
      Inicio: {
        screen: createStackNavigator({
          HomePage: _HomeScreen,
          NoticePage: _NoticeScreen,
        },{
          defaultNavigationOptions: {
            headerShown: false
          }
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/inicio2.png') : require('./src/images/inicio.png') 
            return <Image source={icon} style={styles.tabIcon} />
          },

        }
      },

      // Home tab Icon
      Eventos: {
        screen: createStackNavigator({
          EventPage: _HomeScreen //
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/eventos2.png') : require('./src/images/eventos.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },

       // Home tab Icon
       Notificación: {
        screen: createStackNavigator({
          LoginPage: _LoginScreen
        }, {
          defaultNavigationOptions: {
            headerShown: false
          }
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/noti1.png') : require('./src/images/noti.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },
       // Home tab Icon
       Perfil: {
        screen: createStackNavigator({
          ProfilePage:_ProfileScreen,
        },
        {
          headerMode: 'none',
        }
        ),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/user1.png') : require('./src/images/user.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      }

     }, {
       tabBarOptions: {
        activeTintColor :'#01477E',
        inactiveTintColor :'white',
        style: {
          height: 63,
        },
        tabStyle: {
          height: 63,
          backgroundColor: '#005F9B',
        },
       }
     })



});


const AppNavigation = createAppContainer(switchNavigator);
 
export default function App() {
  return (
      <AppNavigation />
  );
}

const styles = StyleSheet.create({
   tabIcon: {
     width: 30,
     height: 30
   }
});
