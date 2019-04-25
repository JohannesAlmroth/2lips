import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Primary = 'rgb(62, 140, 196)';

const Wrapper = styled.div`
	width: 700px;
	height: 200px;
	display: flex;
	flex-direction: column;
	border: 5px solid red;
`;

const Header = styled.div`
	background: rgb(184, 44, 112);
	height: 2em;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.p`
	color: white;
	font-size: 14px;
	padding-left: 40px;
	padding-right: 40px;
`;

const Body = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border: 5px solid green;
`;

const ButtonGroup = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const InputWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const TextButton = styled.button`
	white-space: normal;
`;

const SendButton = styled.button`
	background: ${Primary};
	color: white;
`;

const Question = styled.p`
	padding-left: 30px;
`;

function Survey() {
	return (
		<Wrapper>
			<Header>
				<Title>Vi bryr oss om hur du mår</Title>
				<Title> Varför vill vi veta detta?</Title>
			</Header>
			<Body>
				<Question>Hur tycker du att arbetsbelastningen är just nu?</Question>

				{/* Radio meter or smth */}
				<InputWrapper>
				
				</InputWrapper>

				<ButtonGroup>
					<TextButton>Berätta mer?</TextButton>
					<SendButton>Skicka in och se resultat</SendButton>
				</ButtonGroup>


			</Body>
		</Wrapper>
	);
}

export default Survey;