import { reactive } from 'vue';

export const store = reactive({
    movies: [],
    tvShows: [],
    query: 'signore anelli', //todo remove, used for test
})


// ? SINCE THESE FUNCTIONS ARE VERY BULKY I OPTED TO PUT THEM DIRECTLY IN THE STORE, IN ORDER NOT TO POLLUTE TOO MUCH THE MAIN LOGIC

/*************************************************** */
/************ ACTIONS ****************************** */
/*************************************************** */

/**
 * Given an array of movie objects, it maps them filtering only the requested fields and then stores them in the store
 * @param {[Object]} movies 
 */
export const setMovies = movies => {
    store.movies = movies.map(({ id, title, original_title, original_language, vote_average, overview, poster_path, cast }) => {

        const img = `https://image.tmdb.org/t/p/w342${poster_path}`;
        const vote = Math.ceil(vote_average / 2);
        return {
            id,
            title,
            originalTitle: original_title,
            originalLanguage: original_language,
            vote,
            overview,
            cast,
            img
        };
    });
};

/**
 * Given an array of tv shows objects, it maps them filtering only the requested fields and then stores them in the store
 * @param {[Object]} tvShows 
*/
export const setTvShows = tvShows => {

    console.log(tvShows[0]);
    console.log(tvShows[0].cast);

    console.log(Object.keys(tvShows[0]));

    store.tvShows = tvShows.map(({ id, name, original_name, original_language, vote_average, overview, cast, poster_path }) => {

        const img = `https://image.tmdb.org/t/p/w342${poster_path}`;
        const vote = Math.ceil(vote_average / 2);
        return {
            id: id,
            title: name,
            originalTitle: original_name,
            originalLanguage: original_language,
            vote,
            overview,
            cast,
            img
        }
    });
}