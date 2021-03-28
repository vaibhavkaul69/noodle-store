/** @format */

import React, { Component } from "react";
import PostRecipe from "./PostRecipe/PostRecipe";
import RecipeSectionHeading from "./RecipeSectionHeading/RecipeSectionHeading";
import SearchRecipe from "./SearchRecipe/SearchRecipe";
import axios from "axios";
class Container extends Component {
	state = {
		recipeList: null,
		images: [],
	};
	componentDidMount() {
		fetch(
			"https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({
					recipeList: res,
				});
				setTimeout(() => {
					localStorage.setItem("noodle-data", JSON.stringify(res));
				}, 1000);
				return fetch(
					"https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json"
				)
					.then((item) => item.json())
					.then((newItem) => {
						this.setState({
							images: newItem,
						});
					});
			})
			.catch((err) => console.log(err));
	}
	searchItem = (val) => {
		const noodleData = this.state.recipeList;
		const searchData = noodleData.filter((item) => {
			console.log(item, val);
			if (item.Brand.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
				return item;
			}
		});
		console.log(searchData);
		if (val.length == 0) {
			this.setState({
				recipeList: JSON.parse(localStorage.getItem("noodle-data")),
			});
		} else {
			this.setState({
				recipeList: searchData,
			});
		}
	};
	render() {
		return (
			<div className="main-content">
				<SearchRecipe searchItem={this.searchItem} />
				<RecipeSectionHeading />
				<div className="recipe_list_container">
					<PostRecipe
						recipeList={this.state.recipeList}
						images={this.state.images}
					/>
				</div>
			</div>
		);
	}
}

export default Container;
