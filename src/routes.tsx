import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MovieDetailPage from "./pages/MovieDetailPage";
import SeriesDetailPage from "./pages/SeriesDetailPage";
import PeopleHomePage from "./pages/PeopleHomePage";
import PersonDetailPage from "./pages/PersonDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "films/:id", element: <MovieDetailPage /> },
      { path: "series/:id", element: <SeriesDetailPage /> },
      {
        path: "people",
        element: <PeopleHomePage />,
        children: [{ path: "people/:id", element: <PersonDetailPage /> }],
      },
    ],
  },
]);

export default router;
