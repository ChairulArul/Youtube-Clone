import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [videos, setVideos] = useState([]); // Menyimpan hasil pencarian video
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { search } = useLocation(); // Mengambil parameter query dari URL

  const API_KEY = "AIzaSyC5w_tQ1KXN9T4M5ctLrmQJ2JJ_NQ1zHmM"; // Ganti dengan API Key Anda
  const API_URL = "https://www.googleapis.com/youtube/v3/search";

  // Ambil query pencarian dari URL
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
            maxResults: 10, // Tentukan jumlah hasil pencarian
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
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {videos.length === 0 && !loading && <p>No videos found</p>}
      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
