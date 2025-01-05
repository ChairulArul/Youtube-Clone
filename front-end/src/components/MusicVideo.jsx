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
  width: 230px;
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

const MusicPage = () => {
  const videos = [
    {
      title: "Usher - Hey Daddy (Daddy’s home) (slowed)",
      videoUrl: "https://youtu.be/9-WagXIJZo4?si=1Vj3ZTCR0u35vPvR",
      description: "This is a cool music video",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
    },
    {
      title: "Yung Kai - Blue",
      videoUrl: "https://youtu.be/bGc5lGxzMQw",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Chase Atlantic - Swim",
      videoUrl: "https://youtu.be/mC9v5FaLt84?si=sCp_kq-eHF0HDfW7",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Dewa 18 - Kangen",
      videoUrl: "https://youtu.be/YKK5_OQiEa4?si=39yFIKTdPjgli8Mx",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Queen – Bohemian Rhapsody (Official Video Remastered)",
      videoUrl: "https://youtu.be/fJ9rUzIMcZQ?si=6CrdvQi9F0wXWZQ2",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Tame Impala - The Less I Know The Better (Audio)",
      videoUrl: "https://youtu.be/2SUwOgmvzK4?si=CVo-MAeQG-1hDUJH",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "LADY GAGA - JUDAS (SLOWED) ANIMATION FAN GOJO VS SUKUNA JJK",
      videoUrl: "https://youtu.be/0NAWJ8jDXmE?si=2Yy0BozpYsFuLyWd",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "The Weeknd, JENNIE & Lily Rose Depp - One Of The Girls (Official Audio)",
      videoUrl: "https://youtu.be/f1r0XZLNlGQ?si=0XxrpzeKkZ9Onbm9",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Charlie Puth - Cheating on You [Official Video]",
      videoUrl: "https://youtu.be/fOoSbUoayQE?si=4RSI4vVz3CN-hbMB",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "SZA - Good Days (Audio)",
      videoUrl: "https://youtu.be/0BdlKkvjEgA?si=Wtz4o7S5by205Jdo",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video)",
      videoUrl: "https://youtu.be/kPa7bsKwL-c?si=-QnmYApqRbaOfcz5",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Ricky Montgomery - Line Without a Hook (Official Lyric Video)",
      videoUrl: "https://youtu.be/8JW6qzPCkE8?si=MauXSKXOI79FW9c9",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Lil Uzi Vert - 20 Min",
      videoUrl: "https://youtu.be/bnFa4Mq5PAM?si=oMkqyYe4OxSEU-Bo",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Juice WRLD - Lucid Dreams (Official Music Video)",
      videoUrl: "https://youtu.be/mzB1VGEGcSU?si=lMu9tFGr3svAw8MI",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "505",
      videoUrl: "https://youtu.be/qU9mHegkTc4?si=u2O2AdmiB-tyXDNT",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Travis Scott - SICKO MODE ft. Drake",
      videoUrl: "https://youtu.be/6ONRf7h3Mdk?si=a8xOGgd46iLaAb2O",
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

export default MusicPage;
