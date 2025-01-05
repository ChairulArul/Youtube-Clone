import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const VideoCard = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bgLighter};
    transition: background-color 0.3s;
  }
`;

const Thumbnail = styled.img`
  width: 360px;
  height: 202px;
  object-fit: cover;
  border-radius: 8px;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1.5;
`;

const Metadata = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Description = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0 0;
`;

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const API_KEY = "AIzaSyC5w_tQ1KXN9T4M5ctLrmQJ2JJ_NQ1zHmM";

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");

    if (query) {
      const fetchVideos = async () => {
        try {
          const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
              params: {
                part: "snippet",
                maxResults: 100,
                q: query,
                key: API_KEY,
              },
            }
          );
          setVideos(response.data.items);
        } catch (err) {
          setError("Terjadi kesalahan saat mengambil data.");
        } finally {
          setLoading(false);
        }
      };

      fetchVideos();
    }
  }, [location.search]);

  if (loading) return <div>Memuat...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      {videos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          onClick={() =>
            window.open(
              `https://www.youtube.com/watch?v=${video.id.videoId}`,
              "_blank"
            )
          }
        >
          <Thumbnail
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
          <VideoDetails>
            <Title>{video.snippet.title}</Title>
            <Metadata>
              {video.snippet.channelTitle} • 4.8 rb x ditonton • 2 hari yang
              lalu
            </Metadata>
            <Description>{video.snippet.description}</Description>
          </VideoDetails>
        </VideoCard>
      ))}
    </Container>
  );
};

export default SearchResults;
