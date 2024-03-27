import "./App.css";
import HeaderWithInput from "./Components/HeaderWithInput";
import Content from "./Components/Content";
// import RenderGallery from "./Components/RenderGallery";

//zrob hooka z api request

function App() {
  return (
    <>
      <HeaderWithInput>
        <Content />
        {/* <RenderGallery /> */}
      </HeaderWithInput>
    </>
  );
}

export default App;
