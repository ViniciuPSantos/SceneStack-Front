function DetailsHero({ item }) {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-end", marginBottom: 28 }}>
      <img
        src={item.poster !== "N/A" ? item.poster : "https://placehold.co/110x165/222/555?text=Sem+Imagem"}
        alt={item.title}
        style={{ width: 110, height: 165, borderRadius: 10, objectFit: "cover", border: "2px solid rgba(255,255,255,0.1)", flexShrink: 0 }}
      />
      <div style={{ paddingBottom: 4 }}>
        <div style={{ display: "inline-block", background: "#e53535", color: "#fff", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", padding: "3px 10px", borderRadius: 4, marginBottom: 10 }}>
          {(item.type ?? item.Type) === "series" ? "Série" : "Filme"}
        </div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 38, lineHeight: 1, color: "#fff", letterSpacing: 1, marginBottom: 6 }}>
          {item.title}
        </div>
        <div style={{ fontSize: 13, color: "#888", display: "flex", gap: 12, flexWrap: "wrap" }}>
          <span>📅 {item.year}</span>
          {item.runtime && item.runtime !== "N/A" && <span>⏱ {item.runtime}</span>}
          {item.totalSeasons && item.totalSeasons !== "N/A" && <span>📺 {item.totalSeasons} temporadas</span>}
        </div>
      </div>
    </div>
  );
}
export default DetailsHero;