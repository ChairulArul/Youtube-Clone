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
        <Img src="https://i.ytimg.com/vi/4Jt78n_A7jM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCrM73ultwDpuRjbvra84CnsJj7LQ" />
        <Details>
          <ChannelImg src="https://yt3.googleusercontent.com/P0My6nta_2WxVkDNxtkzM6BHp5OHjA7LNuyQH-DYhf2edO2NtUSpSGNPv0FzUGqx-i63z-fe0iU=s160-c-k-c0x00ffffff-no-rj" />
          <Texts>
            <Tittle>
              Gojo vs Toji Round 2 - Full Fight | Jujutsu Kaisen Season 2
            </Tittle>
            <ChannelName>Dewa - 18</ChannelName>
            <Info>15 million x views - 1 year ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};
export default Card;
