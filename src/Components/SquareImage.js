function SquareImage({ squareimg }) {
  return (
    <img
      src={squareimg}
      alt="simagename"
      style={{
        height: 90,
        width: 140,
        borderRadius: 10,
      }}
    />
  );
}

export default SquareImage;
