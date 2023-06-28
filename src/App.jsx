import { useState } from "react";
import ImageSection from "./Components/ImageSection";
import "./App.css";

function App() {
  const [image, setImage] = useState(1);

  return (
    <>
      <ImageSection image={image} />
    </>
  );
}

export default App;
