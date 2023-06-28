import "./index.css";

const InputNumber = ({ setNumber }) => {
  return (
    <div className="InputNumber-container">
      <input
        className="InputNumber"
        type="text"
        placeholder="Or search by number..."
        onChange={(e) => setNumber(e.target.value)}
        onClick={() => alert("So boring!")}
      />
    </div>
  );
};

export default InputNumber;
