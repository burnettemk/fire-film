import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import MovieGrid from "./components/MovieGrid";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({
    components: {
        MovieList: MovieGrid,
    },
    config
});

export default theme