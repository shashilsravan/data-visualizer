import styled from 'styled-components'

export const PrimaryButton = styled.button`
    padding: 8px 20px;
    border: none;
    font-size: 14px;
    color: white;
    background: #399DFF;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background: transparent;
        color: #399DFF;
        border: 1px solid #399DFF;
    }
`

export const ChartHeader = styled.h4`
    padding-top: 80px;
    font-size: 28px;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;
    background: -webkit-linear-gradient(green 80%, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const MyForm = styled.form`
    margin: 20px 0;
    text-align: center;
`
export const DFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FormInput = styled.input`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
    &+label{
        font-size: 16px;
        padding: 2px 10px;
        color: black;
        background-color: white;
        display: inline-block;
        border: 1px solid black;
        margin-right: 12px;
        padding: 4px;
        width: 150px;
    }
`
export const FormPara = styled.p`
    text-align: center;
    margin: 10px 0;
`

export const FormH3 = styled.h3`

`
export const FlexP = styled.p`
    margin: 0 2vw;
`

export const DFlexPT = styled(DFlex)`
    padding: 10px;
    flex-wrap: wrap;
`

export const DFlexPTWrap = styled(DFlexPT)`
    flex-direction: row;
    padding-bottom: 1rem;

    @media screen and (max-width: 500px){
        flex-direction: column;
    }
`

export const GraphComponent = styled.div`
    
`