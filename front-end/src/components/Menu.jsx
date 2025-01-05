import React from "react";
import styled from "styled-components";

import Dewa18 from "../img/logo.png";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow: hidden;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-y: auto;
  max-height: 100vh;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.text} transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Login = styled.div`
  font-size: 10px;
  text-align: left;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent !important;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 12px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Dewa18} />
            Youtube
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link
          to="/explore"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <ExploreIcon />
            Explore
          </Item>
        </Link>
        <Link to="subscription">
          <Item>
            <SubscriptionsIcon />
            Subscribe
          </Item>
        </Link>
        <Hr />
        <Link to="/playlist">
          <Item>
            <LibraryAddIcon />
            Playlist
          </Item>
        </Link>
        <Link to="/history" style={{ textDecoration: "none" }}>
          <Item>
            <HistoryIcon />
            History
          </Item>
        </Link>
        <Hr />
        <Login>Sign in to like videos, comments, and subscribe</Login>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleIcon />
            Sign in
          </Button>
        </Link>
        <Hr />
        <Title>Popular Channels</Title>
        <Link to="/music" style={{ textDecoration: "none", color: "#000" }}>
          <Item>
            <LibraryMusicIcon />
            Music
          </Item>
        </Link>
        <Link to="/sports" style={{ textDecoration: "none", color: "#000" }}>
          <Item>
            <SportsBasketballIcon />
            Sports
          </Item>
        </Link>
        <Link to="/games" style={{ textDecoration: "none", color: "#000" }}>
          <Item>
            <SportsEsportsIcon />
            Gaming
          </Item>
        </Link>
        <Link to="/movie">
          <Item>
            <MovieIcon />
            Movies
          </Item>
        </Link>
        <Link to="/news" style={{ textDecoration: "none", color: "#000" }}>
          <Item>
            <ArticleIcon />
            News
          </Item>
        </Link>
        <Hr />
        <Link to="/setting">
          <Item>
            <SettingsIcon />
            Settings
          </Item>
        </Link>
        <Link to="/report">
          <Item>
            <OutlinedFlagIcon />
            Report
          </Item>
        </Link>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          Dark mode
        </Item>
      </Wrapper>
    </Container>
  );
};
export default Menu;
