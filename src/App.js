import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componant/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./componant/movieList/MovieList";
import MovieDetails from "./pages/moviedetail/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetails />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
