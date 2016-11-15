/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as pics from '../../imgs/ImageSources';
import * as styleConst from '../../styles';

export default class HomeTab extends Component {
  render() {
    const imgSource = pics.homeGraph;
    return (
      <View style={styles.homeContainer}>
        <Image source={imgSource} style={styles.homeImage}>
          <View style={styles.homeContent}>
            <Text style={{
              fontSize: 22,
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0,0)',
              color: 'black'
            }}>2015 conference</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                    textAlign: 'center',
                    flexWrap: 'wrap',
                    fontSize: 16,
                    minWidth: 100,
                    maxWidth: 200,
                    minHeight: 300,
                    maxHeight: 350,
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: 'black'
              }}>
              Join 500 creative and brilliant minds from art colleges around world.
              </Text>
            </View>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  homeImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 60,
  },
  homeContent: {
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  homeTagline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  homeInfo: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black'
  }
});