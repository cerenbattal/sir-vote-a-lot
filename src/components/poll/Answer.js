import React from 'react'
import './Answer.css'

export default function Answer() {
    return (
        <div className="answer-form">
            <div class="fluid ui two column stackable grid container">
                <div class="column">
                    <div class="ui form">
                        <div class="field">
                            <input placeholder="Answer" type="text" />
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui button">Add</div>
                </div>
            </div>
        </div>
    )
}
