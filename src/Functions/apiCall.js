const API_KEY = "43076509-033205b5aa7a71dbae5bfd357";

const apiCall = async (input) => {
  const resp = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${input}&image_type=photo`,
  );
  return resp.json();
};

export default apiCall;
