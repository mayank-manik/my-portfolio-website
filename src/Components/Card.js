import React from 'react'
import "../App.css";

export default function Card(props) {
    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
                <div className="card">
                    <img src={props.imagesrc} className="card-img-top" alt={props.title} />
                    <h3 className="mt-5 text-center">{props.title}</h3>
                </div>
            </div>
        </>
    )
}
