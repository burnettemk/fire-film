import { create } from "zustand";

interface MovieQuery {
  include_adult?: boolean;
  include_video?: boolean;
  sortOrder?: string;
  language?: string;
  page?: number;
  searchText?: string;
  keywords?: string;
  cast?: string;
  with_genres?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setIncludeAdult: (include_adult: boolean) => void;
  setIncludeVideo: (include_video: boolean) => void;
  setSortOrder: (sortOrder: string) => void;
  setLanguage: (language: string) => void;
  setSearchText: (searchText: string) => void;
  setKeywords: (keywords: string) => void;
  setCast: (cast: string) => void;
  setGenres: (genres: string) => void;
  setPageNumber: (page: number) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  },
  setIncludeAdult: (include_adult) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, include_adult } })),
  setIncludeVideo: (include_video) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, include_video } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sortOrder } })),
  setLanguage: (language) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, language } })),
  setKeywords: (keywords) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, keywords } })),
  setCast: (cast) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, cast } })),
  setGenres: (with_genres) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, with_genres } })),
  setPageNumber: (page) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, page } })),
  setSearchText: (searchText) => set(() => ({ movieQuery: { searchText } })),
}));

export default useMovieQueryStore;
