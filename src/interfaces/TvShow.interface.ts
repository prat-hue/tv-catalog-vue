export interface TvShow {
    image: {
        medium: string,
        original: string
    } | undefined,
    externals?: {
        thetvdb: number
    },
    summary: string,
    status: string,
    url: string,
    name: string,
    genres: string[],
    language: string,
    averageRuntime: string,
    id: number
}
