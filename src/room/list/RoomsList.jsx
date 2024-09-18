import styled from "styled-components";
import RoomsItem from "./RoomsItem";

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

function RoomsList(props){
    const data = Array.isArray(props.data) ? props.data : [];

    return(
        <Wrapper>
            {data.map((room)=>(
                <RoomsItem key={room.id} data={room} roomsId={room.id}/>
            ))}
        </Wrapper>
    );
}

export default RoomsList;