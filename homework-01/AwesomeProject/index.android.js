import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet
} from 'react-native';

import SearchBooks from './src/SearchBooks';

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1) {
    return false;
  }

  _navigator.pop();
  return true;
});

class BookSearch extends Component {
  renderScene(route, navigator) {
    _navigator = navigator;

    let RouteComponent = route.component;
    return (
      <RouteComponent
        navigator={navigator}
        {...route.passProps} />
    );
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ component: SearchBooks }}
        renderScene={this.renderScene} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('AwesomeProject', () => BookSearch);
