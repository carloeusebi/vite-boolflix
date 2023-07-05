export const storeMovies = movies => {
    store.movies = movies.map(({ title, original_title, original_language, vote_average }) => ({
        title,
        original_title,
        original_language,
        vote_average,
    }));
};

export const storeTvShows = tvShows => {
    store.tvShows = tvShows.map(({ name, original_name, original_language, vote_average }) => ({
        name,
        original_name,
        original_language,
        vote_average,
    }));
};