'use strict';

import React, {Component} from 'react'
import {
  NavigatorIOS,
} from 'react-native';

import Artists from './Artists'
import * as styleConst from '../../styles'


export default class ArtistsTab extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{ 
          component: Artists,
          title: 'Artists'
        }}
        barTintColor={styleConst.appColor}
        tintColor="snow"
        interactivePopGestureEnabled={true}
        translucent={true}
        titleTextColor="snow"
        style={{ flex: 1, backgroundColor: styleConst.facebookBlue}}
      />
    )
  }
}

