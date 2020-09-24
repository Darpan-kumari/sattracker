import React from "react";
import axios from "axios";
import "./Button.css";
import "../App.css";
import Display from "./Display";
import "./MainSection.css";

class MainSection extends React.Component {
    constructor() {
    super();
    this.state = { lat: "", long: "", sat: [] };
    }
    handleFetchLocation = (event) => {
    event.preventDefault();
    const getLocation = () => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(findPosition);
        } else {
        alert("Geolocation is not supported by this browser.");
        }
    };

    const findPosition = (position) => {
        this.setState({ lat: position.coords.latitude, long: position.coords.longitude });
        axios
        .get(`https://www.n2yo.com/rest/v1/satellite/above/${this.state.lat}/${this.state.longitude}/0/50/18/&apiKey=CQUYEF-XWFGJJ-HH35R2-4I8Y`)
        .then((res) => {
            this.setState({ sat: res.data.above });
            //console.log(this.state.sat);
        });
    };
    getLocation();
    };
    render() {
    return (
        <div className="main-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1> Find Nearest Satellites!</h1>
        <div className="main-btns">
            {/* <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
            Let's Look! <i className=" far fa-arrow-alt-circle-right" />
          </Button> */}
            <button className={`btn btn--primary btn--large btn--outline`} onClick={this.handleFetchLocation}>
            Find
            </button>
            <Display sat={this.state.sat} />
        </div>
        </div>
    );
    } 
}

export default MainSection;
