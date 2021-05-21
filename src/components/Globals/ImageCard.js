import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';

export default function ImageCard({imageUrl, text, linkedTo}) {
    return (
        <CardWrap>
            <Bounce>
                <ImageHoverZoom>
                    <ImageComponent 
                        src={imageUrl}>
                    </ImageComponent>
                </ImageHoverZoom>
            </Bounce>
            
            <CardText href={linkedTo}>
                {text}
            </CardText>
        </CardWrap>
    ) 
}

const CardWrap = styled.div`
    height: 320px;
    width: 260px;
    margin: 20px auto;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
`

const ImageComponent = styled.img`
    width: 240px;
    height: 260px;
    transform: scale(0.98)
`

const CardText = styled.a`
    font-size: 20px;
    font-style: italic;
    color: black;
    display: flex;
    justify-content: center;
    padding-top: 4px;
    text-decoration: none;
`

const ImageHoverZoom = styled.div`

    &:hover img{
        filter: brightness(100%);
        transform: scale(1.02);
    }
    & img{
        transition: transform 1s, filter 1s ease-in-out;
        transform-origin: center center;
        filter: brightness(70%);
    }
`