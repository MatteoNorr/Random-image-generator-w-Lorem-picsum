import { useState } from "react";
import ImageSection from "./Components/ImageSection";
import Button from "./Components/Button";
import Title from "./Components/Title";
import "./App.css";

function App() {
  const [image, setImage] = useState(1);

  const onClickRamdomImg = () => setImage(Math.random() * 10);

  return (
    <>
      <Title />
      <ImageSection image={image} />
      <Button setImage={onClickRamdomImg} />
    </>
  );
}

export default App;
