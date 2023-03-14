import React from "react";
import "./moviedetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

export default function MovieDetails() {
  const [singlMovie, setSinglMovie] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    await axios.get(url).then((res) => {
      setSinglMovie(res.data);
    });
  };
  console.log(singlMovie);
  return (
    <>
      <div className="movie">
        <div className="movie__intro">
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              singlMovie ? singlMovie.backdrop_path : ""
            }`}
          />
        </div>
        <div className="movie__detail">
          <div className="movie__detailLeft">
            <div className="movie__posterBox">
              <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original${
                  singlMovie ? singlMovie.poster_path : ""
                }`}
              />
            </div>
          </div>
          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name">
                {singlMovie ? singlMovie.original_title : ""}
              </div>
              <div className="movie__tagline">
                {singlMovie ? singlMovie.tagline : ""}
              </div>
              <div className="movie__rating">
                {singlMovie ? singlMovie.vote_average : ""}{" "}
                <i className="fas fa-star" />
                <span className="movie__voteCount">
                  {singlMovie ? "(" + singlMovie.vote_count + ") votes" : ""}
                </span>
              </div>
              <div className="movie__runtime">
                {singlMovie ? singlMovie.runtime + " mins" : ""}
              </div>
              <div className="movie__releaseDate">
                {singlMovie ? "Release date: " + singlMovie.release_date : ""}
              </div>
              <div className="movie__genres">
                {singlMovie && singlMovie.genres
                  ? singlMovie.genres.map((genre) => (
                      <>
                        <span className="movie__genre" id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{singlMovie ? singlMovie.overview : ""}</div>
            </div>
          </div>
        </div>

        <button className="btn" onClick={() => navigate(-1)}>
          GoBack
        </button>
      </div>
    </>
  );
}
