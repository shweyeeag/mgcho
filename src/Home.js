import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Player} from "video-react";

class Home extends Component{
	constructor(props){
		super(props);
	}

	render() {

		return(
    <Player
      playsInline
     src="/MgCho_Retro.mp4"
    />

    );

	}
}
export default withRouter(Home);