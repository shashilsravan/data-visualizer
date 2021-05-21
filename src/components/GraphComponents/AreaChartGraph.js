import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, 
    Tooltip, ResponsiveContainer } from 'recharts';
import {colors} from '../data/colors'

export default function AreaChartGraph({data, yVar, xVar}) {
    return (
        <ResponsiveContainer height={500}>
            <AreaChart width={1200} height={400}
                data={data} margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={yVar} />
                <YAxis />
                <Tooltip />
                <Legend />
                {xVar && xVar.map((each, id) => (
                    <Area key={id} type="monotone" fill={colors[id]}
                        dataKey={each} stroke={colors[id]} />
                ))}
            </AreaChart>
        </ResponsiveContainer>
    )
}
