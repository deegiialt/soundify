import React from "react";
import "./Player.css";
import ReactPlayer from 'react-player';

const Player = props => (
	<div>
	<div className="row">
		<div className="col-md-12">
			<div className="player-container">
			  <div className="square">
				<img className="cd" src="https://www.dropbox.com/s/q79oj13hkztaoj2/cd.png?raw=1" alt="cdimage" /> 
			    <p className="title"> Example {props.title} </p> 
			    <p className="sub"> Example {props.sub} </p>
			    <div className="run"></div>
			    <div className="play"></div>
			    <div className="playbtn"><a href="https://soundcloud.com/jaykode/shelter-jaykode-remix"><img alt="pause" className="pause" src="https://www.dropbox.com/s/ozu8vunv3da8zfg/play%20btn.png?raw=1" /></a></div>
			    <div className="forward"><img className="ff" src="https://www.dropbox.com/s/sb2nkjffzkjmnqx/forward.png?raw=1" alt="forward" /></div>
			    <div className="back"><img className="ff" src="https://www.dropbox.com/s/elkr56m7av551am/back.png?raw=1" alt="back"/></div>
			    <p className="time">2:31</p>
			    <p className="end">-0:43</p>
			    <div className="buttonContainer">
			    	<div className="glyphicon glyphicon-heart-empty icons btn" />
			    	<div className="glyphicon glyphicon-retweet icons btn" />
			    	<div className="glyphicon glyphicon-plus icons btn" />
			    	<div className="glyphicon glyphicon-save icons btn" />

			    </div>
			  </div>

			</div>
		</div>
	</div>
	<div className="row soundcloud-row">
		<div className="col-md-2"></div>
		<div className="col-md-8">
			<ReactPlayer 
				url="https://soundcloud.com/jaykode/shelter-jaykode-remix"
				height="150px"
				width="800px"
				controls
			/>
		</div>
		<div className="col-md-2"></div>
	</div>
	</div>
);
export default Player;