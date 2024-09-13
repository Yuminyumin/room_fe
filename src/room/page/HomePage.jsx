import styled from 'styled-components';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import {useNavigate} from 'react-router-dom';
import Card from '../ui/Card';

import find from '../img/find.png';
import room from '../img/room.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const Container = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 70%;
    
    
`;

function HomePage() {
    const navigate = useNavigate();

    return(
        <>
        <Header/>
        <Wrapper>
            <Container>
                <Card src={find}
                      alt='방 구경하기'
                      content='수많은 방을 구경하고 골라보아요!'
                      title='방 구경하기'
                      onClick={()=> {
                        navigate("rooms-view");
                      }}/>
                <Card src={room}
                      alt='방 자랑하기'
                      content='사람들에게 방을 자랑해보아요!'
                      title='방 자랑하기'
                      onClick={()=> {
                        navigate("rooms-upload");
                      }}/>
            </Container>
        </Wrapper>
        <Footer/>
        </>
        
    );

}// HomePage end

export default HomePage ;