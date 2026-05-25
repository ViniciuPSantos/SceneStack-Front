function DetailsBanner({ poster, onBack }) {
  return (
    <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
      <img
        src={poster !== "N/A" ? poster : "https://placehold.co/700x320/111/333?text=."}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", filter: "brightness(0.35)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, #0a0a0a 100%)" }} />
      <button
        onClick={onBack}
        style={{ position: "absolute", top: 20, left: 20, display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(255,255,255,0.2)", borderRadius: 50, padding: "8px 16px", color: "#fff", fontSize: 13, cursor: "pointer" }}
      >
        ← Voltar
      </button>
    </div>
  );
}
export default DetailsBanner;