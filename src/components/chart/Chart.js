import React from 'react'
import SimpleBarChart from './SimpleBarChart'
import './Chart.css'

export default function Chart() {
    return (
        <div className="chart">
            <SimpleBarChart />
            <div className="footer">
                <p>Total votes: 1</p>
            </div>
        </div>
    )
}
