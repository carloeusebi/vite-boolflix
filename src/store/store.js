import { reactive } from 'vue';

export const store = reactive({
    movies: [],
    tvShows: [],
    query: '',
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
    store.movies = movies.map(({ id, title, original_title, original_language, vote_average, overview }) => (
        {
            id,
            title,
            originalTitle: original_title,
            originalLanguage: original_language,
            vote: vote_average,
            overview
        }));
};

/**
 * Given an array of tv shows objects, it maps them filtering only the requested fields and then stores them in the store
 * @param {[Object]} tvShows 
 */
export const setTvShows = tvShows => {
    store.tvShows = tvShows.map(({ id, name, original_name, original_language, vote_average, overview }) => (
        {
            id: id,
            title: name,
            originalTitle: original_name,
            originalLanguage: original_language,
            vote: vote_average,
            overview,
        }));
}