import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
		return {
			searchField: state.searchRobots.searchField,
			isPending : state.fetchRobots.isPending,
			robots: state.fetchRobots.robots,
			error: state.fetchRobots.error
		}
	}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
		onFetchRobots : () => dispatch(requestRobots())
	}
}

class App extends Component {
	
	componentDidMount() {		
		this.props.onFetchRobots();
		console.log('log',this.props);
	}
	
  	render(){
  		const {robots, searchField, isPending, onSearchChange} = this.props;

  		const filteredRobos = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});

		if(isPending) {
			return <h1>Loading...</h1>
		}
		else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange = {onSearchChange}/>
					<Scroll>
						<CardList robots={ filteredRobos } />
					</Scroll>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);