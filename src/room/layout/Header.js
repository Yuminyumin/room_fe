import styled from "styled-components";
import home from '../img/home.jpeg';

const Container = styled.div`
    display : flex;
    justify-content : space-between;
    align-items: center;
`;

const Title = styled.h1`
    text-align: center;
    flex: 1;
`;

const Hr = styled.hr`
    width: 100%;
    border: 1px solid #ccc;
`;
const Logo = styled.img`
    height: auto;
    width : 50px;
`;

function Header() {
	return (
        <>
		    <Container>
                &nbsp;&nbsp;
                <Logo src={home} alt="Logo"/>
                <Title>유민의 방 찾기</Title>
		    	<div>
		    		<a href="Login" className="btn btn-primary">Login</a>
		    		&nbsp;&nbsp;/&nbsp;&nbsp;
		    		<a href="Join" className="btn btn-primary">Join</a>
                    &nbsp;&nbsp;
		    	</div>
		    </Container>
            <Hr/>
        </>
	);
}

export default Header;