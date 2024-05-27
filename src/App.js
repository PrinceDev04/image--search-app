import { useEffect, useState } from "react";
import "./App.css";
import Photo from "./Components/Photo";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  let page = '1';
  const accessKey = "x4KtdaOng5vomt_oNW2Y42IyiILtHERNc1pVo8vqucg";
  const Url = `https://api.unsplash.com/search/photos?${page}&query=${query}&client_id=${accessKey}`;
  const randomUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

  async function fetchImage() {
    try {
      const response = await axios.get(randomUrl);
      setPhotos(response.data);
      // console.log(response.data);
    } catch (error) {
      // console.error("Error fetching photos:", error);
    }
  }

  async function main() {
    try {
      const response = await axios.get(Url);
      setPhotos(response.data.results);
    } catch (error) {
      // console.error("Error fetching photos:", error);
    }
  }
  function handleSearch(event) {
    event.preventDefault();
    main();
  }

  useEffect(() => {
    if (query) {
      main();
    } else {
      fetchImage();
    }
  }, [query]);
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Image Search App</h1>
        <div className="input__div">
          <input
            type="text"
            placeholder="Search by keywords"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="photo__div">
        {photos &&
          photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
      </div>
    </div>
  );
}

export default App;
