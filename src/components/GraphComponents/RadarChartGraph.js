import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, 
    PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import {colors} from '../data/colors'

export default function RadarChartGraph({data, yVar, xVar}) {
    return (
        <ResponsiveContainer height={500}>
            <RadarChart width={1200} height={400}
                data={data} cx="50%" cy="50%" outerRadius={150}>
                <PolarGrid />
                <PolarAngleAxis dataKey={yVar} />
                <PolarRadiusAxis />
                {xVar && xVar.map((each, id) => (
                    <Radar key={id} type="monotone" fill={colors[id]}
                        dataKey={each} stroke={colors[id]} fillOpacity={0.6} />
                ))}
            </RadarChart>
        </ResponsiveContainer>
    )
}
