import "./index.css";

const Button = ({ setImage }) => {
  return (
    <div className="Button-container">
      <button className="Button" onClick={setImage}>
        Generate
      </button>
    </div>
  );
};

export default Button;
