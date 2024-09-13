import styled from "styled-components";

const Wrapper = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    margin : 10px 0px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImgContainer = styled.div`
    align-items: center;
    justify-content: center;
`;

const TextContainer = styled.div`
    align-items: center;
    justify-content: center;
    
`;

const TitleText = styled.p`
    font-size: 20px;
    margin   : 4px 0px;
`;

const Image = styled.img`
    width           : 20%;
    height          : auto;
    border-radius   : 8px;
    margin-right     : 200px;
`;

function RoomsItem(props){
    return(
        <Wrapper>
            <Container>
                <ImgContainer>
                    <Image src={""} alt="roomImage"/>
                </ImgContainer>
                <TextContainer>
                    <TitleText>{props.data.title}</TitleText>
                    <TitleText>{props.data.content}</TitleText>
                    <TitleText>{props.data.memo}</TitleText>
                </TextContainer>
            </Container>
        </Wrapper>
    );
}

export default RoomsItem;