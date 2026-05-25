function DetailsRating({ item }) {
  if (!item.imdbRating || item.imdbRating === "N/A") return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, padding: "14px 18px", background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
      <div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: "#f5c518", lineHeight: 1 }}>{item.imdbRating}</div>
        <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 1 }}>IMDb</div>
      </div>
      {item.imdbVotes && item.imdbVotes !== "N/A" && (
        <>
          <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#fff" }}>{item.imdbVotes}</div>
            <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>Votos</div>
          </div>
        </>
      )}
      {item.rated && item.rated !== "N/A" && (
        <>
          <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#fff" }}>{item.rated}</div>
            <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>Classificação</div>
          </div>
        </>
      )}
    </div>
  );
}
export default DetailsRating;