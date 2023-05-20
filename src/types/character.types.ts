export type character = {
    __typename?: 'Character';
    created?: string;
    episode: Episode[];
    gender?: string;
    id: string;
    image: string;
    location?: Location;
    name: string;
    origin?: Location;
    species?: string;
    status: string;
    type?: string;
}

export interface Character {
    __typename?: 'Character';
    created?: string;
    episode: Episode[];
    gender?: string;
    id: string;
    image: string;
    location?: Location;
    name: string;
    origin?: Location;
    species?: string;
    status: string;
    type?: string;
}

export type Episode = {
    __typename?: 'Episode';
    air_date?: string;
    characters: character[];
    created?: string;
    episode?: string;
    id?: string;
    name?: string;
};

export type Location = {
    __typename?: 'Location';
    created?: string;
    dimension?: string;
    id?: string;
    name?: string;
    residents: character[];
    type?: string;
};
