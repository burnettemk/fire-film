import { create } from "zustand";

interface MovieQuery {
  include_adult?: boolean;
  include_video?: boolean;
  sortOrder?: string;
  language?: string;
  pageNumber?: number;
  searchText?: string;
  keywords?: string;
  cast?: string;
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
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
    // with_keywords: "9715",
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
  setSearchText: (searchText) => set(() => ({ movieQuery: { searchText } })),
}));

export default useMovieQueryStore;
