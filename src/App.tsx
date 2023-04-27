import './App.css'
import { useState} from "react";

import { debounce } from "lodash"
import {useQuery} from "urql";
import { getAllCharacters } from "./pages/home/queries.ts";

function App() {
    const [page, setPage] = useState(1);

    const [{ data, fetching }, execute] = useQuery({
        query: getAllCharacters,
        variables: {
            page
        },
    });

    const handleSearchCharacter = debounce((event: HTMLInputElement) => {
        // hmm talvez atualizar as variaveis?
        execute()
    }, 1000)

    return (
        <div>
            { fetching && <p>fetching</p> }
            <input type="text" name="character" id="character" onKeyUp={(e) => handleSearchCharacter(e.currentTarget)}/>
            <ul>
                {data?.characters?.results?.map((character) => (
                    <li key={character?.id}>
                        <p>{character?.name}</p>
                    </li>
                ))}
            </ul>
            <button onClick={()=> setPage(page - 1)}>prev</button>
            <button onClick={() => setPage(page + 1)}>next</button>
        </div>
    );
}

export default App
