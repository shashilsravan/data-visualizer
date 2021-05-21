import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,
    Tooltip, ResponsiveContainer } from 'recharts';
import {colors} from '../data/colors'

export default function BarChartGraph({data, yVar, xVar}) {
    const customWidth = window.outerWidth * 0.9;
    
    return (
        <ResponsiveContainer height={500}>
            <BarChart width={customWidth} height={400}
                data={data} margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={yVar} />
                <YAxis />
                <Tooltip />
                <Legend />
                {xVar && xVar.map((each, id) => (
                    <Bar key={id} fill={colors[id]} dataKey={each} />
                ))}
            </BarChart>
        </ResponsiveContainer>
    )
}
