import React from "react";
import styled from "styled-components";

// Icon import
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
  margin-left: 10px;
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
  /* background-color: #f9f9f9; */
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;
  /* color: ${({ theme }) => theme.textSoft}; */
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
            src="https://www.youtube.com/embed/Ak6VTSekGP4?si=JcfLJfISaseWEOmz"
            title="Youtube Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>

        <Title>Belajar web Dengan PHP & Database Untuk Pemula Dari Nol</Title>
        <Info>184 rb x ditonton 10 bulan yang lalu</Info>
        <Details>
          <ChannelContainer>
            <ChannelInfo>
              <ChannelImage
                src="https://yt3.googleusercontent.com/Jg2d9WQ9Edhmnp7gk5BgMDRzos1YYE9JWlkbjnAqHWD4KooDY_KTkf7Vl23l7n1cFD-o3N9rIRU=s900-c-k-c0x00ffffff-no-rj"
                alt="Channel Profile"
              />
              <ChannelDetails>
                <ChannelName>Dea Afrizal</ChannelName>
                <SubscriberCount>481rb Subscriber</SubscriberCount>
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
            Hallo ngab, ini channel Dea Afrizal. Kali ini kita akan belajar buat
            web dengan implementasi menggunakan bahasa pemrograman PHP ya.
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
