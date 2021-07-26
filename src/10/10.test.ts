import {
  addBooks, addCompany,
  changeAddressUser,
  makeHairstyle, removeBook,
  updateBook, updateCompany,
  upgradeLaptop,
  userType,
  userWithBooks,
  userWithLaptop, withCompaniesType
} from "./10";

test('reference type test', () => {
  const user: userType = {
    name: 'Dima',
    hair: 30,
    address: {
      title: 'Astrakhan'
    }
  }

  const awesomeUser = makeHairstyle(user, 2);

  expect(awesomeUser.hair).toBe(15);
  expect(user.hair).toBe(30);
});

test('change address', () => {
  const user: userType = {
    name: 'Dima',
    hair: 30,
    address: {
      title: 'Astrakhan'
    }
  }

  const newAddressUser = changeAddressUser(user, 'Moscow');

  expect(newAddressUser.address.title).toBe('Moscow');
  expect(user.address.title).toBe('Astrakhan');
});

test('upgrade laptop', () => {
  const user: userWithLaptop = {
    name: 'Dima',
    hair: 30,
    address: {
      title: 'Astrakhan'
    },
    laptop: {
      title: 'ThinkPad'
    }
  }

  const userWithNewLaptop = upgradeLaptop(user, 'Macbook');

  expect(userWithNewLaptop.laptop.title).toBe('Macbook');
  expect(userWithNewLaptop.address).toBe(user.address);
  expect(userWithNewLaptop.laptop).not.toBe(user.laptop);
});

test('add books', () => {
  const user: userWithBooks = {
    name: 'Dima',
    hair: 30,
    address: {
      title: 'Astrakhan'
    },
    laptop: {
      title: 'ThinkPad'
    },
    books: ['html', 'css', 'js'],
  };

  const copyUser = addBooks(user, ['ts', 'rest api']);

  expect(copyUser.books.length).toBe(5);
  expect(copyUser.address).toBe(user.address);
  expect(copyUser.laptop).toBe(user.laptop);
  expect(copyUser.books).not.toBe(user.books);

});

test('update book', () => {
  const user: userWithBooks = {
    name: 'Dima',
    hair: 30,
    address: {
      title: 'Astrakhan'
    },
    laptop: {
      title: 'ThinkPad'
    },
    books: ['html', 'css', 'js'],
  };

  const copyUser = updateBook(user, 'js', 'ts');

  expect(copyUser.books[2]).toBe('ts');
  expect(copyUser.address).toBe(user.address);
  expect(copyUser.laptop).toBe(user.laptop);
});

test('remove book', () => {
  const user: userWithBooks = {
    name: 'Dima',
    hair: 30,
    address: {
      title: 'Astrakhan'
    },
    laptop: {
      title: 'ThinkPad'
    },
    books: ['html', 'css', 'js'],
  };

  const copyUser = removeBook(user, 'js');

  expect(copyUser.books.length).toBe(2);
  expect(copyUser.address).toBe(user.address);
  expect(copyUser.laptop).toBe(user.laptop);
});

test('add company', () => {
  const user: userWithBooks & withCompaniesType = {
    name: 'Dima',
    hair: 30,
    address: {
      title: 'Astrakhan'
    },
    laptop: {
      title: 'ThinkPad'
    },
    books: ['html', 'css', 'js'],
    companies: [{id: 1, title: 'NVBS'}, {id: 2, title: 'Epam'}]
  };

  const copyUser = addCompany(user, 'Google');

  expect(copyUser.companies.length).toBe(3);
  expect(copyUser.companies[2].title).toBe('Google');
  expect(copyUser.address).toBe(user.address);
  expect(copyUser.laptop).toBe(user.laptop);
  expect(copyUser.books).toBe(user.books);
  expect(copyUser.companies).not.toBe(user.companies);
});

test('update company', () => {
  const user: userWithBooks & withCompaniesType = {
    name: 'Dima',
    hair: 30,
    address: {
      title: 'Astrakhan'
    },
    laptop: {
      title: 'ThinkPad'
    },
    books: ['html', 'css', 'js'],
    companies: [{id: 1, title: 'НВБС'}, {id: 2, title: 'Epam'}]
  };

  const copyUser = updateCompany(user, 1, 'NVBS');

  expect(copyUser.companies[0].title).toBe('NVBS');
  expect(copyUser.address).toBe(user.address);
  expect(copyUser.laptop).toBe(user.laptop);
  expect(copyUser.books).toBe(user.books);
  expect(copyUser.companies).not.toBe(user.companies);
});