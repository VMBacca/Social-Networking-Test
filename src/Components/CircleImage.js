function CircleImage({ image, active = false }) {
  return (
    <img
      src={image}
      alt="imagename"
      style={{
        height: 40,
        width: 40,
        borderRadius: 22,
        marginRight: 20,
        border: active ? "2px solid green" : "2px solid #ffffff2a",
      }}
    />
  );
}

export default CircleImage;
