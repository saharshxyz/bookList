export const isISBN = (ISBN) => {
if (ISBN.toString().length === 13) {
    return true;
  } else {
    return false;
  }
}

export default isISBN;