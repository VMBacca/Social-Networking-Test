const Story = ({ img, height }) => {
  return (
    <div
      style={{
        height: 50,
        width: "10%",
        borderRadius: 5,
        overflow: "hidden",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <img
        style={{
          zIndex: 3,
          height: height,
          position: "absolute",
        }}
        src={img}
        alt="eventimage"
      />
    </div>
  );
};

export default Story;
