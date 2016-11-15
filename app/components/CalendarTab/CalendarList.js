import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS,
  RefreshControl,
  TextInput,
} from 'react-native';
import SearchBar from 'react-native-search-bar';
import Schedule from './Schedule';
import * as styleConst from '../../styles';
import data from '../../data';

export default class CalendarList extends Component {

  constructor(props) {
    super(props);
    const calendar = data.calendar;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      searchText: null,
      dataSource: ds.cloneWithRows(calendar)
    }

  }
  _renderRow(rowData) {
    let dayHighlight = null;
    let schedule = null;

    if (rowData.title && rowData.description) {
      dayHighlight = (
        <View style={styles.calendarDayHighlight}>
          <Text style={styles.calendarTitle}>{rowData.title}</Text>
          <Text style={styles.calendarDescrip}>{rowData.description}</Text>          
        </View>
      )
    }

    if(!this.state.searchText) {
      schedule = <Schedule schedule={rowData.schedule}/>
    } 
    console.log("RUN RENDER ROW")
    return (

      <View>
        <Text style={styles.calendarDivider}>{rowData.weekday}</Text>
        {dayHighlight}
        {schedule}
      </View>
    )
  }

  _handleChangeText(text) {
    console.log("CHANGE", text)
    console.log(typeof text, text.length)

    this.setState({
      searchText: text.length > 0 ? text: null
    })
  }

  _handleSearchButtonPress(text) {
    console.log("PRESS", text)
    this.setState({
      searchText: text
    })
  }

  _handleCancelButtonPress(e) {
    console.log("CANCEL", e)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("CURRENT", this.state.searchText)
    console.log("NEXT", nextState.searchText)
    let val = (!this.state.searchText && nextState.searchText)
      || (this.state.searchText && !nextState.searchText)
    console.log("VAL: ", val)
    return val
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <SearchBar
          style={searchBarStyles.container}
          ref='searchBar'
          placeholder='Search'
          onChangeText={(e) => this._handleChangeText(e)}
          onSearchButtonPress={(text) => this._handleSearchButtonPress(text)}
          onCancelButtonPress={(e) => this._handleCancelButtonPress(e)}
          />

          <ListView
            style={{
            }}
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.dataSource}
            // refreshControl={
            //   <RefreshControl 
            //     refreshing={this.state.refreshing}
            //     onRefresh={() => {
            //       this.setState({
            //         refreshing: true,
            //         dataSource: {...this.state.dataSource}
            //       })
            //     }}
            //   />
            // }
            renderRow={(rowData) => this._renderRow(rowData)}
          />

      </View>

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
  calendarBlock: {
    flex: 1,
  },
  calendarDivider: {
    backgroundColor: '#EEE8D6',
    paddingTop: 8,
    paddingBottom: 8,
    minHeight: 30,
    color: '#222',
    padding: 16,
    zIndex: 2,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "#ddd"
  },
  calendarDayHighlight: {
    // backgroundColor: '#9EC6DE',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderTopWidth: 20,
    borderTopColor: '#417D9A',
    padding: 16
  },
  calendarTitle: {
    color: '#417D9A',
    fontSize: 32,
    fontWeight: '200'
  },
  calendarDescrip: {
    color: '#444',
    fontSize: 16,
    fontWeight: 'normal',
  }
})