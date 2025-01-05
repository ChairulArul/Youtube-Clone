import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.bgLighter};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f44336;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.span`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 2px;
    background-color: #f44336;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Main = styled.main`
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const MovieGrid = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`;

const MovieCard = styled.div`
  min-width: 200px;
  background-color: #202020;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 0.8rem;
`;

const MovieTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieDetails = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
  color: #aaa;
`;

const Badge = styled.span`
  display: inline-block;
  background-color: #4caf50;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

const Duration = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
`;

const MoviePage = () => {
  const movies = [
    {
      id: 1,
      title: "BoBoiBoy The Movie",
      genre: "Aksi & petualangan",
      year: 2016,
      duration: "1.42.36",
      rating: "SU",
      poster:
        "https://upload.wikimedia.org/wikipedia/id/2/2f/Boboiboy_The_Movies.jpg",
    },
    {
      id: 2,
      title: "World War Z",
      genre: "Horor/Laga ",
      year: 2013,
      duration: "1.56.01",
      rating: "D",
      poster:
        "https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 3,
      title: "A Beautiful Mind",
      genre: "Cerita seru/Roman",
      year: 2001,
      duration: "2.15.23",
      rating: "17+",
      poster:
        "https://upload.wikimedia.org/wikipedia/id/9/98/Abeautifulmindposter.jpg",
    },
    {
      id: 4,
      title: "Forrest Gump",
      genre: "Komedi/Roman",
      year: 2001,
      duration: "3.15.13",
      rating: "17+",
      poster:
        "https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg",
    },
  ];

  return (
    <AppContainer>
      <Header>
        <LogoContainer>
          <Img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt="Logo"
          />
          <Logo>YouTube Film</Logo>
        </LogoContainer>
        <Navigation>
          <NavItem active>Jelajahi</NavItem>
          <NavItem>Dibeli</NavItem>
        </Navigation>
      </Header>
      <Main>
        <SectionTitle>Film Primetime untuk Anda</SectionTitle>
        <MovieGrid>
          {movies.map((movie) => (
            <MovieCard key={movie.id}>
              <MoviePoster src={movie.poster} alt={movie.title} />
              <Duration>{movie.duration}</Duration>
              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieDetails>
                  {movie.genre} • {movie.year}
                </MovieDetails>
                <Badge>{movie.rating}</Badge>
              </MovieInfo>
            </MovieCard>
          ))}
        </MovieGrid>
      </Main>
    </AppContainer>
  );
};

export default MoviePage;
