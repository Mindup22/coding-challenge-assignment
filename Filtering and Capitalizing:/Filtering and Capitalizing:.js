// Function to filter books published after 2010 and capitalize author names
function filterAndCapitalizeBooks(books) {
    // Filter books published after 2010
    const filteredBooks = books.filter(book => book.publicationYear >= 2010);

    // Create a new array with capitalized author names
    const booksWithCapitalizedAuthors = filteredBooks.map(book => {
        return {
            title: book.title,
            author: book.author.toUpperCase(),
            publicationYear: book.publicationYear
        };
    });

    return booksWithCapitalizedAuthors;
}

// Example list of books
const books = [
    { title: "Book1", author: "Author1", publicationYear: 2005 },
    { title: "Book2", author: "Author2", publicationYear: 2012 },
    { title: "Book3", author: "Author3", publicationYear: 2008 },
    { title: "Book4", author: "Author4", publicationYear: 2015 },
    // Add more books as needed
];

// Call the function with the list of books
const result = filterAndCapitalizeBooks(books);

// Display the result
console.log(books);
console.count("filter books published after 2010 and capitalize author names ")
console.log(result);
