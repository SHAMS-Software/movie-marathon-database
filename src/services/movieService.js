const movies = [
    {
        "image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
        "title": "The Kindergarten Teacher",
        "releaseDate": "2018",
        "description": "A teacher sees such great promise in her 5-year-old student that she goes to unreasonable lengths to protect his talent. [from Roten Tomatoes]",
        "runtime": 96,
        "director": "Sara Colangelo",
        "studio": "Pie Films",
        "score": 9,
        "watch": "Netflix",
        "language": "English",
        "genre": "Drama",
        "rating": "Not Rated",
        "id": "0"
    },
    {
        "image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
        "title": "A Nightmare on Elm Street",
        "releaseDate": "1984",
        "description": "The monstrous spirit of a slain child murderer seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death. [from IMDB]",
        "runtime": 91,
        "director": "Wes Craven",
        "studio": "New Line Cinema Media",
        "score": 7,
        "watch": "HBO Max",
        "language": "English",
        "genre": "Horror",
        "rating": "R",
        "id": "1"
    },
    {
        "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "title": "The Shawshank Redemption",
        "releaseDate": "1994",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "runtime": 142,
        "director": "Frank Darabont",
        "studio": "Castle Rock Entertainment",
        "score": 9.3,
        "watch": "Amazon",
        "language": "English",
        "genre": "Drama",
        "rating": "R",
        "id": "2"
    },

    {
        "image": "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224?ref_=tt_ov_i", 
        "title": "The Godfather",
        "releaseDate": "1972",
        "description": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        "runtime": 175,
        "director": "Francis Ford Coppola",
        "studio": "Paramount Pictures",
        "score": 9.2,
        "watch": "Amazon",
        "language": "English",
        "genre": "Crime",
        "rating": "R",
        "id": "3"
    },
    {
        "image": "https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632?ref_=tt_ov_i",
        "title": "The Dark Knight",
        "releaseDate": "2008",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "runtime": 152,
        "director": "Christopher Nolan",
        "studio": "Warner Bros.",
        "score": 9,
        "watch": "Amazon",
        "language": "English",
        "genre": "Action",
        "rating": "PG-13",
        "id": "4"
    },
    {
        "image": "https://www.imdb.com/title/tt0110912/mediaviewer/rm1959546112?ref_=tt_ov_i",
        "title": "Pulp Fiction",
        "releaseDate": "1994",
        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "runtime": 154,
        "director": "Quentin Tarantino",
        "studio": "Miramax",
        "score": 8.9,
        "watch": "Netflix",
        "language": "English",
        "genre": "Crime",
        "rating": "R",
        "id": "5"
    },
    {
        "image": "https://www.imdb.com/title/tt0108052/mediaviewer/rm1610023168?ref_=tt_ov_i",
        "title": "Schindler's List",
        "releaseDate": "1994",
        "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "runtime": 195,
        "director": "Steven Spielberg",
        "studio": "Universial Pictures",
        "score": 8.9,
        "watch": "Amazon",
        "language": "English",
        "genre": "History",
        "rating": "R",
        "id": "6"
    }
]

export function getMovies() {
    return movies;
}