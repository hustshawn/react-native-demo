'use strict';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView,
  Image,
} from 'react-native';
import SearchBar from 'react-native-search-bar';

import data from '../../data';
import ArtistItem from './ArtistItem';
import * as pics from '../../imgs/ImageSources';
import * as styleConst from '../../styles';


export default class Artists extends Component {

  constructor(props) {
    super(props);
    const artists = data.artists;
    console.log(artists)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      dataSource: ds.cloneWithRows(artists)
    }

  }
  render () {
    console.log(this.props)
    console.log(this.state)
    return (
      <View>
        <SearchBar
          style={searchBarStyles.container}
          ref='searchBar'
          placeholder='Search'
          onChangeText={(e) => this._handleChangeText(e)}
          onSearchButtonPress={(text) => this._handleSearchButtonPress(text)}
          onCancelButtonPress={(e) => this._handleCancelButtonPress(e)}
         />
        <ListView 
          dataSource={this.state.dataSource}
          automaticallyAdjustContentInsets={false}
          renderRow={(rowData) => this._renderRow(rowData)}
        />
      </View>
    )
  }

  _renderDetailView(artist) {
    this.props.navigator.push({
      component: ArtistItem,
      title: artist.name,
      passProps: {'artist': artist}
    });
  }

  _renderRow(artist) {

    const imgSource = pics.avatars[artist.shortname];
    return (
      <TouchableHighlight 
        onPress={() => this._renderDetailView(artist)}
        underlayColor="#ddd"
        style={styles.container}>
        <View style={styles.row}>
          <Image style={styles.thumb} source={imgSource}/>
          <View style={styles.texts}>
            <Text style={styles.name}>{ artist.name }</Text>
            <Text style={styles.reknown}>{artist.reknown}</Text>
            <Text style={styles.bio}>{artist.bio}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const searchBarStyles = StyleSheet.create({
  container: {
    marginTop: 60,
    height: 50,
    width: styleConst.width,
  }
});


const styles = StyleSheet.create({
    container: {
    borderBottomColor: styleConst.borderColor,
    borderBottomWidth: 1
  },
  row: {
    flexDirection: 'row',
    margin: 10
    // paddingRight: 20
  },
  thumb: {
    flex: 0.25,
    width: 80,
    height: 80,
    borderRadius: 10
  },
  texts: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'normal'
  },
  reknown: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: styleConst.inAppFontColor
  },
  bio: {
    fontSize: 14,
    color: styleConst.bioFontColor,
    overflow: 'visible'
  }
});