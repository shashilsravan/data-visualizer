import React from 'react';
import { PieChart, Pie, ResponsiveContainer ,Cell, Legend, Tooltip } from "recharts";
import {colors} from '../data/colors'

export default function PieChartGraph({data, yVar}) {
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = 
        ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    {data.map((entry, index) => console.log(colors[index]))}
    return (
        <ResponsiveContainer height={500}>
            <PieChart width={1200} height={400}>
                <Pie isAnimationActive fill={colors[0]} labelLine={false}
                    cx="50%" cy="50%" data={data} label={renderCustomizedLabel}
                    dataKey={yVar} outerRadius={100}>

                    {data.map((entry, index) => (
                        <Cell key={index} fill={colors[index]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    )
}

