import React from "react";
import "./Upload.css";
import API from "../../utils/API";

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
	};

	loadMusic = () => {
		API.getUploads()
		.then(res => 
			this.setState({ albumCover: "", title: "", artist:"", file:"", tags:"", description:""})
			)
			.catch(err => console.log(err));
	};

	render() {
		return(
			<div>
				<h1 className="uploadHeader"> Upload </h1>
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
				<div className="uploadAlbumArt">
					<div className="btn uploadArtButton">Upload Image</div>
				</div>
			</div>			
		)
	}
	
};
export default Upload;