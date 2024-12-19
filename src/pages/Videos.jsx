import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VideoCard = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");

  useEffect(() => {
    // Simulasikan pengambilan data video dari server atau database
    const fetchVideos = async () => {
      // Contoh video statis
      const allVideos = [
        { id: 1, title: "React Tutorial" },
        { id: 2, title: "JavaScript Basics" },
        { id: 3, title: "CSS Flexbox" },
        { id: 4, title: "Node.js for Beginners" },
        { id: 5, title: "Web Development Tips" },
      ];

      // Filter video berdasarkan query pencarian
      const filteredVideos = allVideos.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setVideos(filteredVideos);
    };

    fetchVideos();
  }, [searchQuery]);

  return (
    <Container>
      <h2>Videos</h2>
      <h3>Search Results for: "{searchQuery}"</h3>
      <VideoList>
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard key={video.id}>
              <h4>{video.title}</h4>
            </VideoCard>
          ))
        ) : (
          <p>No videos found.</p>
        )}
      </VideoList>
    </Container>
  );
};

export default Videos;
