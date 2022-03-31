const HeaderSearch = () => {
  return (
    <div style={{ marginLeft: 40 }}>
      <input
        type="text"
        placeholder="Enter your search term"
        style={{
          height: 45,
          width: 250,
          borderRadius: 25,
          backgroundColor: "#ffffff2a",
          border: "none",
          outline: "none",
          color: "white",
          padding: "0 15px",
        }}
      />
      <button
        style={{
          marginLeft: 10,
          height: 45,
          width: 100,
          color: "white",
          fontSize: "16",
          borderRadius: 25,
          border: "none",
          outline: "none",
          cursor: "pointer",
          backgroundColor: "#1878f0",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default HeaderSearch;
