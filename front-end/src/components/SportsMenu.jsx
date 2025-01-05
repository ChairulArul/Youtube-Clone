import React from "react";
import styled from "styled-components";

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

function extractVideoId(url) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const SportPage = () => {
  const videos = [
    {
      title:
        "JUVENTUS-CAGLIARI 4-0 | HIGHLIGHTS | Comfortable Win for Juve | Coppa Italia Frecciarossa 2024/25",
      videoUrl: "https://youtu.be/Wx_XTlc5M2w?si=lIg6J8xuQ9-hmqJw",
      description: "This is a cool music video",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
    },
    {
      title: "Saya Menantang Pesepakbola Pro Indonesia",
      videoUrl: "https://youtu.be/Pra6HkSSjc8?si=faP6q4uhDAgR29ak",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "FULL HIGHLIGHT! INDONESIA (2) VS (0) ARAB SAUDI | AFC ASIAN QUALIFIERS",
      videoUrl: "https://youtu.be/4F2oOGDyWeY?si=_UDo-OUJUWcrGfeg",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "90+9 INDONESIA VS BAHRAIN | AFC Asian Qualifier",
      videoUrl: "https://youtu.be/PuYIdRaJo4Y?si=cz9NK7ntPIyrqHOt",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Real Madrid 0-4 Barcelona | LaLiga 24/25 Match Highlights",
      videoUrl: "https://youtu.be/EY_Ddus5wic?si=FL54GJx_kPLpa-Lu",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "REF CAM | MLS All-Stars vs Arsenal",
      videoUrl: "https://youtu.be/mLMyXL4dKuk?si=fcU2kyy5Il59UtAI",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Khabib Nurmagomedov vs Conor McGregor | FULL FIGHT | UFC Classic",
      videoUrl: "https://youtu.be/JuBBIJ7adjM?si=Gc0fc-GWLEoBgH5f",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Anthoni Ginting VS Viktor Axelsen | BWF World Tour Finals 2022",
      videoUrl: "https://youtu.be/LanA0vxA_iU?si=e86j_2uxpbbx6E6M",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "Memphis Grizzlies vs LA Clippers Full Game Highlights | Dec 23 | 2025 NBA Season",
      videoUrl: "https://youtu.be/8414WvO14Co?si=pPGoCBpJWB4ytKzG",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "Idzes' outstanding performance against Juventus | Top Moment | Serie A 2024/25",
      videoUrl: "https://youtu.be/cvyrHksv5Ts?si=lI53u-7dE3OTEf36",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "Magnus Carlsen vs Alireza Firouzja | Full Game | Watch until the end | World Rapid 2021",
      videoUrl: "https://youtu.be/1WEyUZ1SpHY?si=GW5FmmgLxTMTs4iq",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "HIGHLIGHT! INDONESIA (5) Vs (1) THAILAND | ASEAN FUTSAL CHAMPIONSHIP 2024",
      videoUrl: "https://youtu.be/VBP9dHZO2Wg?si=IKE-sWyWRq11L35v",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
  ];

  return (
    <VideoContainer>
      {videos.map((video, index) => {
        const videoId = extractVideoId(video.videoUrl);
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

export default SportPage;
