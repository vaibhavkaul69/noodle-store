/** @format */

import React, { Component } from 'react';
import PostRecipe from './PostRecipe/PostRecipe';
import RecipeSectionHeading from './RecipeSectionHeading/RecipeSectionHeading';
import SearchRecipe from './SearchRecipe/SearchRecipe';
import axios from 'axios';
class Container extends Component {
	state = {
		recipeList: null,
	};
	componentDidMount() {
		axios
			.get('http://starlord.hackerearth.com/recipe')
			.then((res) => {
				console.log(res.data);
				this.setState({
					recipeList: res.data,
				});
				localStorage.setItem('recipe-list-data', JSON.stringify(res.data));
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div className='main-content'>
				<SearchRecipe />
				<RecipeSectionHeading />
				<div className='recipe_list_container'>
					<PostRecipe recipeList={this.state.recipeList} />
				</div>
			</div>
		);
	}
}

export default Container;
