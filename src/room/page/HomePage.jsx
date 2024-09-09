import styled from 'styled-components';
import Button from '../ui/Button';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Wrapper = styled.div`
    display: flex;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    flex-direction: column;
    align-items: center;
`;

function HomePage() {
    

    return(
        <>
        <Header/>
        <Wrapper>
            <Container>
                <Button 
                    title="방 구경하기"
                    onClick={()=>{
                    }} />
            </Container>
            <br/>
            <Container>
                <Button
                    title="방 자랑하기"
                    onClick={()=>{
                    }} />
            </Container>
        </Wrapper>
        <Footer/>
        </>
        
    );

}// HomePage end

export default HomePage ;