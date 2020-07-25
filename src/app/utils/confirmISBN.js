export const isISBN = (ISBN) => {
if (ISBN.toString().length === 13) {
    return true;
  } 
    return false;
  
}

export default isISBN;