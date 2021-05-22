import React, { useContext } from 'react'
import { Context } from '../../context/GlobalContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './Chart.css'

export default function SimpleBarChart() {
    const { state } = useContext(Context);
    const data = state.answers;

    return (
        <ResponsiveContainer width={'99%'} height={300} aspect={1}>
            <BarChart
                width={400}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
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
