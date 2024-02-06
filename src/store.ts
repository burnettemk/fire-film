import { create } from "zustand";

interface MovieQuery {
  include_adult?: boolean;
  include_video?: boolean;
  sort_by?: string;
  language?: string;
  page?: number;
  with_keywords?: string;
  with_cast?: string;
  with_genres?: string;
  "vote_count.gte"?: number;
}

interface TVQuery {
  include_adult?: boolean;
  sort_by?: string;
  language?: string;
  page?: number;
  with_genres?: string;
  "vote_count.gte"?: number;
}

interface isMoviesSelectedStore {
  isSelected: boolean;
  setIsMoviesSelected: (isSelected: boolean) => void;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setIncludeAdult: (include_adult: boolean) => void;
  setIncludeVideo: (include_video: boolean) => void;
  setSortOrder: (sortOrder: string) => void;
  setLanguage: (language: string) => void;
  setKeywords: (keywords: string) => void;
  setCast: (cast: string) => void;
  setGenres: (genres: string) => void;
  setPageNumber: (page: number) => void;
}

interface TVQueryStore {
  tvQuery: TVQuery;
  setIncludeAdult: (include_adult: boolean) => void;
  setSortOrder: (sortOrder: string) => void;
  setLanguage: (language: string) => void;
  setGenres: (genres: string) => void;
  setPageNumber: (page: number) => void;
}

export const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
    "vote_count.gte": 250,
  },
  setIncludeAdult: (include_adult) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, include_adult } })),
  setIncludeVideo: (include_video) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, include_video } })),
  setSortOrder: (sort_by) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sort_by } })),
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
}));

export const useTVQueryStore = create<TVQueryStore>((set) => ({
  tvQuery: {
    include_adult: false,
    include_null_first_air_dates: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
    "vote_count.gte": 250,
  },
  setIncludeAdult: (include_adult) =>
    set((store) => ({ tvQuery: { ...store.tvQuery, include_adult } })),
  setSortOrder: (sort_by) =>
    set((store) => ({ tvQuery: { ...store.tvQuery, sort_by } })),
  setLanguage: (language) =>
    set((store) => ({ tvQuery: { ...store.tvQuery, language } })),
  setGenres: (with_genres) =>
    set((store) => ({ tvQuery: { ...store.tvQuery, with_genres } })),
  setPageNumber: (page) =>
    set((store) => ({ tvQuery: { ...store.tvQuery, page } })),
}));

export const useIsMoviesSelectedStore = create<isMoviesSelectedStore>(
  (set) => ({
    isSelected: true,
    setIsMoviesSelected: (isSelected) => set((store) => ({ isSelected })),
  })
);
