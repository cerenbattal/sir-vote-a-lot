import React from 'react'
import SimpleBarChart from './SimpleBarChart'
import './Chart.css'

export default function Chart() {
    return (
        <div data-testid="chart-test" className="chart">
            <SimpleBarChart data-testid="barchart-test"/>
            <div className="footer">
                <p>Total votes: 1</p>
            </div>
        </div>
    )
}
