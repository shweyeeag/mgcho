import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './App.css';
import {Player, ControlBar} from "video-react";

class Home extends Component{
	constructor(props){
		super(props);
	}

	render() {

		return(
			<div className="player">
    <Player
      playsInline
     src="/MgCho_Retro.mp4">
     <ControlBar autoHide={false} />
     </Player>
     <p> By Shwe Yee Aung </p>
    </div>

    );

	}
}
export default withRouter(Home);