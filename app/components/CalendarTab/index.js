import React, { Component, PropTypes } from 'react';
import {
  NavigatorIOS,
} from 'react-native';
import SearchBar from 'react-native-search-bar';

import CalendarList from './CalendarList'
import * as pics from '../../imgs/ImageSources'
import * as styleConst from '../../styles';

export default class CalendarTab extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{ 
          component: CalendarList,
          title: 'Calendar'
        }}
        barTintColor={styleConst.appColor}
        tintColor="snow"
        interactivePopGestureEnabled={true}
        translucent={true}
        titleTextColor="snow"
        style={{ flex: 1,}}
      />
    )
  }
}


