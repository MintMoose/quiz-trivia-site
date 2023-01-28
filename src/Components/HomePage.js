import React from 'react'

export default function HomePage(props) {
    return(
        <div className="homepage-div">
            <h2>Quizzical</h2>
            <h4>Some description if needed</h4>
            <button onClick={props.hideHomePageRequest} className="colour--button">Start quiz</button>
        </div>
    )
}