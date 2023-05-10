import styled from "styled-components";

export const Tudo = styled.main`
font-family: '8BIT WONDER', sans-serif;

color:white;
background-color: rgba(160, 157, 159, 0.26);
padding: 0 2em;
border-left: .5em solid #9F59BF;
border-right: .5em solid #9F59BF;
display: flex;
height: 60vh;
width: 85%;
margin: auto;
justify-content:space-between;
align-items: center;
`
export const Textos = styled.div`
border: 7px solid #9F59BF;
padding:1em;

`
export const AsideP = styled.aside`

text-align: center;
display: flex;
flex-direction: column;
gap: 1em;
align-items: center;

    h3{
        text-align: center;
    }
    button {
        width: 80%;
        font-family: "8-bit Arcade In";
        font-size: 2em;
        color: white;
        background-color: #9F59BF ;
        height: 7vh;
        :hover{
            padding-right: 10px;
            padding-top: 10px;
            border-top: 0;
            border-left: 0;
            border-bottom: 5px solid rgba(69, 0, 101, 1);
            border-right: 5px solid rgba(69, 0, 101, 1);
            background-color: rgba(106, 1, 155, 1);
            cursor: pointer;
        }
    }
    
`