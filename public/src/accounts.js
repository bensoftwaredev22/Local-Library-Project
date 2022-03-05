function findAccountById(accounts, id) {
 const AccountById = accounts.find((account) => account.id === id);
  return AccountById;
}

function sortAccountsByLastName(accounts) {
  const listByLastName = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return listByLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0
  const accountId = account.id
   for (let i = 0; i < books.length; i++) {
      if (books[i].borrows.length > 0) {
        for (let j = 0; j < books[i].borrows.length; j++) {
          if (books[i].borrows[j].id === accountId) {
            numberOfBorrows += 1;
          };
        };
      };
    };
  return numberOfBorrows;
};

function getBooksPossessedByAccount(account, books, authors) {
const booksPossessedByAccount = books.reduce((acc, bookElement) => { 
  // go to each book element, go into borrows[] 
  bookElement.borrows.forEach((element) => { 
    // search each borrow element, check for matching account id 
    if (element.id === account.id && !element.returned) { 
      authors.forEach((authorElement) => {
      if (authorElement.id === bookElement.authorId) { 
        bookElement["author"] = authorElement; 
      } 
     }); 
      acc.push(bookElement); 
    } 
   }); return acc; 
  }, []); 
  return booksPossessedByAccount;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
