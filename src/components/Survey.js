import React, { useState } from "react";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import NMISlider from "./Slider";
import SliderGroup from "./SliderGroup";

const Primary = "rgb(62, 140, 196)";

const Wrapper = styled.div`
  width: 700px;
  height: 250px;
  display: grid;
  grid-template-rows: 2em 1fr;
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
`;

const ButtonGroup = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonDiv = styled.div`
  padding-right: 20px;
`;

const TextButton = styled.button`
	display-inline: block;
	border-radius: 4px;
	background-color: white;
	border: 1px solid grey;
	padding: 5px;
`;

const SendButton = styled.button`
  background: ${Primary};
  color: white;
  display: inline-block;
  border-radius: 4px;
  padding: 5px;
`;

const Question = styled.p`
  padding-left: 30px;
`;

const InputDiv = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  width: 628px;
  font-size: 14px;
  padding: 4px 2px 75px 2px;
`;

const Title2 = styled.p`
  margin-bottom: 0px;
`;

const PopButton = styled.button`
  padding-right: 14px;
  color: white;
  background: none !important;
  border: none;
  padding: 0 !important;
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function Survey() {
  const [inputOpen, setInputOpen] = useState(false);
  const [isPopOpen, togglePopOpen] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  let body;

  if (!isSubmitted) {
    body = (
      <Body>
        <Question>Hur tycker du att arbetsbelastningen är just nu?</Question>
        <SliderGroup />
        {inputOpen && (
          <InputDiv>
            <Title2>Berätta mer?</Title2>
            <InputField placeholder="Vad kan vi förändra för att det ska bli bättre?" />
          </InputDiv>
        )}

        <ButtonGroup>
          {!inputOpen && (
            <ButtonDiv>
              <TextButton onClick={() => setInputOpen(true)}>
                Berätta mer?
              </TextButton>
            </ButtonDiv>
          )}

          <ButtonDiv>
            <SendButton onClick={() => setSubmitted(true)}>
              Skicka in och se resultat
            </SendButton>
          </ButtonDiv>
        </ButtonGroup>
      </Body>
    );
  } else {
    const path = require("../images/dashboard.png");
    body = <Img resizeMode="contain" src={path} />;
  }

  return (
    <Wrapper>
      <Header>
        <Title>Vi bryr oss om hur du mår</Title>
        <PopButton onClick={() => togglePopOpen(!isPopOpen)}>
          {" "}
          Varför vill vi veta detta?
        </PopButton>
        <Popover
          open={isPopOpen}
          onClose={() => togglePopOpen(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <p>
            Valtech gör varje år en stor undersökning för att mäta NMI (Nöjd
            Medarbetar Index). För att bli en bättre arbetsplats vill vi mäta
            nöjdheten oftare än så. Därför har vi denna mikroundersökning för
            att snabbt fånga upp och lösa eventuella problem. Tack för att du
            hjälper till att göra Valtech ännu bättre! Ps. Om du svarar ofta
            finns det belöningar att hämta hem!
          </p>
        </Popover>
      </Header>
      {body}
    </Wrapper>
  );
}

export default Survey;
