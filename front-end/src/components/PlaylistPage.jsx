import React from "react";
import styled from "styled-components";

const PlaylistPage = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: white;
  padding: 20px;
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const PlaylistCard = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover .hover-overlay {
    opacity: 1;
    visibility: visible;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 140px;
  object-fit: contain;
  background-color: #000;
`;

const PlaylistInfo = styled.div`
  padding: 10px;
`;

const PlaylistTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px;
`;

const PlaylistDetails = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0;
`;

// Hover Overlay
const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const PlayAllButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #cc0000;
  }
`;

const PlayIcon = styled.span`
  font-size: 20px;
`;

const PlaylistCardList = [
  {
    id: 1,
    title: "Serial akhir zaman",
    thumbnail:
      "https://i.ytimg.com/vi/IiMCIanDxnY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCgbwBsFpckuldD3R20BPuX2TwcXA",
    author: "Bro gamal",
    details: "27 video",
  },
  {
    id: 2,
    title: "Biologi",
    thumbnail:
      "https://i.ytimg.com/vi/Dq9sxagzOkg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBbHi0qcZ_o6VbMEDgTkN6D3PEwKg",
    author: "Kok Bisa?",
    details: "92 video",
  },
  {
    id: 3,
    title: "Philoshoper",
    thumbnail:
      "https://i.ytimg.com/vi/N2gFMyMcklo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDqpZRcBq4wsH4JlowPQ8KZxCnrJA",
    author: "Ardhianzy",
    details: "5 video",
  },
  {
    id: 4,
    title: "Sejarah tokoh dunia",
    thumbnail:
      "https://i.ytimg.com/vi/b6xWnpB9xRA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAP1aBkVpdk_vGQnibQ-xikbdfePQ",
    author: "Inspect History (ID)",
    details: "80 video",
  },
  {
    id: 5,
    title: "React Setup Subscriber",
    thumbnail:
      "https://i.ytimg.com/vi/ND1icNJGplo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAYkG0BtjAGFeLkCRFSt6_Dq_r9Vg",
    author: "ochaxt",
    details: "23 video",
  },
  {
    id: 6,
    title: "Insiden Sains",
    thumbnail:
      "https://i.ytimg.com/vi/sc8lPAtwNbk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBRZu30dsYb9KGzjgPEW58muhCwEg",
    author: "fajrul fx",
    details: "7 video",
  },
];

const Playlist = () => {
  return (
    <PlaylistPage>
      <Title>Playlist</Title>
      <PlaylistGrid>
        {PlaylistCardList.map((playlist) => (
          <PlaylistCard key={playlist.id}>
            <Thumbnail src={playlist.thumbnail} alt={playlist.title} />
            <HoverOverlay className="hover-overlay">
              <PlayAllButton>
                <PlayIcon>▶</PlayIcon> Putar Semua
              </PlayAllButton>
            </HoverOverlay>
            <PlaylistInfo>
              <PlaylistTitle>{playlist.title}</PlaylistTitle>
              <PlaylistDetails>
                {playlist.author} • {playlist.details}
              </PlaylistDetails>
            </PlaylistInfo>
          </PlaylistCard>
        ))}
      </PlaylistGrid>
    </PlaylistPage>
  );
};

export default Playlist;
