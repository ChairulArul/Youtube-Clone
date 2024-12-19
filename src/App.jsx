import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

import Home from "../src/pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Register from "./pages/SignUp";
import SearchPage from "./pages/SearchPages"; // Halaman Pencarian
import VideoPlayer from "./menu-category/VideoPlayer";
import MusicPage from "./menu-category/MusicsPages";

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
                  <Route path="signin" element={<SignIn />} />
                  <Route path="signup" element={<Register />} />
                  <Route path=":id" element={<Video />} />
                  <Route path="search" element={<SearchPage />} />{" "}
                  <Route path=":id" element={<Video />} />
                  {/* to music section */}
                  <Route path="/music" element={<MusicPage />} />
                  <Route path="/video/:id" element={<VideoPlayer />} />
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
