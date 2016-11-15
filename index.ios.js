/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeTab from './app/components/HomeTab';
import ArtistsTab from './app/components/ArtistsTab';
import CalendarTab from './app/components/CalendarTab';
import * as pics from './app/imgs/ImageSources';
import * as styleConst from './app/styles';


export default class rnapp extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      selectedTab: 'home',
      notifiCount: 0,
      presses:0
    };
  }

  _renderContent() {

    switch(this.state.selectedTab) {
      case 'home': {
        return <HomeTab />
      }
      case 'artists': {
        return <ArtistsTab />
      }
      case 'calendar': {
        return <CalendarTab />
      }
      default:
        return <HomeTab />
    }

  }

  render() {

    const {TabBarItem} = Icon;
    return (
      <TabBarIOS
        unselectedTintColor="snow"
        tintColor="white"
        tanslucent={true}
        barTintColor={styleConst.appColor}>

        <TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home'
            })
          }}>
            {this._renderContent()}
        </TabBarItem>
        <TabBarItem
          title="Artists"
          iconName="ios-people-outline"
          selectedIconName="ios-people"
          selected={this.state.selectedTab === 'artists'}
          onPress={ () => {
            this.setState({
              selectedTab: 'artists',
              notifCount: this.state.notifCount + 1
            })
          }}
        >
          {this._renderContent()}          
        </TabBarItem>
        <TabBarItem
          title="Calendar"
          iconName="ios-calendar-outline"
          selectedIconName="ios-calendar"
          selected={this.state.selectedTab === 'calendar'}
          onPress={ () => {
            this.setState({
              selectedTab: 'calendar',
              presses: this.state.presses + 1
            })
          }}
        >
          {this._renderContent()}          
        </TabBarItem>

      </TabBarIOS>
    )
  }
}


AppRegistry.registerComponent('rnapp', () => rnapp);
