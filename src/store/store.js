import { reactive } from 'vue';

export const store = reactive({
    movie: {
        results: [],
        genres: []
    },
    tv: {
        results: [],
        genres: []
    },
    query: 'signore anelli', //todo remove, used for test
    activePage: 'Home',
    genreFilter: '',
    isLoading: false
})


// ? SINCE THESE FUNCTIONS ARE VERY BULKY I OPTED TO PUT THEM DIRECTLY IN THE STORE, IN ORDER NOT TO POLLUTE TOO MUCH THE MAIN LOGIC

/*************************************************** */
/************ ACTIONS ****************************** */
/*************************************************** */

/**
 * Given an array of movie objects, it maps them filtering only the requested fields and then stores them in the store
 * @param {[Object]} movie 
 */
export const setMovies = movie => {
    store.movie.results = movie.map(({ id, title, original_title, original_language, vote_average, overview, poster_path, genre_ids }) => {

        const img = `https://image.tmdb.org/t/p/w342${poster_path}`;
        const vote = Math.ceil(vote_average / 2);
        return {
            id,
            title,
            originalTitle: original_title,
            originalLanguage: original_language,
            vote,
            overview,
            genre_ids,
            img
        };
    });
};

/**
 * Given an array of tv shows objects, it maps them filtering only the requested fields and then stores them in the store
 * @param {[Object]} tv 
*/
export const setTvs = tv => {

    store.tv.results = tv.map(({ id, name, original_name, original_language, vote_average, overview, genre_ids, poster_path }) => {

        const img = `https://image.tmdb.org/t/p/w342${poster_path}`;
        const vote = Math.ceil(vote_average / 2);
        return {
            id: id,
            title: name,
            originalTitle: original_name,
            originalLanguage: original_language,
            vote,
            overview,
            genre_ids,
            img
        }
    });
}