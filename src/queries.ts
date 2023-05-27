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

export const getCharacter = graphql(`
    query GetCharacter($id: ID!){
        character(id: $id) {
            name,
            status,
            species,
            gender,
            origin {
                id,
                name,
                type,
                dimension,
            },
            location {
                id,
                name,
                dimension,
                residents {
                    id,
                    name
                }
            },
            image,
            episode {
                id,
                name,
                episode
            },
            __typename
        }
    }
`)
