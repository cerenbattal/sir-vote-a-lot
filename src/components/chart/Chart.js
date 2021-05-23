import React, { useContext } from 'react'
import { Context } from '../../context/GlobalContext';
import SimpleBarChart from './SimpleBarChart'
import './Chart.css'


export default function Chart() {
    const { state } = useContext(Context);
    return (
        <div data-testid="chart-test" className="chart">
            {state.isCreated ? (
                <>
                <SimpleBarChart data-testid="barchart-test"/>
                <div className="footer">
                    <p>Total votes: {state.voteCount}</p>
                </div>
                </>
            ) : (
                <div className="no-chart-text">
                    <i className="percent icon"></i>
                    <p>Your chart will appear here!</p>
                </div>
            )}
        </div>
    )
}
