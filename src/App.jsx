import { useState } from "react";
import "./App.css";
// import RenderGallery from "./Components/RenderGallery";

const API_KEY = "43076509-033205b5aa7a71dbae5bfd357";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [galleryArray, setGalleryArray] = useState([]);

  const getGallery = async (input) => {
    try {
      const resp = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${input}&image_type=photo`,
      );
      // console.log(resp);
      const extractedResp = await resp.json();
      // console.log(extractedResp);
      return extractedResp;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form
        className="search-form"
        id="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          getGallery(inputValue)
            .then((gallery) => {
              console.log(gallery.hits);
              setGalleryArray(gallery.hits);
            })
            .catch((error) => console.log(error.message));

          setIsButtonClicked(true);
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="searchQuery"
          autoComplete="off"
          placeholder="Search images..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {isButtonClicked === true ? (
          galleryArray.map((galleryItem) => (
            <div key={galleryItem.id}>
              <p>{galleryItem.user}</p>
              <img src={galleryItem.largeImageURL} width="500" height="500" />
            </div>
          ))
        ) : (
          <div>No to siema</div>
        )}
      </div>
    </>
  );
}

export default App;
