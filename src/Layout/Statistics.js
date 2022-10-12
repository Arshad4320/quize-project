import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: "React",
            uv: 8,
            pv: 8,
            amt: 2400
        },
        {
            name: "Javascript",
            uv: 9,
            pv: 9,
            amt: 2210
        },
        {
            name: "Css",
            uv: 8,
            pv: 8,
            amt: 2290
        },
        {
            name: "Git",
            uv: 11,
            pv: 11,
            amt: 2000
        },

    ];
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width={500}
                    height={400}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#CD5C5C" fill="#CD5C5C" />
                    <Line type="monotone" dataKey="name" stroke="#3AB1EA" fill="#3AB1EAd" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;