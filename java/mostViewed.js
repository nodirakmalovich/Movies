const apiKey = '269d9fe6d3cb80cb00777f4bc8fa9e4f'
const url = 'https://api.themoviedb.org/3/search/movie?api_key=269d9fe6d3cb80cb00777f4bc8fa9e4f&query='
const imageUrl = 'https://image.tmdb.org/t/p/w500'

// const videoKey = `https://api.themoviedb.org/3/movie/${topMovies.id}/videos?api_key=269d9fe6d3cb80cb00777f4bc8fa9e4f`


let body = document.querySelector('body')
let row = document.createElement('div')
row.classList.add('row')
let container = document.createElement('div')
container.classList.add("container", "mainContainer")

let watchListMovie = []

let watchListBtn = document.querySelector('.watchList')

watchListBtn.onclick = function () {
    row.innerHTML = ""
    render(watchListMovie)
}


render(mostViewed)

function render(array) {

    array.forEach(movie => {
        let card = document.createElement('div')
        card.classList.add('card', 'mainCard')
        let col = document.createElement('div')
        col.classList.add('col-2', 'my-2',)
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        let ratingMovie = document.createElement('p')
        ratingMovie.classList.add('ratingMovie')
        let text = movie.vote_average.toString()
        ratingMovie.innerHTML = 'Rating on movie: ' + text.slice(0, 3)

        let cardTitle = document.createElement('p')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = movie.original_name

        let cardText = document.createElement('p')
        cardText.classList.add('card-text', 'movieInfo')
        cardText.innerHTML = movie.overview.slice(0, 50) + '...'

        let cardImage = document.createElement('img')
        cardImage.classList.add('card-img-top')
        cardImage.src = imageUrl + movie.poster_path
        cardImage.alt = movie.original_name


        cardImage.onclick = function () {
            row.innerHTML = ""
            row.classList.add('moreInfoRow')
            console.log(movie);

            let leftCol = document.createElement('div')
            leftCol.classList.add('col-12')

            let card = document.createElement('div')
            card.classList.add('card', 'my-3')

            let image = document.createElement('img')
            image.classList.add('card-img-bottom',)
            image.src = imageUrl + movie.backdrop_path
            image.alt = movie.original_name

            let title = document.createElement('h1')
            title.classList.add('mx-4', 'my-2', 'text-warning')
            title.innerHTML = movie.original_name

            let dateInfo = document.createElement('h5')
            dateInfo.innerText = "Launched date of movie: " + movie.first_air_date
            dateInfo.classList.add('card-text', 'm-4', 'text-light')

            let infoText = document.createElement('h5')
            infoText.classList.add('card-text', 'm-4', 'text-light')
            infoText.innerText = 'This Movie about: ' + movie.overview


            let watchList = document.createElement('button')
            watchList.classList.add('watchList', 'watchBtn')
            watchList.innerText = '+ Watchlist'
            watchList.classList.add('btn', 'btn-primary', 'w-25', 'm-4')

            watchList.onclick = function () {
                watchListMovie.push(movie)
                alert('Your movie added to watch later list')
                console.log(watchListMovie);
            }



            card.appendChild(title)
            card.appendChild(dateInfo)
            card.appendChild(infoText)
            card.appendChild(watchList)
            card.appendChild(image)

            leftCol.appendChild(card)

            row.appendChild(leftCol)

            // row.appendChild(card)
            container.appendChild(row)

            render(array)
            upcoming()

        }


        let cardLink = document.createElement('a')
        cardLink.classList.add('text-decoration-none', 'text-warning')
        cardLink.href = 'https://www.youtube.com/results?search_query=' + movie.original_name + " " + movie.first_air_date.slice(0, 4) + ' trailer'

        let infoBtn = document.createElement("button")
        infoBtn.classList.add('btn', 'btn-primary')
        infoBtn.innerText = "More Info"

        infoBtn.onclick = function () {
            cardImage.src = imageUrl + movie.backdrop_path
            cardText.innerHTML = movie.overview

        }

        let watchListBtn = document.createElement('button')
        watchListBtn.classList.add('watchListBtn')
        watchListBtn.innerText = '+ Watchlist'
        watchListBtn.classList.add('btn', 'btn-warning', 'w-100')

        watchListBtn.onclick = function () {
            watchListMovie.push(movie)
            console.log(watchListMovie);
        }

        // let lessBtn = document.createElement("button")
        // lessBtn.classList.add('btn', 'btn-primary', 'mx-1')
        // lessBtn.innerText = "Less Info"

        // lessBtn.onclick = function () {
        //     cardImage.src = imageUrl + movie.poster_path
        //     cardText.innerHTML = movie.overview.slice(0, 50) + '...'
        // }

        cardLink.appendChild(cardTitle)

        cardBody.appendChild(ratingMovie)
        cardBody.appendChild(cardLink)
        // cardBody.appendChild(cardText)
        // cardBody.appendChild(infoBtn)
        // cardBody.appendChild(lessBtn)
        cardBody.appendChild(watchListBtn)

        card.appendChild(cardImage)
        card.appendChild(cardBody)

        col.appendChild(card)

        row.appendChild(col)
        container.appendChild(row)
        body.appendChild(container)
    });
}

let keys = []

mostViewed.map(movie => {
    let link = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=269d9fe6d3cb80cb00777f4bc8fa9e4f`
    keys.push(link)
})

// console.log(keys);


let searchBtn = document.querySelector('.searchBtn')

searchBtn.onclick = function searchMovie(event) {
    event.preventDefault()
    row.innerHTML = ""
    let input = document.querySelector('.searchMovie')
    let searchedMovie = mostViewed.filter(movie => {
        return movie.original_name.toLowerCase().includes(input.value)
    })
    render(searchedMovie)
}




let allLanguagesOfMovie = []

mostViewed.map(movie => {
    let language = movie.original_language.slice(movie.original_language[0], movie.original_language[2])

    if (!allLanguagesOfMovie.includes(language)) {
        allLanguagesOfMovie.push(language)
    }
})

let languageOfMovies = document.querySelector('.languageOfMovie')

optionOfLanguages()

function optionOfLanguages() {
    allLanguagesOfMovie.map(language => {
        let option = document.createElement('option')
        option.innerText = language
        option.classList.add('text-light')
        languageOfMovies.appendChild(option)
    })
}

function filterByLanguages(currentLanguage) {
    row.innerHTML = ""
    let moviesByLanguages = mostViewed.filter(movie => {
        return movie.original_language.includes(currentLanguage.value)
    })

    render(moviesByLanguages)
}


