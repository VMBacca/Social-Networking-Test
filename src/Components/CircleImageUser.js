function CircleImageUser({ image }) {
  return (
    <img
      src={image}
      alt="imagename"
      style={{
        height: 80,
        width: 80,
        borderRadius: 50,
        marginRight: 20,
        border: "2px solid green",
      }}
    />
  );
}

export default CircleImageUser;
