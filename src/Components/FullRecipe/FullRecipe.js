/** @format */

import React from "react";
import SearchRecipe from "../SearchRecipe/SearchRecipe";
import { Link } from "react-router-dom";
import PlayBtn from "../../Assets/Icons/Icon ionic-ios-play-circle.png";
import "./FullRecipe.css";
import LikeHeart from "../../Assets/Icons/Icon-feather-heart-color.png";
function FullRecipe(props) {
	//console.log(props);
	let localStorageData = JSON.parse(localStorage.getItem("noodle-data"));
	//console.log(props.match.params);
	let selectedRecipe = localStorageData.filter((item) => {
		return item.Variety == props.match.params.id;
	});

	return (
		<div className="full-recipe-content ">
			<Link style={{ zIndex: "999", fontWeight: "bold" }} to="/">
				&larr; Go Back
			</Link>
			<div className="full_description_column">
				<div className="column_1">
					<div className="image_overlay">
						<div className="overlay_button">
							<img src={PlayBtn} />
							<h5>Play Video</h5>
						</div>

						<img
							src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/Hakka-Noodles-2-34755e38.jpeg"
							className="col_1-img"
						/>
					</div>
					<h1>{props.match.params.id}</h1>
					<h2>Ingredients</h2>
					<p className="col-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<h2>How to prepare :</h2>
					<p className="col-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
						<br />
						<br /> It has survived not only five centuries, but also the leap
						into electronic typesetting, remaining essentially unchanged.
						<br />
						<br />
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
				</div>
				<div className="column_2">
					<span className="light_text">Rank in Top 10</span>
					<h1>{selectedRecipe[0]["Top Ten"]}/10</h1>
					<div className="star_rating">
						<button style={{ background: "#11998e" }}>
							{selectedRecipe[0].Stars}/5
						</button>
						<div className="stars">
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
							<span className="fa fa-star"></span>
						</div>
					</div>
					<span className="light_text">DESCRIPTION</span>
					<p className="col-text col_2-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<div className="three_circles">
						<span>
							8
							<br />
							Ingredients
						</span>
						<span>
							220
							<br />
							Bucks
						</span>
						<span>
							25
							<br />
							Minutes
						</span>
					</div>
					<div className="fav_section">
						<h3>FAVOURITE THIS RECIPE</h3>
						<img src={LikeHeart} alt="Heart Red" />
					</div>
					<hr className="line-seperate" />
					<span className="comment_here">ADD COMMENTS</span>
					<textarea>Type Something here...</textarea>
					<button>ADD COMMENT</button>
				</div>
			</div>
		</div>
	);
}

export default FullRecipe;
