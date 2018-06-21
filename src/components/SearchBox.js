import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div>
			<input className='bg-light-blue' type='search' placeholder='Search Friend' onChange = {searchChange} />
		</div>
		);
}

export default SearchBox;