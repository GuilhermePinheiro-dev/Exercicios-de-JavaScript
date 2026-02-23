const baseURL = 'https://ghibliapi.vercel.app'

const loadSingleMovie = async (id) => {
    try {
        const response = await fetch(`${baseURL}/films/${id}`)

        const movie = await response.json()
        console.log(movie);

    } catch (error) {
        console.log("Ocorreu um erro: ", error);

    }
}
// loadSingleMovie()

const moviesIds = [
    "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky 

    "12cfb892-0ac0-4c5b-94af-521852e46d6a", // Grave of the Fireflies 

    "58611129-2dbc-4a81-a72f-77ddfc1b1b49" // My Neighbor Totoro
]

// const loadingMultipleMoviesAll = async (moviesIds) => {
//     try {
//         const promises = moviesIds.map(async (id) => {
//             const response = await fetch(`${baseURL}/films/${id}`)
//             if (!response.ok) {
//                 throw new Error(`Erro ao buscar filmes ${id}`)
//             }

//             return response.json()
//         })

//         const movies = await Promise.all(promises)

//         console.log(movies);

//     } catch (error) {
//         console.log("Ocorreu um erro: ", error);
//     }
// }

// loadingMultipleMovies(moviesIds)

const loadingMultipleMoviesAllSettled = async (moviesIds) => {
    try {
        const promises = moviesIds.map(async (id) => {
            const response = await fetch(`${baseURL}/films/${id}`)
            if (!response.ok) {
                throw new Error(`Erro ao buscar filmes ${id}`)
            }

            return response.json()
        })

        const movies = await Promise.allSettled(promises)

        movies.forEach((movie, i) => {
            if (movie.status === 'fulfilled') {
                console.log(movie.value.title)
            } else {
                console.log(`Erro ao carregar filme: id = ${moviesIds[i]}`, movie.reason.message);
            }
        })




    } catch (error) {
        console.log("Ocorreu um erro: ", error);
    }
}
loadingMultipleMoviesAllSettled(moviesIds)