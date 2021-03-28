/** @format */

import React from "react";
import "./SearchRecipe.css";
import SearchIcon from "../../Assets/Icons/Icon feather-search.png";
function SearchRecipe({ searchItem, sortByStars }) {
	return (
		<div className="search-sort-btn">
			<div className="search_recipe_box">
				<img src={SearchIcon} className="search_btn" />
				<input
					onChange={(e) => searchItem(e.target.value)}
					className="search_input"
					type="text"
					placeholder="Search by Brand name..."
				/>
			</div>

			<button onClick={sortByStars} className="sort-by-stars-btn">
				Sort by stars
			</button>
		</div>
	);
}
export default SearchRecipe;
