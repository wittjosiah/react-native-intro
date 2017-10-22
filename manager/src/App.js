import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBAvDtQ04X4wJmQgGHo2m69p_QJlOB-Rf8',
      authDomain: 'manager-90bac.firebaseapp.com',
      databaseURL: 'https://manager-90bac.firebaseio.com',
      projectId: 'manager-90bac',
      storageBucket: 'manager-90bac.appspot.com',
      messagingSenderId: '455811466815'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
        <View>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
