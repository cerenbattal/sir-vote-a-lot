import React from 'react'
import './Answer.css'

export default function Answer() {
    return (
        <div className="answer-form">
            <div className="ui disabled fluid icon input">
                <input type="text"/>
                <i className="circular close link icon"></i>
            </div>
            <div className="ui fluid icon input">
                <input type="text" placeholder="Type an answer" />
                <i className="circular plus link icon"></i>
            </div>
        </div>
    )
}
