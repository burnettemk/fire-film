import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genre/movie/list', {langauge: 'en'})

export default useGenres;