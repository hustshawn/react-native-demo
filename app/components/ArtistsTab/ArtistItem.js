import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
} from 'react-native';

import * as pics from '../../imgs/ImageSources';
import * as styleConst from '../../styles';

export default class ArtistItem extends Component {

  render() {
    const { artist } = this.props;
    const imgSource = pics.avatars[artist.shortname];
    return (
      <View 
        style={styles.container}>
        <View
          style={styles.textWrapper}>
          <Image source={imgSource}/>
          <Text style={styles.name}>{artist.name}</Text>
          <Text style={styles.reknown}>{artist.reknown}</Text>
          <Text style={styles.bio}>{artist.bio}</Text>  
        </View>      
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60
  },
  textWrapper: {
    marginTop: 10,
    borderTopWidth:1,
    padding:20,
    borderColor: styleConst.borderColor
  },
  name: {
    fontSize: 16
  },
  reknown: {
    fontSize: 20,
    fontWeight: 'bold',
    color: styleConst.inAppFontColor
  },
  bio: {
    fontSize: 14,
    color: styleConst.bioFontColor
  }
})