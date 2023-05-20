import "./styles/App.css";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { useQuery } from "urql";
import { getCharacters } from "./queries.ts";
import { variablesSchema } from "./types/variables.types.ts";
import { Card } from "./components/card.tsx";
import { Loading } from "./components/loading.tsx";

const base = import.meta.env.VITE_BASE_PATH

function App() {
  const [variables, setVariables] = useState<variablesSchema>({
    page: 1,
    filter: {},
  });

  const [{ data, fetching, error }] = useQuery({
    query: getCharacters,
    variables,
  });
  const handleSearchCharacter = debounce((event: HTMLInputElement) => {
    setVariables({
      ...variables,
      filter: {
        ...variables.filter,
        name: event.value,
      },
    });
  }, 1000);

  const handleSearchByStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "default") {
      return;
    }
    setVariables({
      ...variables,
      filter: {
        ...variables.filter,
        status: e.target.value,
      },
    });
  };

  useEffect(() => {
    document.querySelector("#root")?.scrollIntoView({
      behavior: "smooth",
    });
  }, [data, variables]);

  return (
    <div className="container flex">
      <div className="hero center-flex">
        <h1>The Rick 'n Morty Wiki</h1>
        <img src={`${base}/rick-n-morty.png`} alt="" />
      </div>
      <div className="content flex">
        <section className="inputs flex">
          <input
            type="text"
            name="character"
            id="character"
            onKeyUp={(e) => handleSearchCharacter(e.currentTarget)}
            placeholder="Search"
          />
          <select name="status" id="status" onChange={handleSearchByStatus}>
            <option value="default" className="blur">
              Status
            </option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
          </select>
        </section>
        {fetching && <Loading />}
        {error && <p>{error?.message}</p>}
        {!fetching && data?.characters && (
          <>
            <ul className="list flex">
              {data?.characters?.results?.map((character: any) => (
                  <Card character={character} />
              ))}
            </ul>
            <section className="prev-next flex">
              <button
                onClick={() =>
                  setVariables({ ...variables, page: variables.page - 1 })
                }
              >
                {"<"}
              </button>
              <button
                onClick={() =>
                  setVariables({ ...variables, page: variables.page + 1 })
                }
              >
                {">"}
              </button>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
