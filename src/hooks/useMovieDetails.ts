import { useEffect, useState } from "react";
import { headers } from "../services/config";
import APICLient, { axiosInstance } from "../services/api-client";
import { CanceledError } from "axios";
import Genre from "../entities/Genre";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Movie from "../entities/Movie";
import Person from "../entities/Person";
import Video from "../entities/Video";

const apiClient = new APICLient<Movie>("/movie");

interface CreditsResponse {
  cast: Person[];
  crew: Person[];
}

interface VideosResponse {
  results: Video[];
}

interface MovieDetailsResponse {
  id: number;
  imdb_id: string;
  genres: Genre[];
  backdrop_path: string;
  homepage: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  spoken_languages: {};
  status: string;
  tagline: string;
  title: string;
  credits: CreditsResponse;
  videos: VideosResponse;
}

const fetchMovieDetails = (movieId: number) => {
  return axiosInstance
    .get<MovieDetailsResponse>(
      `movie/${movieId}?append_to_response=credits,videos,images,watch/providers,`
    )
    .then((res) => res.data);
};

const useMovieDetails = (movieId: number) =>
  useQuery<MovieDetailsResponse, Error>({
    queryKey: ["details", movieId],
    queryFn: () => fetchMovieDetails(movieId),
    staleTime: ms("10min"),
  });

export default useMovieDetails;
