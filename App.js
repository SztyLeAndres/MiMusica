/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import LoginView from './src/screens/LoginView';
import HomeView from './src/screens/HomeView';
import {Actions, Scene, Router} from 'react-native-router-flux';
import ArtistDetailView from './src/screens/ArtistDetailView';

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' component={LoginView} hideNavBar/>
    <Scene key='home' component={HomeView} hideNavBar/>
    <Scene key="artistDetail" component={ArtistDetailView} title="Detalles" hideNavBar={false} />
  </Scene>
)

export default class App extends Component<Props> {
  render() {
    return (
      <Router scenes={scenes}/>
    )
  }
};
