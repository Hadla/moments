import React, { Component } from 'react';
import './App.css';
import './pages/SignInPage';
import { PrivateRoute } from './PrivateRoute';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddMoment from './pages/AddMoment';
import firebaseApp from './firebase';
import CreateCollection from './pages/CreateCollection';
import { setCollectionsAction, userActions } from './actions';

class App extends Component {

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((state) => {
      this.props.store.dispatch({
        type: userActions.SET_LOGIN_INFO_ACTION,
        payload: {
          email: state.email,
          userId: state.uid,
        },
      });

      firebaseApp
        .database()
        .ref(`users/${state.uid}`)
        .on('value', (snap) => {
          this.props.store.dispatch({
            type: userActions.SET_USER_INFO_ACTION,
            payload: {
              name: snap.val().name,
            },
          });
        });
        this.props.store.dispatch(setCollectionsAction());
        // firebaseApp
        // .database()
        // .ref(`collections/${state.uid}`)
        // .on('value', (snap) => {
        //   const allCollections = [];
        //   snap.forEach((childSnap) => {
        //     allCollections.push({
        //       id: childSnap.key,
        //       ...childSnap.val()
        //     });
        //     this.props.store.dispatch({
        //       type: collectionActions.SET_COLLECTIONS_ACTION,
        //       payload: allCollections,
        //     })
        //   });
        //   // console.log('COLLECTIONS:', snap.val(), "KEYYYYY: ", snap.key);
        //   console.log('Object? App.js:', allCollections);
        // })

    });
  }
  render() {
    return (
      <section>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/sign-in' component={SignInPage} />
              <Route exact path='/sign-up' component={SignUpPage} />
              <PrivateRoute exact path='/home' component={Home} />
              <PrivateRoute exact path='/add-moment' component={AddMoment} />
              <PrivateRoute exact path='/create-collection' component={CreateCollection} />
            </Switch>
          </BrowserRouter>
        </div>
      </section>
    );
  }
}

export default App;
