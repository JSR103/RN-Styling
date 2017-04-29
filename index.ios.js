/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class FlexStyle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={[styles.image, { alignSelf: 'flex-start' }]} source={require('./blackB.jpeg')}>
         <View>
          <Text style={styles.text}>
            I am using Flex
          </Text>
         </View>
        </Image>
        <Image style={[styles.image, { alignSelf: 'center' }]} source={require('./blackB.jpeg')}>
        <View>
          <Text style={styles.text}>
            For Positioning.
          </Text>
        </View>
        </Image>
        <Image style={[styles.image, { alignSelf: 'flex-end' }]} source={require('./blackB.jpeg')}>
        <View>
          <Text style={styles.text}>
            Rotate Me!
          </Text>
        </View>
      </Image>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {    flex: 1,    paddingTop: 20,    paddingBottom: 20,    justifyContent: 'space-around',    alignItems: 'center',    flexDirection: 'row-reverse',    backgroundColor: '#F5FCFF'  },  image:{    width: 100,    height: 100,    backgroundColor: 'transparent'  },  text:{    color: 'lightblue',    fontSize: 25,    alignContent: 'center'  }});


AppRegistry.registerComponent('FlexStyle', () => FlexStyle);
