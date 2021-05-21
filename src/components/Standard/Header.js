import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import Typed from 'react-typed';

export default function Header() {
    return (
        <MainHeader>
            <Logo href="/"> 
                <Typed
                    strings={['Shashil', 'Shashil Sravan', 'Sravan']}
                    typeSpeed={40} backSpeed={60} loop loopCount={1}
                />
            </Logo>
            <GithubA href="https://github.com/shashilsravan/" target="blank">
                <GitHubIcon />  
            </GithubA>
        </MainHeader>
    )
}

const MainHeader = styled.header`
    position: fixed;
    width: 100vw;
    height: 60px;
    background: #fcfcfc;
    box-shadow: 0px 1px 4px #E3E3E3;
    color: black;
    display: flex;
    align-items: center;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-item: center;

`

const Logo = styled.a`
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
    color: #6FC9DB;
    cursor: pointer;
    text-decoration: none;
    z-index: 9999;

    &:hover{
        color: #1281CA;
    }
`

const GithubA = styled.a`
    padding-top: 6px;
    text-decoration: none;
    margin-right: 40px;
`