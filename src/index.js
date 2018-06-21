import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import Hello from './Hello';
import Card from './components/Card';
import CardList from './components/CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello greetings = 'Hello React Ninja'/>, document.getElementById('root'));
ReactDOM.render(<App/>, 
	document.getElementById('root'));
registerServiceWorker();
