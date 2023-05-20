import { character } from "../types/character.types.ts";
import "../styles/card.css";
export function Card({ character }: { character: character }) {
  return (
    <div className="card flex" key={character.id}>
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
    </div>
  );
}
