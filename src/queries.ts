import {graphql} from "./gql";

export const getCharacters = graphql(`
    query GetCharacters($page: Int!, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                count
            }
            results {
                id
                name
                species
                status
                image
                location {
                    id
                    dimension
                    name
                }
                episode{
                    id
                    name
                }
            }
        }
    }
`);
