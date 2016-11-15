import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView,
  NavigatorIOS,
  Image,
} from 'react-native';
import * as styleConst from '../../styles';
import * as pics from '../../imgs/ImageSources';
 

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    const { schedule } = this.props ;
    console.log("SCHEDULE ARRAY", schedule)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      dataSource: ds.cloneWithRows(schedule)
    }
  }

  _renderRow(rowData) {
    const imgSource = pics.avatars[rowData.shortname];
    let avatar = null;
    let artist = null;
    if (rowData.shortname) {
      avatar = <Image source={imgSource} style={styles.scheduleAvatar} />

    }
    if (rowData.artist) {
      artist = <Text style={styles.scheduleArtist}>{rowData.artist ? 'with ' + rowData.artist : ''}</Text>

    }
    return (
      <TouchableHighlight >
        <View style={styles.schedule}>
          {avatar}
          <View style={styles.scheduleContent}>
            <Text style={styles.scheduleTime}>{rowData.time}</Text>
            <Text style={styles.scheduleTitle}>{rowData.title}</Text>
            {artist}
            <Text style={styles.scheduleDescrip}>{rowData.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this._renderRow(rowData)}
      />
    )
  }
}

const styles = StyleSheet.create({
  schedule: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 54,
  },
  scheduleAvatar: {
    flex: 0.25,
    marginLeft: 16,
    marginTop: 16,
    width: 40,
    height: 40,
    borderRadius: 20
  },
  scheduleContent: {
    paddingLeft: 16
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 2
  },
  scheduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#417D9A'
  },
  scheduleArtist: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight: "500"
  },
  scheduleDescrip: {
    color: '#666',
    fontSize: 15,
    marginBottom: 2
  }
})
