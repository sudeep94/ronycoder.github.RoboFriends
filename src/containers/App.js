import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			//robots: robots,
			robots: [],
			searchField : ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(user => this.setState({robots: user}))
	}

	onSearchChange = (event) => {
		//this.state.searchField = event.target.value;
		this.setState({searchField : event.target.value});
		//console.log(this.state.robots);

		const filteredRobos = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});
		//console.log(filteredRobos);
	}

  	render(){
  		const filteredRobos = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});

		if(this.state.robots.length === 0) {
			return <h1>Loading...</h1>
		}
		else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList robots={ filteredRobos } />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;