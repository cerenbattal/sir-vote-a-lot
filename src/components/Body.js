import React from 'react'
import CreatePoll from './poll/CreatePoll'
import Vote from './vote/Vote'
import Chart from './chart/Chart'

export default function Body() {
    return (
        <div className="ui three column stackable centered grid container">
            <div className="column">
                <CreatePoll />
            </div>
            <div className="column">
                <Vote />
            </div>
            <div className="column">
                <Chart />
            </div>
        </div>
    )
}
