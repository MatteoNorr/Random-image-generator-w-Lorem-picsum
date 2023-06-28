import { useState } from "react";
import ImageSection from "./Components/ImageSection";
import Button from "./Components/Button";
import Title from "./Components/Title";
import ImageNumber from "./Components/ImageNumber";
import InputNumber from "./Components/InputNumber";
import "./App.css";

function App() {
  const [image, setImage] = useState(1);
  const [numbImage, setNumbImage] = useState();
  const [booleanSwitch, setBooleanSwitch] = useState(false);

  const onClickRamdomImg = () => {
    setImage(parseInt(Math.random() * 100));
    setNumbImage(image);
    setBooleanSwitch(true);
  };

  return (
    <>
      <Title />
      <InputNumber setNumber={setImage} />
      <ImageSection image={image} />
      {booleanSwitch && <ImageNumber numbImage={image} />}
      <Button setImage={onClickRamdomImg} />
    </>
  );
}

export default App;
