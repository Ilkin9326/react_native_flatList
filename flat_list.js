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
<<<<<<< HEAD
    const url = ''
=======
    const url = 'ozunuzun json fileniz'
>>>>>>> b0b493225b023c4111a39d2441cf4efb9f83ba83
    
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
	    <View style={styles.txtCity}>
           <Text style={{color:"#2366b5", fontWeight: "bold"}}>Şəhərlər</Text>
        </View>

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
  },
  txtCity: {
    width: 100 + "%",
    height: 56,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  
});
