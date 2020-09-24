import React from "react";

class Display extends React.Component {
    render() {
    return (
        <div>
        {this.props.sat.map((sat) => (
            <div key={sat.satid}>
            satellite ID : {sat.satid}
            <br></br>
            sat name: {sat.satname}
            <br></br>
            int Designator: {sat.intDesignator}
            <br></br>
            launch Date: {sat.launchDate}
            <br></br>
            sat lat: {sat.satlat}
            <br></br>
            sat lng: {sat.satlng}
            <br></br>
            sat alt: {sat.satalt}
            <br></br>
            <hr></hr>
            </div>
        ))}
        </div>
    );
    }
}
export default Display;
