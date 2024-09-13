import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import api from "../api/axios";
import { useState } from "react";
import TextInput from "../ui/TextInput";
import Footer from "../layout/Footer";
import Header from "../layout/Header";


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



function RoomsUploadPage(){
    const navigate = useNavigate();
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const [ memo, setMemo ] = useState('');
    const [ tel, setTel ] = useState('');

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
    const submitHandler = async() => {
        const data = {
            id      : Date.now(),
            title   : title,
            content : content,
            memo    : memo,
            tel     : tel
        }
        try{
            const response = await api.post("rooms/create",data);
            console.log("debug >>> axios post response data, ", data);
            console.log("debug >>> axios post response data, ", response.status);
            if(response.status === 200){
                alert("방을 성공적으로 자랑했어요!");
                navigate("/");
            } else {
                alert("데이터 저장시 문제발생!!");
            }
        } catch (error) {
            console.log(error);
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
                        <Button title="자랑하기"
                                onClick={submitHandler}/>
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
export default RoomsUploadPage;