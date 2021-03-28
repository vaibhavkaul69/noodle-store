/** @format */

import React from "react";
import "./PostRecipe.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import LikeBtn from "../../Assets/Icons/Icon feather-heart.png";
import time from "../../Assets/Icons/Icon feather-clock.png";
function PostRecipe({ recipeList, images }) {
	console.log(images);
	if (recipeList) {
		//console.log(recipeList);
		return recipeList.map((recipeItem) => {
			return (
				<div className="recipe_item_list" key={recipeItem.id}>
					<div className="overlay">
						<Link to="/">View More</Link>
						<Link to={"/" + recipeItem.Variety}>Quick View</Link>
					</div>
					<h3 className="recipe_list_category">In {recipeItem.Brand}</h3>
					<img
						src={
							images[parseInt(Math.random() * 7)]
								? images[parseInt(Math.random() * 7)].Image
								: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexee3e8a8.jpeg"
						}
						className="recipe_list_image"
					/>
					<div className="recipe_list_description">
						<h1></h1>
						<div className="recipe_list_header">
							<div className="recipe_name_time">
								<h2 className="recipe_list_name">{recipeItem.Variety}</h2>
								<h3 className="star-rating">
									{isNaN(recipeItem.Stars) ? 5 : recipeItem.Stars} &#9733;
								</h3>
							</div>
							<img src={LikeBtn} alt="Like the recipe" />
						</div>
						<p className="recipe_list_data">{recipeItem.description}</p>
					</div>
				</div>
			);
		});
	} else {
		console.log(recipeList);
		return <Loader />;
	}
}
export default PostRecipe;
