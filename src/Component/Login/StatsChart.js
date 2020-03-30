import React, { useEffect } from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const StatsChart = (props) => {

    let xaxis = [];
    let yaxis = [];
    useEffect(() => {
        console.log(props.data);
        for (let i = 1; i <= props.data.length; i++) {
            xaxis.push(i)
            yaxis.push(props.data[i - 1].capcount);
        }
    }, [props.data, xaxis, yaxis])
    return (
        <VictoryChart
            domainPadding={100}>
            <VictoryAxis
                label='Room Capacity'
                tickValues={xaxis}
            />
            <VictoryAxis
                label='Bookings'
                dependentAxis
                tickValues={yaxis}
                tickCount={3}
            />
            <VictoryBar
                
                data={props.data}
                x={"capacity"}
                y={"capcount"}
            />
        </VictoryChart>

    )
}

export default StatsChart;