function DetailsActions({ imdbID }) {
  if (!imdbID) return null;

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <a
        href={`https://www.imdb.com/title/${imdbID}`}
        target="_blank"
        rel="noreferrer"
        style={{
          flex: 1,
          background: "#e53535",
          color: "#fff",
          borderRadius: 10,
          padding: "13px",
          fontSize: 14,
          fontWeight: 500,
          textAlign: "center",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        ↗ Ver no IMDb
      </a>
    </div>
  );
}
export default DetailsActions;