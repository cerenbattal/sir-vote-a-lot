import React from 'react'
import Answer from './Answer'
import './CreatePoll.css'

export default function CreatePoll() {
    return (
        <div className="poll">
            <div class="ui fluid icon input">
                <input type="text" placeholder="Type a question..." />
            </div>
            <Answer />
        </div>
    )
}
