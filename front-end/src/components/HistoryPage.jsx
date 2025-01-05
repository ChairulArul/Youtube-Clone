import React, { useState } from "react";
import styled from "styled-components";

const videoData = [
  {
    id: 1,
    date: "Today",
    title:
      "399 Ribu ! Setup Gaming Lengkap, Harga Hemat | Fantech Bundling P51 Review !",
    views: "67 thousand",
    duration: "09.10",
    thumbnail:
      "https://i.ytimg.com/vi/dW-8yh58LXM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvL2ZqrAsdX4v9Yjpp-7RmD-ER8w",
  },
  {
    id: 2,
    date: "Yesterday",
    title:
      "YAKIN MASIH MAU MAKAN, dari diinjak-injak sampai pakai ketiak Ini proses pembuatan makanan..",
    views: "3.3 million ",
    duration: "08.44",
    thumbnail:
      "https://i.ytimg.com/vi/d71wxYIy9bE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcBknsRwarJPd8IXo9ifPHG5815w",
  },
  {
    id: 3,
    date: "Yesterday",
    title: "PC 15 Juta VS PS5 Pro | Test 4K Ray Tracing, Mending Mana? ",
    views: "65 thousand ",
    duration: "13.52",
    thumbnail:
      "https://i.ytimg.com/vi/X4jqPAXlRqg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpYh44-yDTVpq3JwBtb5DrCf_TPw",
  },
  {
    id: 4,
    date: "Yesterday",
    title: "2.000 Orang Bertarung Demi $5.000.000",
    views: "107 million ",
    duration: "24.44",
    thumbnail: "https://i.ytimg.com/vi/pqSNnfDpwRo/maxresdefault.jpg",
  },
  {
    id: 5,
    date: "Yesterday",
    title:
      "Perjalanan Ke Pusat Bumi (Memakan waktu 8 hari, saya kehilangan 10 kg)",
    views: "25 million ",
    duration: "35.42",
    thumbnail: "https://i.ytimg.com/vi/XE_SzHgYtHc/sddefault.jpg",
  },
  {
    id: 6,
    date: "Yesterday",
    title:
      "Bagaimana rasanya tumbuh besar di kota terdingin di dunia? −71°C Yakutsk",
    views: "3,5 million ",
    duration: "15.01",
    thumbnail:
      "https://i.ytimg.com/vi/s99VfNsqZNg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFSJDtkgpHo4gBF9zEgfdE2Ui2Vw",
  },
];

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Group = styled.div`
  margin-bottom: 20px;
`;

const DateHeading = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Video = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

const Details = styled.div`
  margin-left: 15px;
  flex: 1;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const Info = styled.p`
  font-size: 14px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: red;
  }
`;

const History = () => {
  const [videos, setVideos] = useState(videoData);

  const handleDelete = (id) => {
    const updatedVideos = videos.filter((video) => video.id !== id);
    setVideos(updatedVideos);
  };

  const groupedData = videos.reduce((acc, video) => {
    if (!acc[video.date]) acc[video.date] = [];
    acc[video.date].push(video);
    return acc;
  }, {});

  return (
    <Container>
      <Header>History</Header>
      {Object.keys(groupedData).map((date) => (
        <Group key={date}>
          <DateHeading>{date}</DateHeading>
          {groupedData[date].map((video) => (
            <Video key={video.id}>
              <Thumbnail src={video.thumbnail} alt={video.title} />
              <Details>
                <Title>{video.title}</Title>
                <Info>
                  {video.views} x views • {video.duration}
                </Info>
              </Details>
              <DeleteButton onClick={() => handleDelete(video.id)}>
                X
              </DeleteButton>
            </Video>
          ))}
        </Group>
      ))}
    </Container>
  );
};

export default History;
