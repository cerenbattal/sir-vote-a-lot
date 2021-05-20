import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './Chart.css'

const data = [
    {
        name: 'Page A',
        amt: 2400,
    },
    {
        name: 'Page B',
        amt: 2210,
    },
    {
        name: 'Page C',
        amt: 2290,
    }
];

export default function SimpleBarChart() {
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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amt" fill="#8884d8" />
                </BarChart>
        </ResponsiveContainer>
    )
}
