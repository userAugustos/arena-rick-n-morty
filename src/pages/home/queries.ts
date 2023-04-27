import {graphql} from "../../gql";

export const getAllCharacters = graphql(`
    query HomeGetAllCharactersQuery($page: Int!) {
        characters(page: $page, filter: { name: "rick" }) {
            info {
                count
            }
            results {
                id
                name
                species
                dimension: location {
                    dimension
                }
                type
                status
                image
            }
        }
    }
`);
