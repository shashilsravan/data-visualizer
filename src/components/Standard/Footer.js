import React from 'react';
import styled from 'styled-components'

export default function Footer() {
    return (
        <MyFooter>
            <FooterPara>
                Made by 
                <ParaA target="blank"
                href="https://www.linkedin.com/in/shashil-sravan-a5b201191/">
                    Sravan</ParaA>
                @IIITN CSE'22
            </FooterPara>
        </MyFooter>
    )
}

const MyFooter = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 40px;
    background: #FCFCFC;
    box-shadow: 0px -2px 10px #ececec;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FooterPara = styled.p`
    text-transform: uppercase;
    letter-spacing: 2px;
`

const ParaA = styled.a`
    text-decoration: none;
    margin: 0 4px;
    color: purple;
`