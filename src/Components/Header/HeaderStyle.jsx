import styled from "styled-components"

export const Header = styled.header`
font-family: '8BIT WONDER', sans-serif;
display: flex;
width: 100%;
height: 7vh;
background-color:#2D2B2B;
color: white;
align-items: center;
justify-content: flex-end;
    nav{
        width: 100%;
justify-content: flex-end;
display: flex;

    }
    
`
export const Lista = styled.ul`
display: flex;
width: 33%;
    li{
        list-style: none;
        padding: 0 10px;
        :hover{
          color:#9F59BF;
          cursor: pointer;
        }
    }
`