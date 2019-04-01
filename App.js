/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { authorize } from 'react-native-app-auth'

const outlookConfig = {
  clientId: '939feb62-57dd-4798-830e-4c3066ae3ed1',
  redirectUrl: 'urn:ietf:wg:oauth:2.0:oob',
  scopes: ['User.Read', 'offline_access'],
  serviceConfiguration: {
      authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
  }
}



type Props = {};
export default class App extends Component<Props> {

  authorize = async (config) => {
    try {
        const authState = await authorize(config);
        Alert.alert(authState.accessToken)
    } catch (error) {
        Alert.alert('Inloggningen misslyckades', JSON.stringify(error.message));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        style={{height: 100, width: 200, backgroundColor: 'gray', justifyContent: 'center', alignSelf: 'center'}} 
        onPress={() => this.authorize(outlookConfig)}>

          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center', alignSelf: 'center'}}>Login with outlook</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
