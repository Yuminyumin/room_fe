import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import api from "../api/axios";
import { useEffect, useState } from "react";
import TextInput from "../ui/TextInput";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import _               from 'lodash';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`

`;
const ButtonContainer = styled.div`

`;
const TextContainer = styled.div`
    margin-bottom : 10px;
`;

function RoomsUpdatePage(props){
    const navigate = useNavigate();
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const [ memo, setMemo ] = useState('');
    const [ tel, setTel ] = useState('');

    const [rooms, setRooms] = useState({});
    const [originalRooms, setOriginalRooms] = useState({});
    const [disabled , setDisabled] = useState(true);

    const location = useLocation();
    console.log("debug >>> update page state , " , location.state.id); 
    const roomsId = location.state?.id;

    useEffect(()=> {
        getRooms();
    },[]);

    useEffect(()=> {
        setRooms({
            title : title,
            content : content,
            memo : memo,
            tel : tel
        })
    },[title, content, memo, tel]);

    useEffect(()=> {
        setDisabled(_.isEqual(rooms, originalRooms));
    },[rooms, originalRooms]);

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const contentHandler = (e) => {
        setContent(e.target.value);
    }
    const memoHandler = (e) => {
        setMemo(e.target.value);
    }
    const telHandler = (e) => {
        setTel(e.target.value);
    }

    const getRooms = async () => {
        try {
            const response = await api.get(`rooms/view/${roomsId}`);
            console.log("debug >>> axios get response data, ", response.data);

            setRooms({...response.data});
            setOriginalRooms({...response.data});
            setTitle(response.data.title);
            setContent(response.data.content);
            setMemo(response.data.memo);
            setTel(response.data.tel);
        } catch (err){
            console.log(err);
        }
    };

    const updateHandler = async () => {
        console.log("debug >>> update handler click");
        const data = {
            id : roomsId,
            title : title,
            content : content,
            memo : memo,
            tel : tel
        }
        try{
            const response = await api.put(`rooms/update` , data );
            console.log("debug >>> axios patch response data , " , response.data); 
            alert("수정이 완료되었습니다.");
            navigate("/rooms-view");
        }catch( err ) {
            console.log( err );
        }
    }
    
    return(
        <>
            <Header/>
            <Wrapper>
                <Container>
                    <TextContainer>
                        <label> Title:
                            <TextInput 
                                height={15}
                                value={title}
                                onChange={titleHandler}/>
                        </label>
                        <label> Content:
                            <TextInput 
                                height={50}
                                value={content}
                                onChange={contentHandler}/>
                        </label>
                        <label> Memo:
                            <TextInput 
                                height={10}
                                value={memo}
                                onChange={memoHandler}/>
                        </label>
                        <label> Tel:
                            <TextInput 
                                height={10}
                                value={tel}
                                onChange={telHandler}/>
                        </label>
                    </TextContainer>
                    <ButtonContainer>
                        <Button title="수정하기"
                                onClick={updateHandler}
                                disabled={disabled}/>
                        &nbsp;&nbsp;
                        <Button title="홈으로"
                                onClick={()=>{
                                    navigate("/");
                                }}/>
                    </ButtonContainer>
                </Container>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default RoomsUpdatePage;