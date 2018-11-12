import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './screen/home';
import {Heroes} from './screen/heroes';
import {Settings} from './screen/setting';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: 'red',
    activeBackgroundColor: 'blue',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'black',
    },

    labelStyle: {
      fontSize: 10,
      color: '#fff',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}