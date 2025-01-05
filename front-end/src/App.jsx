import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

import Home from "../src/pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Explore from "./components/Explore";

import MusicPage from "./components/MusicVideo";

import SearchResults from "./components/SearchResult";

import SportsPage from "./components/SportsMenu";
import GamingPage from "./components/GamesMenu";
import NewsPage from "./components/NewsPage";
import MoviePage from "./components/MoviePage";
import SettingsPage from "./components/SettingPage";

import History from "./components/HistoryPage";
import Subscription from "./components/Subscription";
import Playlist from "./components/PlaylistPage";
import Report from "./components/ReportPage";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 12px 7px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="/:id" element={<Video />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/video/:id" element={<Video />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/music" element={<MusicPage />} />
                  <Route path="/sports" element={<SportsPage />} />
                  <Route path="/games" element={<GamingPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/movie" element={<MoviePage />} />
                  <Route path="/setting" element={<SettingsPage />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route path="/playlist" element={<Playlist />} />
                  <Route path="/report" element={<Report />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
