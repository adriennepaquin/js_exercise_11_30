// consts for exercises 4 & 5
const logPost = document.querySelector('#post-container')
const allActors = document.querySelector('#actor-container')
const actorArray = []

// JS Exercises:

// 1)
function square(arr){
    let newArr = arr.map((int) => int * int)
    return newArr
}

// 2)
function countMe(arr){
    let sum = arr.map(item => item.count).reduce((prev, curr) => prev + curr, 0)
    return sum
}

// 3)
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
   }

//    actor gets added to every movie if not already present ***
function movieActors(obj, actor){
    Object.entries(obj).forEach(([key, value]) => console.log(value.actors))
}

// 4)


// 5)



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