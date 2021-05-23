import React, { useContext } from 'react'
import { Context } from '../../context/GlobalContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './Chart.css'

export default function SimpleBarChart() {
    const { state } = useContext(Context);
    const data = state.answers;

    return (
        <ResponsiveContainer width={'99%'} height={300} aspect={0.85}>
            <BarChart
                width={450}
                height={500}
                data={data.slice()}
                margin={{
                    top: 5,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="answer" />
                <YAxis dataKey="score"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
        </ResponsiveContainer>
    )
}
