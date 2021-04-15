  
const movies = [
    {
        "image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
        "title": "The Kindergarten Teacher",
        "releaseDate": "2018",
        "description": "A teacher sees such great promise in her 5-year-old student that she goes to unreasonable lengths to protect his talent. [from Roten Tomatoes]",
        "runtime": "96 Minutes",
        "director": "Sara Colangelo",
        "studio": "Pie Films",
        "rating": "9/10",
        "watch": "Netflix",
        "id": "0"
    },

    {
        "image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
        "title": "A Nightmare on Elm Street",
        "releaseDate": "1984",
        "description": "The monstrous spirit of a slain child murderer seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death. [from IMDB]",
        "runtime": "91 Minutes",
        "director": "Wes Craven",
        "studio": "New Line Cinema Media",
        "rating": "7/10",
        "watch": "HBO Max",
        "id": "1"
    },
    {
			"image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
			"title": "The Shawshank Redemption",
			"releaseDate": "1994",
			"description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
			"runtime": "142 Minutes",
			"director": "Frank Darabont",
			"studio": "Castle Rock Entertainment",
			"rating": "9.3/10",
			"watch": "Amazon"
		},

		{
			"image": "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224?ref_=tt_ov_i", 
      "title": "The Godfather",
			"releaseDate": "1972",
			"description": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
			"runtime": "175 Minutes",
			"director": "Francis Ford Coppola",
			"studio": "Paramount Pictures",
			"rating": "9.2/10",
			"watch": "Amazon"
		},
		{
			"image": "https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632?ref_=tt_ov_i",
      "title": "The Dark Knight",
			"releaseDate": "2008",
			"description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
			"runtime": "152 Minutes",
			"director": "Christopher Nolan",
			"studio": "Warner Bros.",
			"rating": "9/10",
			"watch": "Amazon"
		},
		{
			"image": "https://www.imdb.com/title/tt0110912/mediaviewer/rm1959546112?ref_=tt_ov_i",
			"title": "Pulp Fiction",
			"releaseDate": "1994",
			"description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
			"runtime": "154 Minutes",
			"director": "Quentin Tarantino",
			"studio": "Miramax",
			"rating": "8.9/10",
			"watch": "Netflix"
		},
		{
			"image": "https://www.imdb.com/title/tt0108052/mediaviewer/rm1610023168?ref_=tt_ov_i",
			"title": "Schindler's List",
			"releaseDate": "1994",
			"description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
			"runtime": "195 Minutes",
			"director": "Steven Spielberg",
			"studio": "Universial Pictures",
			"rating": "8.9/10",
			"watch": "Amazon"
		}
]

export function getMovies() {
    return movies;
}
