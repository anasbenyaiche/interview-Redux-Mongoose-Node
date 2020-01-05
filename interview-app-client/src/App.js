import React from 'react';
import './App.css';
import UserContainer from './containers/usersContainer'
import PictureContainer from './containers/pictureContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import {  Provider } from 'react-redux'
import ContactPage from './containers/formContainer';
import store from './redux/store/store';
function App() {

  return (

    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route path='/add_user' component={ContactPage}/>
          <Route exact path='/' component={UserContainer} />
          <Route path='/user/:id/gallery' component={PictureContainer} />
        </BrowserRouter>


      </div>
    </Provider>

  );
}

export default App;
