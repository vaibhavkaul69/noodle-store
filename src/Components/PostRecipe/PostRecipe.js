/** @format */

import React from 'react';
import './PostRecipe.css';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import img1 from '../../Assets/Images/Img1.jpg';
import img2 from '../../Assets/Images/Img2.jpg';
import img3 from '../../Assets/Images/Img3.jpg';
import img4 from '../../Assets/Images/Img4.jpg';
import img5 from '../../Assets/Images/Img5.jpg';
import img6 from '../../Assets/Images/Img6.jpg';
import img7 from '../../Assets/Images/Img7.jpg';
import img8 from '../../Assets/Images/Img8.jpg';
import LikeBtn from '../../Assets/Icons/Icon feather-heart.png';
import time from '../../Assets/Icons/Icon feather-clock.png';
function PostRecipe({ recipeList }) {
	const arrayImages = [img1, img2, img3, img4, img5, img6, img7, img8];
	console.log(recipeList);
	if (recipeList) {
		console.log(recipeList);
		return recipeList.map((recipeItem) => {
			return (
				<div className='recipe_item_list' key={recipeItem.id}>
					<div className='overlay'>
						<Link to='/'>View More</Link>
						<Link to={'/' + recipeItem.id}>Quick View</Link>
					</div>
					<h3 className='recipe_list_category'>In {recipeItem.category}</h3>
					<img
						src={recipeItem.image}
						id={recipeItem.id}
						className='recipe_list_image'
						alt={recipeItem.name}
					/>
					<div className='recipe_list_description'>
						<h1></h1>
						<div className='recipe_list_header'>
							<div className='recipe_name_time'>
								<h2 className='recipe_list_name'>{recipeItem.name}</h2>
								<div>
									<img src={time} alt='Duration for Preparing' />
									<span className='time_duration'>
										{parseInt(Math.random() * 50)} mins
									</span>
								</div>
							</div>
							<img src={LikeBtn} alt='Like the recipe' />
						</div>
						<p className='recipe_list_data'>{recipeItem.description}</p>
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
