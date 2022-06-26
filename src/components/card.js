import React from "react"

export default function Card(props) {
    return(
        <div className="card">
            <img className="img" src={props.imageUrl}/>
            <div className="details">
                <span class="material-icons">pin_drop</span>
                <span className="loc">{props.location}</span>
                <span className="a"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="des">{props.description}</p>
            </div>
            
        </div>
    )
}