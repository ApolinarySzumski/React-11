import { useState, useEffect } from "react";

const API_KEY = "43076509-033205b5aa7a71dbae5bfd357";

const HeaderWithInput = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const apiCall = async (input) => {
    const resp = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${input}&image_type=photo`,
    );
    return resp.json();
  };

  useEffect(() => {
    if (isSubmited === true) {
      apiCall(inputValue);
      console.log("Request");
    }
  }, [isSubmited, inputValue]);

  return (
    <>
      <form
        className="search-form"
        id="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmited(!isSubmited);
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
    </>
  );
};

export default HeaderWithInput;
