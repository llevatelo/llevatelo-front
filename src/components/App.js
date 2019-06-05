import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Ads from '../pages/Ads';
import Bookmark from '../pages/Bookmark';
import ChangePassword from '../pages/ChangePassword';
import SoldItems from '../pages/Solditems';
import Messages from '../pages/Messages';
import ItemDetail from '../pages/ItemDetail';


function App() {
  return (
    <BrowserRouter>      
      <Switch>
          <Route exact path="/home" component={ Home } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/my-ads" component={ Ads } />
          <Route exact path="/bookmarks" component={ Bookmark } />
          <Route exact path="/change-password" component={ ChangePassword } />
          <Route exact path="/sold-items" component={ SoldItems } />
          <Route exact path="/messages" component={ Messages } />
          <Route exact path="/details" component={ ItemDetail } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
