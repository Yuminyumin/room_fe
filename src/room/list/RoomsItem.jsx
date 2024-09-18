import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate} from "react-router-dom";
import api from "../api/axios";

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
const ButtonContainer = styled.div`
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
    const navigate = useNavigate();
    const {data, roomsId} = props;

    const deleteHandler = async (roomsId) => {
        try{
            console.log("debug >>> Delete roomsId, ", roomsId)
            const response = await api.delete(`/rooms/delete/${roomsId}`);
            console.log("Delete response:", response);
            navigate("/rooms-view");
        }catch(err){
            console.log(err);
        }
    };

    return(
        <Wrapper>
            <Container>
                <ImgContainer>
                    <Image src={""} alt="roomImage"/>
                </ImgContainer>
                <TextContainer>
                    <TitleText>Title : {data.title}</TitleText>
                    <TitleText>Content : {data.content}</TitleText>
                    <TitleText>Memo : {data.memo}</TitleText>
                    <TitleText>Tel : {data.tel}</TitleText>
                </TextContainer>
            </Container>
            <ButtonContainer>
                <Button title={"수정"} onClick={()=>{
                    console.log("Navigating to update page with ID:", roomsId);
                    navigate("/rooms-update",{state:{id:roomsId}})}}/>
                    &nbsp;&nbsp;&nbsp;
                <Button title={"삭제"} onClick={()=>deleteHandler(roomsId)}/>
            </ButtonContainer>
        </Wrapper>
    );
}

export default RoomsItem;