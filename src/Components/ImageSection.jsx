import "./index.css";

const ImageSection = ({ image }) => {
  return (
    <div className="ImageSection">
      <img
        className="ImageSection__img"
        src={`https://picsum.photos/200/300?random=${image}" alt="random-image`}
      />
    </div>
  );
};

export default ImageSection;
