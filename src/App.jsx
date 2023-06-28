import { useState } from "react";
import ImageSection from "./Components/ImageSection";
import Button from "./Components/Button";
import "./App.css";

function App() {
  const [image, setImage] = useState(1);

  const onClickRamdomImg = () => setImage(Math.random() * 10);

  return (
    <>
      <ImageSection image={image} />
      <Button setImage={onClickRamdomImg} />
    </>
  );
}

export default App;
