import React from 'react';
import styled from "styled-components";
import Button from './Button';

const Container = styled.div`
    display         : flex;
    align-items     : center;
    justify-content : center;
    padding         : 16px;
    width           : 80%;
    border          : 2px solid #ccc;
    border-radius   : 8px;
`;
const Image = styled.img`
    width           : 20%;
    height          : auto;
    border-radius   : 8px;
    margin-right     : 50px;
`;
const TextContainer = styled.div`
    display         : flex;
    align-items     : center;
    justify-content : center;
    flex-direction  : column;
`;

function Card(props){
    return(
        <Container>
            <Image src={props.src} alt={props.alt}/>
            
            <TextContainer>
                <h4>{props.content}</h4>
                <Button title={props.title} onClick={props.onClick}/>
            </TextContainer>
        </Container>
    );
}

export default Card;