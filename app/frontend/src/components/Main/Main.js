import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Search from '../../pages/Search/Search';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/search' component={Search}></Route>
      <Route exact path='/orders' component={Search}></Route>
      <Route exact path='/settings' component={Search}></Route>
      <Route exact path='/cart' component={Search}></Route>
      <Route exact path='/login' component={Search}></Route>
      <Route exact path='/register' component={Search}></Route>
    </Switch>
  );
}

export default Main;