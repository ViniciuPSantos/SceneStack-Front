import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { genericDetails } from "../services/api";
import { getMovieById, getSerieById } from "../services/api";
import DetailsBanner from "../components/details/DetailsBanner";
import DetailsHero from "../components/details/DetailsHero";
import DetailsRating from "../components/details/DetailsRating";
import DetailsInfo from "../components/details/DetailsInfo";
import DetailsAction from "../components/details/DetailsAction";

function Details() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function load() {
      const response = type === "series"
        ? await getSerieById(id)
        : await getMovieById(id);
      setItem(response.data);
    }
    load();
  }, [id, type]);

  if (!item) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0a0a0a", color: "#555" }}>
      Carregando...
    </div>
  );

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f0f0f0" }}>
      <DetailsBanner poster={item.poster} onBack={() => navigate(-1)} />
      <div style={{ padding: "0 24px 40px", marginTop: "-80px", position: "relative" }}>
        <DetailsHero item={item} />
        <DetailsRating item={item} />
        <DetailsInfo item={item} />
        <DetailsAction imdbID={item.imdbID} />
      </div>
    </div>
  );
}
export default Details;