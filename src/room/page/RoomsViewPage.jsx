import { useNavigate }         from "react-router-dom";
import styled                  from "styled-components";
import RoomsList               from "../list/RoomsList";
import Button                  from "../ui/Button";
import { useEffect, useState } from "react";
import api                     from "../api/axios";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Wrapper = styled.div`
    padding: 16px;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; // 수평 중앙 정렬
    width: 100%; // Container의 너비에 맞춤
`;


const StyledButton = styled(Button)`
    padding: 16px;
`;

function RoomsViewPage(){
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getList();
    },[]);

    const getList = async()=> {
        try{
            const response = await api.get("/rooms/index");
            setList(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <>
            <Header/>
            <Wrapper>
            <Container>
                <RoomsList data={list}/>
                <ButtonContainer>
                    <StyledButton title="홈으로"
                            onClick={()=>{navigate("/");}}/>
                </ButtonContainer>
            </Container>
            </Wrapper>
            <Footer/>
        </>
        
    );
}
export default RoomsViewPage;