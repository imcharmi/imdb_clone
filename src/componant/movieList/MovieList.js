import React from "react";
import "./movielist.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../card/Card";
import axios from "axios";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  let { type } = useParams();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    let url = `https://api.themoviedb.org/3/movie/${
      type ? type : "popular"
    }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    await axios.get(url).then((res) => {
      setMovieList(res.data.results);
    });
  };
  return (
    <div className="movie__list">
      <h2 className="list__title">
        {" "}
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>

      <div className="list__cards">
        {movieList.map((movie) => {
          return <Card movie={movie} key={movie.id}></Card>;
        })}
      </div>
    </div>
  );
}
