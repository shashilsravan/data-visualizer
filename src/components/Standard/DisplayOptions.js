import React from 'react'
import styled from 'styled-components'
import ImageCard from '../Globals/ImageCard'

export default function DisplayOptions() {
    return (
        <OptionContainer>
            <ImageCard imageUrl="https://www.excel-easy.com/smi/examples/line-chart.png"
                text="Line Chart" linkedTo="../lineChart" />
            
            <ImageCard imageUrl="https://mk0trumpexcelrq4mcds.kinstacdn.com/wp-content/uploads/2018/08/Stacked-area-chart-in-Excel.png"
                text="Area Chart" linkedTo="../areaChart" />
            
            <ImageCard imageUrl="https://chartio.com/images/tutorials/charts/grouped-bar-charts/grouped-bar-example-1.png"
                text="Bar Chart" linkedTo="../barChart" />
            
            <ImageCard imageUrl="https://www.burningsuit.co.uk/wp-content/uploads/2020/07/072120_1431_7Secretsoft7.png"
                text="Pie Chart" linkedTo="../pieChart" />
            
            <ImageCard imageUrl="https://miro.medium.com/max/2040/1*YFroPGj9dpPx7nqf045AUQ.png"
                text="Radar Graph" linkedTo="../radarGraph" />
        </OptionContainer>
    )
}

const OptionContainer = styled.div`
    padding: 0 20px;
    padding-top: 100px;
    display: flex;
    flex-wrap: wrap;
`