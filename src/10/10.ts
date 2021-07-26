export type userType = {
  name: string
  hair: number
  address: { title: string }
}

type laptopType = {
  title: string
}

export type userWithLaptop = userType & {
  laptop: laptopType
}

export type userWithBooks = userWithLaptop & {
  books: Array<string>
}

export type withCompaniesType = {
  companies: Array<{id: number, title: string}>
}

export function makeHairstyle(user: userType, power: number) {
  return {...user, hair: user.hair / power};
}

export function changeAddressUser(user: userType, city: string) {
  const copyUser = {
    ...user, address: {...user.address}
  };
  copyUser.address.title = city;
  return copyUser;
}

export function upgradeLaptop(user: userWithLaptop, laptopModel: string) {
  const copyUser = {...user};
  copyUser.laptop = {...user.laptop, title: laptopModel};
  return copyUser;
}

export function addBooks(user: userWithBooks, newBook: Array<string>) {
  const copyUser = {...user};
  copyUser.books = [...user.books, ...newBook];
  return copyUser;
}

export function updateBook(user: userWithBooks, oldBook: string, newBook: string) {
  const copyUser = {...user};
  copyUser.books = user.books.map(book =>
    book === oldBook ? newBook : book
  )
  return copyUser;
}

export function removeBook(user: userWithBooks, book: string) {
  return  {
    ...user,
    books: user.books.filter(b => b !== book)
  };
}

export function addCompany(user: userWithBooks & withCompaniesType, newCompany: string) {
  const companyObj = {id: 3, title: newCompany};
  return {
    ...user,
    companies: [...user.companies, companyObj]
  }
}

export function updateCompany(user: userWithBooks & withCompaniesType, id:number, updNameCompany: string) {
  return {
    ...user,
    companies: user.companies
      .map(c => c.id === id ? {...c, title: updNameCompany} : c)
  }
}