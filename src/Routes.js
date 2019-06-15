import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Album from './Components/Album';
import AddPhoto from './Components/AddPhoto';
import DeletePhoto from './Components/DeletePhoto';
import UpdatePhoto from './Components/UpdatePhoto';

export default(
	<Switch>
		<Route exact path='/' component={ Home } />
		<Route path='/album' component={ Album } />
		<Route path='/addphoto' component={ AddPhoto } />
		<Route path='/deletephoto' component={ DeletePhoto } />
		<Route path='/updatephoto' component={ UpdatePhoto } />
	</Switch>
)