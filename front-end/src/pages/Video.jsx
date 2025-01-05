import React from "react";
import styled from "styled-components";

import ShareIcon from "@mui/icons-material/Share";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import Comments from "../components/comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;

const VideoWrapper = styled.div``;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  color: ${({ theme }) => theme.text};
`;
const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 15px;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const SubscriberCount = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;
const SubscribeButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
  margin-left: -2px;
`;
const JoinButton = styled.button`
  background-color: #f1f1f1;
  color: black;
  border: none;
  padding: 8px 12px;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 5px;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const ChannelInfoAccount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;
  color: ${({ theme }) => theme.text};
`;
const ChannelSpan = styled.span`
  font-size: 14px;
  line-height: 1.5;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/4Jt78n_A7jM"
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>

        <Title>
          Gojo vs Toji Round 2 - Full Fight | Jujutsu Kaisen Season 2
        </Title>
        <Info>15 million x views - 1 year ago</Info>
        <Details>
          <ChannelContainer>
            <ChannelInfo>
              <ChannelImage
                src="https://yt3.googleusercontent.com/P0My6nta_2WxVkDNxtkzM6BHp5OHjA7LNuyQH-DYhf2edO2NtUSpSGNPv0FzUGqx-i63z-fe0iU=s160-c-k-c0x00ffffff-no-rj"
                alt="Copyright - Dewa18"
              />
              <ChannelDetails>
                <ChannelName>Dewa - 18</ChannelName>
                <SubscriberCount>5,12jt Subscriber</SubscriberCount>
              </ChannelDetails>
            </ChannelInfo>
            <JoinButton>Gabung</JoinButton>
            <SubscribeButton>Subscribe</SubscribeButton>
          </ChannelContainer>
          <ActionContainer>
            <Button>
              <ThumbUpOutlinedIcon /> Suka
            </Button>
            <Button>
              <ThumbDownOutlinedIcon />
            </Button>
            <Button>
              <ShareIcon />
              Bagikan
            </Button>
          </ActionContainer>
        </Details>
        <Hr />
        <ChannelInfoAccount>
          <ChannelSpan>
            15,233,467 x views Jul 28, 2023
            <br />
            #TojiFushiguro #GojoSatoru #JujutsuKaisen
            <br />
            Jujutsu Kaisen Season 2 Episode 4 Jujutsu Kaisen Episode 28
            <br />
            <br />
            ------------------------------------------------------------------------------------
            <br />
            <br />
            ⛾ Support me on Patreon:
            <br />
            ⛾ https://www.patreon.com/Neobrane
            <br />
            <br />
            ⛾ Discord:
            <br />
            ⛾ https://discord.gg/2Qsrr26u5D
            <br />
            <br />
            ------------------------------------------------------------------------------------
            <br />
            <br />
            #JujutsuKaisen #GojoSatoru #TojiFushiguro
          </ChannelSpan>
        </ChannelInfoAccount>
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
