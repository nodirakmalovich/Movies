const imageUrl = 'https://image.tmdb.org/t/p/w500'

let body = document.querySelector('body')
let container = document.createElement('div')
container.classList.add('container')
const topContent = document.createElement('div')
topContent.classList.add('top-content', 'row', 'gap-3')
let watchListMovie = []

render(topMovies)

function render(array) {
    array.forEach(movie => {
        let col = document.createElement('div')
        col.classList.add('col-2', 'p-0')

        let card = document.createElement('div')
        card.classList.add('card', 'topCard')

        let image = document.createElement('img')
        image.classList.add('card-img-top')
        image.src = imageUrl + movie.poster_path
        image.alt = movie.original_name

        image.onclick = function () {
            topContent.innerHTML = ""
            mostContainer.innerHTML = ""
            comingContainer.innerHTML = ""

            topContent.classList.add('moreInfoRow')
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
                console.log(watchListMovie);
                render(watchListMovie)
            }



            card.appendChild(title)
            card.appendChild(dateInfo)
            card.appendChild(infoText)
            card.appendChild(watchList)
            card.appendChild(image)

            leftCol.appendChild(card)

            topContent.appendChild(leftCol)

            // row.appendChild(card)
            container.appendChild(topContent)



        }

        let title = document.createElement('p')
        title.classList.add('card-title', 'text-warning')
        title.innerHTML = movie.original_name

        let titleLink = document.createElement('a')
        titleLink.href = 'https://www.youtube.com/results?search_query=' + movie.original_name + " " + movie.first_air_date.slice(0, 4) + ' trailer'
        titleLink.classList.add('text-decoration-none')

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')


        titleLink.appendChild(title)
        cardBody.appendChild(titleLink)
        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card)

        topContent.appendChild(col)
        container.appendChild(topContent)
        body.appendChild(container)
    });
}

let mostContainer = document.createElement('div')
mostContainer.classList.add('container', 'my-5')
const mostContent = document.createElement('div')
mostContent.classList.add('top-content', 'row', 'gap-3')
let mostHeading = document.createElement('h1')
mostHeading.classList.add('upcomingTitle', 'my-3')
mostHeading.innerText = 'Most viewed movies'
let linkToMost = document.createElement('a')
linkToMost.href = './mostViewedMovies.html'
linkToMost.appendChild(mostHeading)
linkToMost.classList.add('text-decoration-none')
mostContainer.appendChild(linkToMost)

mostViewedmovies(mostViewed)

function mostViewedmovies(array) {
    array.forEach(movie => {
        let col = document.createElement('div')
        col.classList.add('col-2', 'p-0')

        let card = document.createElement('div')
        card.classList.add('card', 'topCard')

        let image = document.createElement('img')
        image.classList.add('card-img-top')
        image.src = imageUrl + movie.poster_path
        image.alt = movie.original_name

        image.onclick = function () {
            topContent.innerHTML = ""
            mostContainer.innerHTML = ""
            comingContainer.innerHTML = ""

            topContent.classList.add('moreInfoRow')
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
                console.log(watchListMovie);
            }



            card.appendChild(title)
            card.appendChild(dateInfo)
            card.appendChild(infoText)
            card.appendChild(watchList)
            card.appendChild(image)

            leftCol.appendChild(card)

            topContent.appendChild(leftCol)

            // row.appendChild(card)
            container.appendChild(topContent)



        }

        let title = document.createElement('p')
        title.classList.add('card-title', 'text-warning')
        title.innerHTML = movie.original_name

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        cardBody.appendChild(title)
        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card)

        mostContent.appendChild(col)
        mostContainer.appendChild(mostContent)
        body.appendChild(mostContainer)
    });
}

let comingContainer = document.createElement('div')
comingContainer.classList.add('container', 'my-5')
const comingContent = document.createElement('div')
comingContent.classList.add('top-content', 'row', 'gap-3')
let comingHeading = document.createElement('h1')
comingHeading.classList.add('upcomingTitle', 'my-3')
comingHeading.innerText = 'Coming soon'
let linkToComing = document.createElement('a')
linkToComing.href = './upcomingMovies.html'
linkToComing.appendChild(comingHeading)
linkToComing.classList.add('text-decoration-none')
comingContainer.appendChild(linkToComing)

comingMovies(upcomingMovies)

function comingMovies(array) {
    array.forEach(movie => {
        let col = document.createElement('div')
        col.classList.add('col-2', 'p-0')

        let card = document.createElement('div')
        card.classList.add('card', 'topCard')

        let image = document.createElement('img')
        image.classList.add('card-img-top')
        image.src = imageUrl + movie.poster_path
        image.alt = movie.original_name


        image.onclick = function () {
            topContent.innerHTML = ""
            mostContainer.innerHTML = ""
            comingContainer.innerHTML = ""

            topContent.classList.add('moreInfoRow')
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
                console.log(watchListMovie);
            }



            card.appendChild(title)
            card.appendChild(dateInfo)
            card.appendChild(infoText)
            card.appendChild(watchList)
            card.appendChild(image)

            leftCol.appendChild(card)

            topContent.appendChild(leftCol)

            // row.appendChild(card)
            container.appendChild(topContent)



        }


        let title = document.createElement('p')
        title.classList.add('card-title', 'text-warning')
        title.innerHTML = movie.original_name

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        cardBody.appendChild(title)
        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card)

        comingContent.appendChild(col)
        comingContainer.appendChild(comingContent)
        body.appendChild(comingContainer)
    });
}

let allMovies = []

topMovies.map(movie => {
    allMovies.push(movie)
})
upcomingMovies.map(movie => {
    allMovies.push(movie)
})
mostViewed.map(movie => {
    allMovies.push(movie)
})

console.log(allMovies);

let searchBtn = document.querySelector('.searchBtn')

searchBtn.onclick = function searchMovie(event) {
    event.preventDefault()
    topContent.innerHTML = ""
    mostContainer.innerHTML = ""
    comingContainer.innerHTML = ""

    let input = document.querySelector('.searchMovie')
    let searchedMovie = allMovies.filter(movie => {
        return movie.original_name.toLowerCase().includes(input.value)
    })
    render(searchedMovie)
}

let allLanguagesOfMovie = []

allMovies.map(movie => {
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
    topContent.innerHTML = ""
    mostContainer.innerHTML = ""
    comingContainer.innerHTML = ""

    let moviesByLanguages = allMovies.filter(movie => {
        return movie.original_language.includes(currentLanguage.value)
    })

    render(moviesByLanguages)
}