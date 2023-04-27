import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://rickandmortyapi.com/graphql',
    documents: ['src/**/*.ts', 'src/**/*.tsx'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: ['typescript'],
            config: {
                enumsAsTypes: true,
                futureProofEnums: true
            }
        },
    },
};

export default config;
