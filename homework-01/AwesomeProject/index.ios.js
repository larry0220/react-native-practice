import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS
} from 'react-native';

import Featured from './src/Featured';
import Search from './src/Search';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <TabBarIOS selectedTab={selectedTab === 'featured'}>
        <TabBarIOS.Item
          selected={selectedTab === 'featured'}
          systemIcon="featured"
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            });
          }}>
          <Featured />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={selectedTab === 'search'}
          systemIcon="search"
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
          <Search />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => BookSearch);
