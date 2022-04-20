import "./CircleImage.css";

function CircleImage({ image, active = false }) {
  return (
    <img
      className="image-name"
      src={image}
      alt="imagename"
      style={{
        border: active ? "2px solid green" : "2px solid #ffffff2a",
      }}
    />
  );
}

export default CircleImage;
