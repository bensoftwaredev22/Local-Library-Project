function findAuthorById(authors, id) {
  const AuthorById = authors.find((author) => author.id === id);
  return AuthorById;
}

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id)
  return findBook
}

function partitionBooksByBorrowedStatus(books) {
  const booksNotReturned = books.filter(book => book.borrows[0].returned === false);
  const booksReturned = books.filter(book => book.borrows[0].returned === true);
  return [booksNotReturned, booksReturned];
}

function getBorrowersForBook(book, accounts) {
 const grabBorrows = book.borrows;

 const borrowersForBook = accounts.reduce((result, accountElement) => {
   grabBorrows.forEach((borrows) => {
     if (borrows.id === accountElement.id && result.length < 10) {
       accountElement["returned"] = borrows.returned;
       result.push(accountElement);
     }
   });
   return result
 }, []);
 return borrowersForBook
};
 
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
