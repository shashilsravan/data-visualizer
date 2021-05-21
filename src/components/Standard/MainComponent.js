import React from 'react'
import styled from 'styled-components'

export default function MainComponent() {
    return (
        <MainPageComponent>
            <TopImage src="https://miro.medium.com/max/500/0*msvHguhcO_wISaJ4.gif">
            </TopImage>
            <MiddleHeader>
                ---- Data Visualizer ----
            </MiddleHeader>
            <ButtonComponent href="/home">
                Get started
            </ButtonComponent>
        </MainPageComponent>
    )
}

const MainPageComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;
    background: #F7F8F8;
    height: 100vh;
`

const TopImage = styled.img`
    width: 280px;
`
const MiddleHeader = styled.h3`
    font-size: 30px;
    font-style: italic;
    padding: 12px 0;
    background: -webkit-linear-gradient(red, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ButtonComponent = styled.a`
    color: black;
    font-size: 18px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 6px 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);

    &:hover{
        background: rgba(0, 0, 0, 0.01);
        box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
    }
`