// consts for exercises 4 & 5
const logPost = document.querySelector('#post-container')
const allActors = document.querySelector('#actor-container')

// JS Exercises:

// 1) function to square an array of integers

function square(arr){
    let newArr = arr.map((int) => int * int)
    return newArr
}

// 2) function to sum an array of object values

function countMe(arr){
    let sum = arr.map(item => item.count).reduce((prev, curr) => prev + curr, 0)
    return sum
}

// 3) function to add names to movies' actor lists (added extra data for testing)

const movies = {
    theGoonies : {
      actors: [
        "Josh Brolin",
        "Corey Feldman",
        "Kerri Green",
      ],
    },
     
    momento : {
      actors: [
        "Guy Pearce",
        "Carrie-Anne Moss",
      ],
    },

    theSoundOfMusic : {
        actors: [
          "Julie Andrews",
          "Christopher Plummer",
        ],
      },
   }

function movieActors(obj, actor){
    let newMovies = JSON.parse(JSON.stringify(obj))
    Object.entries(newMovies).forEach(([key, value]) => {
        (Object.values(value.actors).includes(actor)) ? null : value.actors.push(actor)
    })
    return newMovies
}

// 4) render list of actors from movie object in alphabetical order with no duplicates

filterActors(movies)

function filterActors(obj){
    let allActors = []
    Object.entries(obj).forEach(([key, value]) => {
        allActors.push(...value.actors)
    })
    let actorArray = [...new Set(allActors.sort())]
    renderActors(actorArray)
}

function renderActors(arr){
    let actorUl = document.createElement('ul')

    arr.forEach(actor => {
        let name = document.createElement('ul')
        name.textContent = actor
        actorUl.append(name)
    })

    allActors.append(actorUl)
}

// 5) fetch posts from API, return a specific post which is rendered to the DOM

fetchPosts()

function fetchPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        return res.json().then((data) => {
            if (res.ok) {
            return data
            } else {
            throw data
            }
        })
    })
    .then((data) => {
        filterPosts(data)
    })
    .catch((error) => console.error(error))

    function filterPosts(data){
        filteredPosts = []
        data.forEach(post => {
            if(post.userId === 7 && post.title[0] === "e"){
                filteredPosts.push(post.id)
            }
        })
        filterFetch(filteredPosts[0])
    }
}

function filterFetch(id){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
        return res.json().then((data) => {
            if (res.ok) {
            return data
            } else {
            throw data
            }
        })
    })
    .then((data) => {
        renderPost(data)
    })
    .catch((error) => console.error(error))
}

function renderPost(post){
    let postDiv = document.createElement('div')
    let title = document.createElement('h3')
    let body = document.createElement('p')
    let userId = document.createElement('h4')

    postDiv.className = "post"
    title.textContent = post.title
    body.textContent = post.body
    userId.textContent = post.userId

    postDiv.append(title, body, userId)
    logPost.append(postDiv)
}