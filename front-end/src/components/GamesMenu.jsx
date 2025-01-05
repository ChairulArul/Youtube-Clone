import React from "react";
import styled from "styled-components";

// Styled components
const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px;
  justify-content: center;
`;

const VideoItem = styled.div`
  width: 225px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const VideoTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.text};
`;

const VideoDescription = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  margin-top: 5px;
`;

const VideoEmbed = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 8px;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

// Fungsi untuk mengambil video ID dari URL
function extractVideoId(url) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// MusicPage component
const GamingPage = () => {
  const videos = [
    {
      title: "PC 15 Juta VS PS5 Pro | Test 4K Ray Tracing, Mending Mana? ft",
      videoUrl: "https://youtu.be/mCw2MHoYxFs?si=fLngY1rHyB82R1Au",
      description: "This is a cool music video",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
    },
    {
      title: "nilah Wujud Los Santos 3 Tahun Sebelum CJ Datang 🔥",
      videoUrl: "https://youtu.be/7FMloEu2y7k?si=X0RR_tD9G4VS8ECN",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Bukti SLEEPING DOGS Lebih Bagus Dari GTA 5",
      videoUrl: "https://youtu.be/eHrlYnUSVjg?si=2j1KOqKBwSC_SBJQ",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Cyclops | Ranked Game Play | Jin Mobile Legends Bang Bang",
      videoUrl: "https://youtu.be/vOKKC-9nfZQ?si=HP8HeFLizfgxF3w8",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Garena Delta Force - Kiana Ulti, Helikopter, Mobil Musuh",
      videoUrl: "https://youtu.be/gD424I-1PZo?si=OCMraswdHjZ7klMz",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Trailer Karakter Fugue: Tak Berucap | Honkai: Star Rail",
      videoUrl: "https://youtu.be/guGouXhwtK4?si=Pcu3-DbAE-hdGrjU",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Duta Dark System Funny Moments - Mobile legends",
      videoUrl: "https://youtu.be/p4CcryL_j1c?si=yXRpybgwh-efD-iB",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "GUA DIKICK BERKALI-KALI SAMPE DIKATAIN BOT SAMA PLAYER INI😱",
      videoUrl: "https://youtu.be/XrHIE9dpN0U?si=Pzb-wk1jBgr1b5HK",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "AKU BUKTIKAN META EL CROSSING DENGAN GARETH BALE TERKUAT!",
      videoUrl: "https://youtu.be/GdjnpKzvYE0?si=bC97K7L0Nb5zzZS9",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "10 Tips Terbaik Untuk Player Baru!! #1 - Genshin Impact Indonesia",
      videoUrl: "https://youtu.be/lAczfw6LE8M?si=DMU6AOj4HavwJD05",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Balik PUBG MOBILE Pake SKIN AYAM JAGO!!",
      videoUrl: "https://youtu.be/Z_tO3GhRwdk?si=Fqal-UEXUoXM7i7E",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Valorant Indonesia - Sad Remi, Gelato, Comeback?",
      videoUrl: "https://youtu.be/QCapMwnevz0?si=R4Y5CFdHS5ql208A",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
  ];

  return (
    <VideoContainer>
      {videos.map((video, index) => {
        const videoId = extractVideoId(video.videoUrl); // Ambil video ID dari URL
        return (
          <VideoItem key={index}>
            <VideoEmbed>
              <Iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </VideoEmbed>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoDescription>{video.description}</VideoDescription>
          </VideoItem>
        );
      })}
    </VideoContainer>
  );
};

export default GamingPage;
