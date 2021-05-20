import React from 'react'
import Answer from './Answer'
import './CreatePoll.css'

export default function CreatePoll() {
    return (
        <div className="poll">
            <div className="ui fluid icon input">
                <input type="text" placeholder="Type a question..." />
            </div>
            <Answer />
            <div className="footer">
                <div className="small ui right floated button">Create</div>
                <div className="small ui right floated button">Reset</div>
                <p>0/10 possible answers</p>
            </div>
        </div>
    )
}
