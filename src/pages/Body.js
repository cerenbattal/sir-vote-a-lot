import React from 'react'
import CreatePoll from '../components/poll/CreatePoll'
import Vote from '../components/vote/Vote'
import Chart from '../components/chart/Chart'

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
