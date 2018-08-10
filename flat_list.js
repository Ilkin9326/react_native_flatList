import * as React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text,FlatList } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }
  
  renderItem = ({ item }) => {
    return (
      <View>
            <Text>
              {item.name}
            </Text>
            <Text>
              {item.code}
            </Text>
      </View>
      )
  }

  componentDidMount(){
    const url = 'ozunuzun json fileniz'
    
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          dataSource: responseJson.countries
        })
      })
          
      
     .catch((error) => {
       console.log(error)
     })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
  
});
