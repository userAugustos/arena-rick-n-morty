import { character } from "../types/character.types.ts";
import {Link, useLocation} from "react-router-dom";
import "../styles/card.css";

const base = import.meta.env.VITE_BASE_PATH

export function Card({ character }: { character: character }) {
  const location = useLocation();

  return (
      <Link
          className="card flex"
          key={character.id}
          to={`${base}/character/${character.id}`}
          state={{ backgroundLocation: location }}
      >
      <img src={character.image} alt="personagem" />
      <section className="info flex">
        {/*in case we doing redirect in future*/}
        <section key={character.id}>
          <h2>{character.name}</h2>
          <span className={`status_icon ${character.status}`}></span>
          <span>{character.status}</span>
        </section>
        {/* key={character.location?.id} */}
        <section>
          <span>Ultima vez visto em:</span>
          <p>{character.location?.name}</p>
        </section>
        {/* key={character.episode[0].id} */}
        <section>
          <span>Primeira aparição:</span>
          <p>{character.episode[0].name}</p>
        </section>
      </section>
      </Link>
  );
}
