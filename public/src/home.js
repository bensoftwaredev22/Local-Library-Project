function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const booksBorrowed = books.filter(book => book.borrows[0].returned === false);
  return booksBorrowed.length;
}

function getMostCommonGenres(books) {
    const genres = books.map((type) => type.genre);
  // countOccurances takes and array (genres) and a value (the genre). If it finds that the value (v) of the iteration is equal to the value provided (genre) it will increase the accumulator by 1, if not then it'll just return the accumulator default value of 1.
  let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let bookArray = [];
  for (genre in genres) {
      bookArray.push({'name': genres[genre], 'count': countOccurrences(genres, genres[genre])});
    }

  bookArray.sort((valueA, valueB) => valueA > valueB ? 1 : -1);
  bookArray.length = 6;
  // book = current book we are opperating on, index = the books index in the array, array = the array we are dealing with (bookArray)
  return bookArray.filter((book, index, array) => array.findIndex(i => i.name == book.name) == index);
};


function getMostPopularBooks(books) {
  let bookArray = [];
  
  for (book in books){
    bookArray.push({"name": books[book].title, "count": books[book].borrows.length})
  };
  sortBigToSmall(bookArray);
  //bookArray.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);
  bookArray.length = 5;
  return bookArray;
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  let countCheckOuts = (arr, val) => arr.reduce((count, book) => 
    (book.authorId === val ? count + book.borrows.length : count), 0);
  
  for (author in authors) {
    popularAuthors.push({"name": authors[author].name.first + " " + authors[author].name.last, "count": countCheckOuts(books, authors[author].id)});
  };
  sortBigToSmall(popularAuthors);
  //popularAuthors.sort((countA, countB) => countA.count < countB.count ? 1 : -1);
  popularAuthors.length = 5;
 return popularAuthors;
}
function sortBigToSmall(list) {
  list.sort((countA, countB) => countA.count < countB.count ? 1 : -1)
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
