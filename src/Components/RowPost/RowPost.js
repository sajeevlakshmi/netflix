import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else console.log("array empty");
      });
  };
  return (
    <div className="row">
      <h3 className="row-title">{props.title}</h3>
      <div className="posters">
        {movies.map((obj) => (
          <div>
            <img
              onClick={() => {
                handleMovie(obj.id);
              }}
              className={props.isSmall ? "smallposter" : "poster"}
              alt="poster"
              src={
                props.isSmall
                  ? `${imageUrl + obj.backdrop_path}`
                  : `${imageUrl + obj.poster_path}`
              }
            />
            <p className={props.isSmall ? "show-movie-name" : "hide-movie"}>
              {obj.original_title}
            </p>
          </div>
        ))}
      
      </div>
      <div style={{width:'100%'}}>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
      </div>
    </div>
  );
}

export default RowPost;
