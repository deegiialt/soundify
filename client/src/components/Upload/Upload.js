import React from "react";
import "./Upload.css";

class Upload extends React.Component {
	state = {
		albumCover: "",
		title: "",
		artist: "",
		file: "",
		tags: "",
		description: ""
	};

	componentDidMount() {
		this.loadMusic();
	}

	loadMusic = () => {
		
	}

	render() {
		return(
			<div>
				<h1> Upload </h1>
				<section class="contact-wrap">
				  <form action="" class="contact-form">
				    <div class="col-sm-6">
				      <div class="input-block">
				        <label for=""></label>
				        <input type="text" class="form-control" placeholder="Title" name=""/>
				      </div>
				    </div>
				    <div class="col-sm-6">
				      <div class="input-block">
				        <label for=""></label>
				        <input type="text" class="form-control" placeholder="Artist"/>
				      </div>
				    </div>
				    <div class="col-sm-12">
				      <div class="input-block">
				        <label for=""></label>
				        <input type="text" class="form-control" placeholder="File"/>
				      </div>
				    </div>
				    <div class="col-sm-12">
				      <div class="input-block">
				        <label for=""></label>
				        <input type="text" class="form-control" placeholder="Tags"/>
				      </div>
				    </div>
				    <div class="col-sm-12">
				      <div class="input-block textarea">
				        <label for=""></label>
				        <textarea rows="3" type="text" class="form-control" placeholder="Description"></textarea>
				      </div>
				    </div>
				    <div class="col-sm-12">
				      <button class="square-button">Upload</button>
				    </div>
				  </form>
				</section>
			</div>			
		)
	}
	
};
export default Upload;