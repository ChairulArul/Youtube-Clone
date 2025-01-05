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

const NewsPage = () => {
  const videos = [
    {
      title:
        "Paus Fransiskus Murka Serangan Udara Israel Tewaskan 7 Anak di 1 Keluarga Gaza",
      videoUrl: "https://youtu.be/tUoT7s9QLQ0?si=OgJj2u5sR2Y04k_r",
      description: "This is a cool music video",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
    },
    {
      title:
        "Mahfud MD Ingatkan Prabowo soal Berantas Korupsi: Katanya Koruptor Disikat, Dikejar ke Antartika",
      videoUrl: "https://youtu.be/Xw6a8jQfU2g?si=VZCRAJR-m0_no92X",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Putin challenged on his 25-year rule of Russia | BBC News",
      videoUrl: "https://youtu.be/-BBZPqf_zM4?si=-0AH4nzuAH44PGez",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "BERINGASNYA AGUS BUNTUNG! Buntuti Korban ke Indekos, Maksa Masuk Kamar Dorong Pintu",
      videoUrl: "https://youtu.be/Rd6pzRnvSA4?si=T0viLhteB8LUS5x6",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Trump reacts to critics saying Elon Musk is in charge",
      videoUrl: "https://youtu.be/E7ufDsZlOgM?si=IWsrEuCrRn6DtEfF",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "Komentar Mengejutkan Rocky Gerung Untuk Prabowo Subianto | E-Talkshow tvOne",
      videoUrl: "https://youtu.be/4oC8rMdhyHg?si=1kUPNvw3QUzMTWji",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "Gus Miftah Dirujak usai 'Olok-olok' Penjual Es Teh, Prank Borong hingga Rem Guyon Blong",
      videoUrl: "https://youtu.be/sU5dLVfvzS0?si=kOY0Oz1ZYNd-xLsy",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Kita Marah, dan Ini Peringatan Daruratnya | Mata Najwa",
      videoUrl: "https://youtu.be/jyR79y-P1TI?si=Qbbu71s_-ciGYWHa",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Rusia Bombardir Bandara dan Pabrik Drone Ukraina",
      videoUrl: "https://youtu.be/K871cyX_6FE?si=f2Msr66k2W-Ce9Dp",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Awal Mula dan Sosok Pengusul Kenaikan PPN 12 Persen",
      videoUrl: "https://youtu.be/DL4EeMRH7q0?si=mFaZIs45BC8EYw7K",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title: "Arab Memanas! Houthi Serang Israel, AS Balas Bombardir Yaman",
      videoUrl: "https://youtu.be/ee2da-PEn0I?si=LvTXx2f0qD58bnuE",
      description: "This is another great music video",
      thumbnail:
        "https://i.ytimg.com/vi/bGc5lGxzMQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALGpo-ykuiPutPmnFoF_k6wXIdZw",
    },
    {
      title:
        "Iran Luncurkan Ratusan Rudal ke Israel Hingga Marissa Haque Meninggal Dunia",
      videoUrl: "https://youtu.be/J6sbNMwYZAI?si=117mjro-eN5aOjIm",
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

export default NewsPage;
