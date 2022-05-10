import React from 'react'
import "../App.css";

export default function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="cards">
                    <div className="card">
                        <img src={props.imagesrc} alt="{props.title}"
                            className='card_img px-2 py-2' />
                        <div className="card_info">
                            <h3 className="card_title px-3 py-2">
                                {props.title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
