let collapsingEmpire = {
    title: "The Collapsing Empire",
    author: "John Scalzi",
    series: "The interdepency",
    year: 2017
}

interface Book{
    title: string,
    author: string,
    series?: string,
    year: number
}

let books: Book[] = [
    collapsingEmpire,
    {
        title: "rocket ship Galileo",
        author: "Rober Heinlein",
        series: "Juveniles",
        year: 1948
    },
    {
        title: "The rolling Stones",
        author: "Rober Heinlein",
        series: "Juvelines",
        year: 1953
    },
    {
        title: "The Moon is a harsh mistress",
        author: "Rober Heinlein",
        series: "Juvelines",
        year: 1957
    }
]

// let printBook = (book: )

// books
//     .filter(book => book.author === "Rober Heinlein")
//     .