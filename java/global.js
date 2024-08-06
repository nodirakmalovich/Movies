const apiKey = '269d9fe6d3cb80cb00777f4bc8fa9e4f'
const url = 'https://api.themoviedb.org/3/search/movie?api_key=269d9fe6d3cb80cb00777f4bc8fa9e4f&query='
const imageUrl = 'https://image.tmdb.org/t/p/w500'

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

function render(movies) {

    movies.map(movie => {
        let card = document.createElement('div')
        card.classList.add('card', 'globalCard')
        let col = document.createElement('div')
        col.classList.add('col-12', 'row', 'm-2', 'p-0', 'globalCard')
        let cardBody = document.createElement('div')
        cardBody.classList.add('cardBody')
        let imgCard = document.createElement('div')
        imgCard.classList.add('col-3')
        cardBody.classList.add('col-8')

        let ratingMovie = document.createElement('p')
        ratingMovie.classList.add('ratingMovie')
        let text = movie.vote_average.toString() || text == 0
        ratingMovie.innerHTML = 'Rating on movie: ' + text.slice(0, 3)

        let cardTitle = document.createElement('p')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = movie.original_title

        let movieDescription = document.createElement('p')
        movieDescription.innerText = 'This movie about: ' + movie.overview.slice(0, 100) + '...'
        movieDescription.classList.add('text-light')

        let cardText = document.createElement('p')
        cardText.classList.add('card-text', 'movieInfo')
        cardText.innerHTML = movie.overview.slice(0, 50) + '...'

        let cardImage = document.createElement('img')
        cardImage.classList.add('cardImage', 'p-0')
        cardImage.src = imageUrl + movie.backdrop_path
        cardImage.alt = movie.original_title

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
            image.alt = movie.original_title

            let title = document.createElement('h1')
            title.classList.add('mx-4', 'my-2', 'text-warning')
            title.innerHTML = movie.original_title

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

            row.appendChild(leftCol)

            // row.appendChild(card)
            container.appendChild(row)

            render(array)
            upcoming()

        }

        let cardLink = document.createElement('a')
        cardLink.classList.add('text-decoration-none', 'text-warning')
        cardLink.href = 'https://www.youtube.com/results?search_query=' + movie.original_title + " " +  movie.release_date.slice(0, 4) + ' trailer'

        let watchListBtn = document.createElement('button')
        watchListBtn.classList.add('watchListBtn', 'globalWatch')
        watchListBtn.innerText = '+ Watchlist'
        watchListBtn.classList.add('btn', 'btn-warning', 'w-100')

        watchListBtn.onclick = function () {
            watchListMovie.push(movie)
            console.log(watchListMovie);
        }

        let lessBtn = document.createElement("button")
        lessBtn.classList.add('btn', 'btn-primary', 'mx-1')
        lessBtn.innerText = "Less Info"

        lessBtn.onclick = function () {
            cardImage.src = imageUrl + movie.poster_path
            cardText.innerHTML = movie.overview.slice(0, 50) + '...'
        }

        cardLink.appendChild(cardTitle)

        cardBody.appendChild(cardLink)
        cardBody.appendChild(movieDescription)
        cardBody.appendChild(ratingMovie)
        cardBody.appendChild(watchListBtn)

        imgCard.appendChild(cardImage)

        col.appendChild(imgCard)
        col.appendChild(cardBody)
        row.appendChild(col)

        container.appendChild(row)
        body.appendChild(container)
    });
}

let input = document.querySelector('.searchMovie')
let button = document.querySelector('.searchBtn')

button.onclick = function (event) {
    event.preventDefault()
    row.innerHTML = ""
    const value = input.value
    const newUrl = url + value
    let keys = []

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results
            let id = []
            movies.map(movie => {
                id.push(movie.id)
            })

            render(movies)

            id.map(key => {
                let keyUrl = `https://api.themoviedb.org/3/movie/${key}/videos?api_key=269d9fe6d3cb80cb00777f4bc8fa9e4f`
                keys.push(keyUrl)
            })

            console.log(keys);
            return
        })
        .catch()
}



