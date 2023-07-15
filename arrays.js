

let movies = [
    {name: "lotr", genre: "fantasy"},
    {name: "john wick", genre: "action"}
]

// usage of map : to iterate over an array
// and map or apply a function to every element of
// the array
movies.map(
    (element) => {
        console.log(element.name + " belongs to " + element.genre);
    }
)

// create another array using map
let updated_movies = movies.map(
    (element) => {
        return (element.name + " belongs to " + element.genre);
    }
)
console.log("Updated/combined movies are as follows : ")
console.log(updated_movies);