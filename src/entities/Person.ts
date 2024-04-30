import Movie from "./Movie";

interface Person {
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  known_for: Movie[];
  job?: string;
}

export default Person;
