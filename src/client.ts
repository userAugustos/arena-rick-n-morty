import { Client, cacheExchange, fetchExchange } from 'urql';

export const client = new Client({
    url: 'https://rickandmortyapi.com/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        return {
            headers: { 'Content-Type': 'application/json' }
        }
    },
});
