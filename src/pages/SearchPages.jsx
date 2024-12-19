import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const VideoCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 15px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 120px;
  border-radius: 5px;
  object-fit: cover;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const ChannelName = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0;
`;

const VideoDetails = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin-top: 10px;
`;

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { search } = useLocation();

  const API_KEY = "AIzaSyC5w_tQ1KXN9T4M5ctLrmQJ2JJ_NQ1zHmM"; // Masukkan API Key Anda
  const API_URL = "https://www.googleapis.com/youtube/v3/search";

  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query");

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios
        .get(API_URL, {
          params: {
            part: "snippet",
            q: query,
            type: "video",
            key: API_KEY,
            maxResults: 10,
          },
        })
        .then((response) => {
          setVideos(response.data.items);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch videos");
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {videos.length === 0 && !loading && <p>No videos found</p>}
      {videos.map((video) => (
        <VideoCard key={video.id.videoId}>
          <Thumbnail
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <VideoInfo>
            <Title>{video.snippet.title}</Title>
            <ChannelName>{video.snippet.channelTitle}</ChannelName>
            <VideoDetails>
              {/* Data tambahan bisa didapatkan melalui YouTube API */}
              Published:{" "}
              {new Date(video.snippet.publishTime).toLocaleDateString()}
            </VideoDetails>
            <Description>{video.snippet.description}</Description>
          </VideoInfo>
        </VideoCard>
      ))}
    </Container>
  );
};

export default SearchPage;
