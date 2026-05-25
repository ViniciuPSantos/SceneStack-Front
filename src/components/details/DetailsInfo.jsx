function DetailsInfo({ item }) {
  const detalhes = [
    { label: "Diretor", value: item.director },
    { label: "Elenco", value: item.actors },
    { label: "País", value: item.country },
    { label: "Idioma", value: item.language },
  ].filter(d => d.value && d.value !== "N/A");

  return (
    <>
      {item.plot && item.plot !== "N/A" && (
        <>
          <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10, fontWeight: 500 }}>Sinopse</div>
          <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.7, marginBottom: 24 }}>{item.plot}</p>
        </>
      )}

      {item.genre && item.genre !== "N/A" && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {item.genre.split(", ").map(g => (
            <span key={g} style={{ fontSize: 12, color: "#999", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: 50, padding: "5px 14px" }}>{g}</span>
          ))}
        </div>
      )}

      {detalhes.length > 0 && (
        <>
          <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10, fontWeight: 500 }}>Detalhes</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
            {detalhes.map(d => (
              <div key={d.label} style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{d.label}</div>
                <div style={{ fontSize: 13, color: "#ccc" }}>{d.value}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default DetailsInfo;