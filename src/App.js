import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Navbar';
import Content from './components/Content';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Nav />
			<Content />
		</div>);
}

export default App;
