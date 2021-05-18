import React from 'react'
import CreatePoll from './poll/CreatePoll'
import Vote from './vote/Vote'
import Chart from './chart/Chart'

export default function Body() {
    return (
        <div class="ui three column stackable centered grid container">
            <div class="column">
                <CreatePoll />
            </div>
            <div class="column">
                <Vote />
            </div>
            <div class="column">
                <Chart />
            </div>
        </div>
    )
}
