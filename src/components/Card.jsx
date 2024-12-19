import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
  border-radius: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;
const Tittle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/Video" style={{ textDecoration: "none" }}>
      <Container>
        <Img src="https://i.ytimg.com/vi/Ak6VTSekGP4/hqdefault.jpg" />
        <Details>
          <ChannelImg src="https://yt3.googleusercontent.com/Jg2d9WQ9Edhmnp7gk5BgMDRzos1YYE9JWlkbjnAqHWD4KooDY_KTkf7Vl23l7n1cFD-o3N9rIRU=s900-c-k-c0x00ffffff-no-rj" />
          <Texts>
            <Tittle>Belajar PHP pemula dari nol</Tittle>
            <ChannelName>Dea Afrizal</ChannelName>
            <Info>185rb x ditonton - 10 bulan yang lalu</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};
export default Card;
