import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer,
    CartesianGrid, Tooltip, Legend } from 'recharts';
import {colors} from '../data/colors'

export default function LineCharGraph({data, yVar, xVar}) {
    return (
        <ResponsiveContainer height={500}>
            <LineChart width={1200} height={400}
                data={data} margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={yVar} />
                <YAxis />
                <Tooltip />
                <Legend />
                {xVar && xVar.map((each, id) => (
                    <Line key={id} type="monotone" 
                        dataKey={each} stroke={colors[id]} />
                ))}
            </LineChart>
        </ResponsiveContainer>
    )
}
