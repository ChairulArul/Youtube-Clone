import React from "react";
import styled from "styled-components";
import {
  MusicNote,
  SportsBasketball,
  SportsEsports,
  Movie,
  Article,
  LiveTv,
} from "@mui/icons-material";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 100px;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const Category = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  background-color: ${({ theme }) => theme.bgLighter};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover {
    color: white;
    transform: scale(1.05);
    /* background-color: #444; */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const CategoryIcon = styled.div`
  font-size: 50px;
  color: #ff6b6b;
  margin-bottom: 10px;
  transition: color 0.3s, transform 0.5s;

  &:hover {
    color: maroon;
    transform: rotate(360deg);
  }
`;

const CategoryTitle = styled.h3`
  margin-top: 5px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

const Explore = () => {
  return (
    <Wrapper>
      <Title>Explore Your Taste 🚀</Title>
      <Container>
        <Category>
          <CategoryIcon>
            <MusicNote />
          </CategoryIcon>
          <CategoryTitle>Music</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon>
            <SportsBasketball />
          </CategoryIcon>
          <CategoryTitle>Sports</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon>
            <SportsEsports />
          </CategoryIcon>
          <CategoryTitle>Gaming</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon>
            <Movie />
          </CategoryIcon>
          <CategoryTitle>Movies</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon>
            <Article />
          </CategoryIcon>
          <CategoryTitle>News</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon>
            <LiveTv />
          </CategoryIcon>
          <CategoryTitle>Live</CategoryTitle>
        </Category>
      </Container>
    </Wrapper>
  );
};

export default Explore;
