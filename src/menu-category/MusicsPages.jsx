import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 20px 50px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Category = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.soft};
  border: none;
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bgLighter};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const VideoCard = styled.div`
  background-color: ${({ theme }) => theme.soft};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
`;

const VideoTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

const VideoDesc = styled.p`
  font-size: 14px;
  color: #aaa;
`;

const MusicPage = () => {
  const categories = ["All", "Pop", "Rock", "Hip-Hop", "Jazz", "Classical"];
  const videos = [
    {
      title: "Pop Hits 2024",
      desc: "Top trending pop songs of 2024.",
      thumbnail: "https://via.placeholder.com/250x140",
    },
    {
      title: "Relaxing Jazz",
      desc: "Chill with relaxing jazz tunes.",
      thumbnail: "https://via.placeholder.com/250x140",
    },
    {
      title: "Rock Anthems",
      desc: "Classic rock anthems for everyone.",
      thumbnail: "https://via.placeholder.com/250x140",
    },
    // Tambahkan video lainnya di sini...
  ];

  return (
    <Container>
      <Header>
        <Title>Music</Title>
      </Header>
      <CategoryContainer>
        {categories.map((category, index) => (
          <Category key={index}>{category}</Category>
        ))}
      </CategoryContainer>
      <Grid>
        {videos.map((video, index) => (
          <VideoCard key={index}>
            <Thumbnail src={video.thumbnail} alt={video.title} />
            <Info>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDesc>{video.desc}</VideoDesc>
            </Info>
          </VideoCard>
        ))}
      </Grid>
    </Container>
  );
};

export default MusicPage;
