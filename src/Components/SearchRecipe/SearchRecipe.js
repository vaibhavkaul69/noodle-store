/** @format */

import React from 'react';
import './SearchRecipe.css';
import SearchIcon from '../../Assets/Icons/Icon feather-search.png';
function SearchRecipe() {
	return (
		<div className='search_recipe_box'>
			<img src={SearchIcon} className='search_btn' />
			<input
				className='search_input'
				type='text'
				placeholder='Search your favourite recipe...'
			/>
		</div>
	);
}
export default SearchRecipe;
