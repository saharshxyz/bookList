export const isISBN = (ISBN) => {
if (parseInt(ISBN, 10) === NaN) {
  return false
  } else if (ISBN.toString().length === 13) {
    return true;
  }
}

export default isISBN;