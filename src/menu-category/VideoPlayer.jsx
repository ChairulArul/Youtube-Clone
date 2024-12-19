import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 20px 50px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Video = styled.video`
  width: 80%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Desc = styled.p`
  font-size: 16px;
  color: #aaa;
`;

const VideoPlayer = () => {
  const location = useLocation();
  const video = location.state; // Mengambil data video dari state

  return (
    <Container>
      <VideoContainer>
        <Video controls>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <Title>{video.title}</Title>
        <Desc>{video.desc}</Desc>
      </VideoContainer>
    </Container>
  );
};

export default VideoPlayer;
