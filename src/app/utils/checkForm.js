import { displayNotif } from '../services/notifs';
import { isISBN } from './confirmISBN';

export const checkForm = (e) => {

  e.preventDefault();
  // const title = document.getElementById("title").innerHTML;
  // const author= document.getElementById("author").innerHTML;
  const isbn = document.getElementById('isbn').value;
  console.log(isbn);

  if (isISBN(isbn) === false) {
    displayNotif(
      "Invalid ISBN. Please make sure it's in ISBN-13 format.",
      'is-danger',
      'form'
    );
  }
};

export default checkForm;
